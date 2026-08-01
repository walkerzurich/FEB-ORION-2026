import React, { useEffect, useRef, useState } from "react";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import "photo-sphere-viewer/dist/plugins/markers.css";
import { Loader2, Info } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

// Hotspot type
// x: longitude (0-1), y: latitude (0-1)
function convertHotspots(hotspots) {
  if (!hotspots) return [];
  return hotspots
    .map((h, i) => {
      let longitude = 0;
      let latitude = 0;

      if (typeof h.yaw === "number") {
        longitude = (h.yaw * Math.PI) / 180;
        latitude = typeof h.pitch === "number" ? (h.pitch * Math.PI) / 180 : -0.15;
      } else if (typeof h.x === "number" && typeof h.y === "number") {
        longitude = h.x * 2 * Math.PI;
        latitude = (0.5 - h.y) * Math.PI;
      } else if (h.position) {
        const { x, y, z } = h.position;
        // Jika x di atas 30 (seperti x: 180), anggap langsung sebagai Derajat (0-360 deg)
        if (Math.abs(x) > 30) {
          longitude = (x * Math.PI) / 180;
          latitude = typeof y === "number" ? (y * Math.PI) / 180 : -0.15;
        } else {
          const r = Math.sqrt(x * x + y * y + z * z);
          if (!r || isNaN(r)) return null;
          longitude = Math.atan2(x, z);
          if (longitude < 0) longitude += 2 * Math.PI;
          latitude = Math.asin(Math.max(-1, Math.min(1, y / r)));
        }
      } else {
        return null;
      }

      return {
        id: h.id || `hotspot-${i}`,
        longitude,
        latitude,
        data: { target: h.targetRoom || h.target },
        html: `
          <div class="custom-hotspot-container" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; pointer-events: auto;">
            <div class="hotspot-icon" style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #4f46e5); border: 2.5px solid #EEB463; box-shadow: 0 4px 14px rgba(0,0,0,0.5), 0 0 10px rgba(238,180,99,0.4); display: flex; align-items: center; justify-content: center; transition: transform 0.2s ease;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </div>
            <div style="margin-top: 4px; background: rgba(15, 23, 42, 0.92); color: #FFFFFF; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 600; white-space: nowrap; border: 1.5px solid rgba(238, 180, 99, 0.7); box-shadow: 0 4px 12px rgba(0,0,0,0.5); text-align: center; font-family: system-ui, -apple-system, sans-serif; letter-spacing: 0.2px;">
              ${h.label || "Navigasi"}
            </div>
          </div>
        `,
        width: 140,
        height: 75,
        anchor: "center center",
      };
    })
    .filter(Boolean);
}

const PanoramaViewer = ({ room, onHotspotClick, height = "100%" }) => {
  const viewerRef = useRef(null);
  const psvInstance = useRef(null);
  const markersPluginRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let PSV, Markers;
    setIsLoading(true);
    setError(null);
    Promise.all([
      import("photo-sphere-viewer"),
      import("photo-sphere-viewer/dist/plugins/markers"),
    ])
      .then(([_PSV, _Markers]) => {
        if (!isMounted || !viewerRef.current || !room) return;
        PSV = _PSV.default || _PSV;
        const MarkersPlugin = _Markers.MarkersPlugin || _Markers.default;
        const initLong = room.defaultLong !== undefined ? room.defaultLong : Math.PI;
        const initLat = room.defaultLat !== undefined ? room.defaultLat : 0;
        psvInstance.current = new PSV.Viewer({
          container: viewerRef.current,
          panorama: room.panorama,
          navbar: "zoom move fullscreen",
          defaultLong: initLong,
          defaultLat: initLat,
          plugins: [MarkersPlugin],
        });
        markersPluginRef.current =
          psvInstance.current.getPlugin(MarkersPlugin) || null;
        if (
          markersPluginRef.current &&
          room.hotspots &&
          room.hotspots.length > 0
        ) {
          markersPluginRef.current.setMarkers(convertHotspots(room.hotspots));
          markersPluginRef.current.on("select-marker", (e, marker) => {
            if (onHotspotClick && marker.data && marker.data.target) {
              onHotspotClick(marker.data.target);
            }
          });
        }
        // Loading and error events
        psvInstance.current.on("ready", () => {
          setIsLoading(false);
        });
        psvInstance.current.on("panorama-load-fail", () => {
          setError("Failed to load panorama");
          setIsLoading(false);
        });
      })
      .catch((err) => {
        setError("Failed to initialize panorama viewer");
        setIsLoading(false);
      });
    return () => {
      isMounted = false;
      if (psvInstance.current) {
        psvInstance.current.destroy();
        psvInstance.current = null;
      }
      markersPluginRef.current = null;
    };
    // Only run on mount/unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  // Update panorama and markers when image or hotspots change
  useEffect(() => {
    if (psvInstance.current && room) {
      const long = room.defaultLong !== undefined ? room.defaultLong : Math.PI;
      const lat = room.defaultLat !== undefined ? room.defaultLat : 0;
      psvInstance.current
        .setPanorama(room.panorama)
        .then(() => {
          if (psvInstance.current) {
            psvInstance.current.rotate({ longitude: long, latitude: lat });
          }
        })
        .catch(() => {});
    }
    if (markersPluginRef.current && room && room.hotspots) {
      markersPluginRef.current.setMarkers(convertHotspots(room.hotspots));
    }
  }, [room]);

  // Info button di-nonaktifkan sesuai permintaan
  // const handleInfoClick = () => {
  //   toast({
  //     title: `📍 ${room.name}`,
  //     description: `You're currently viewing the ${room.name}. Use the navigation panel to explore other rooms or click on hotspots within the panorama! 🚀`,
  //   });
  // };

  return (
    <div className="panorama-container">
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Loading Panorama
            </h3>
            <p className="text-blue-200">Preparing your 360° experience...</p>
          </div>
        </motion.div>
      )}

      {/* Error Overlay */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <div className="glass rounded-2xl p-8 text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Panorama Unavailable
            </h3>
            <p className="text-blue-200 mb-4">{error}</p>
            <p className="text-sm text-blue-300">Showing static view instead</p>
          </div>
        </motion.div>
      )}

      {/* Room Info Button (dinonaktifkan) */}
      {/* <button
        onClick={handleInfoClick}
        className="absolute bottom-6 right-6 z-40 glass rounded-full p-3 hover:bg-white/20 transition-colors"
      >
        <Info className="w-5 h-5 text-white" />
      </button> */}

      {/* Panorama Container */}
      <div
        ref={viewerRef}
        style={{
          width: "100%",
          height,
          // borderRadius removed so canvas is not rounded
          overflow: "hidden",
          zIndex: 20, // ensure above overlays
          position: "relative",
        }}
      />
    </div>
  );
};

export default PanoramaViewer;
