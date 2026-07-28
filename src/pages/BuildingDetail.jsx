import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronLeft, Play, Compass } from "lucide-react";
import { campusBuildings } from "@/data/campusData";
import PanoramaViewer from "@/components/PanoramaViewer";
import { toast } from "@/components/ui/use-toast";
import ImageOptimizer from "@/components/ImageOptimizer";

// Full building descriptions
const buildingDescriptions = {
  "outdoor":
    "Area luar FEB Undip mencakup parkiran, danau, lapangan olahraga, pakardo, dan masjid. Fasilitas luar ruangan yang mendukung aktivitas mahasiswa sehari-hari.",
  "gedung-a":
    "Gedung A FEB Undip (Fakultas Ekonomika dan Bisnis Universitas Diponegoro) difokuskan sebagai pusat perkuliahan, area kegiatan mahasiswa, dan pusat layanan akademik.",
  "gedung-b":
    "Gedung B FEB Undip merupakan pusat laboratorium dan penelitian bagi mahasiswa program studi Akuntansi dan Manajemen.",
  "gedung-c":
    "Gedung C FEB Undip digunakan sebagai ruang perkuliahan Ilmu Ekonomi dan Studi Pembangunan, dilengkapi kantin dan fasilitas belajar lengkap.",
  "gedung-iup":
    "Gedung IUP (International Undergraduate Program) menjadi pusat program internasional, perpustakaan digital, dan fasilitas Bloomberg terminal.",
  "gedung-kwu":
    "Gedung KWU (Kewirausahaan) FEB Undip berfungsi sebagai pusat inkubator bisnis dan ruang kreatif untuk mendorong jiwa kewirausahaan mahasiswa.",
  "dekanat":
    "Gedung Dekanat merupakan pusat administrasi dan pimpinan Fakultas Ekonomika dan Bisnis Universitas Diponegoro.",
  "gedung-pkm":
    "Gedung PKM (Pusat Kegiatan Mahasiswa) menjadi rumah bagi berbagai organisasi kemahasiswaan dan kegiatan ekstrakurikuler FEB UNDIP.",
};

// Avatar initials component for missing photos
function AvatarInitials({ name, size = 64 }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return (
    <div
      className="avatar-initials"
      style={{ fontSize: size * 0.28, letterSpacing: "0.05em" }}
    >
      {initials}
    </div>
  );
}

export default function BuildingDetail() {
  const { buildingId } = useParams();
  const navigate = useNavigate();
  const [building, setBuilding] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState(null);

  useEffect(() => {
    const foundBuilding = campusBuildings.find((b) => b.id === buildingId);
    if (foundBuilding) setBuilding(foundBuilding);
    setIsLoading(false);
    setViewMode(null);
    setCurrentRoom(null);
  }, [buildingId]);

  const handleVirtualTourClick = () => {
    if (!building) return;
    const panoramaRoom = building.rooms?.find((r) => r.panorama && !r.video);
    if (panoramaRoom) {
      setCurrentRoom(panoramaRoom);
      setViewMode("panorama");
    } else if (building.rooms?.length > 0) {
      setCurrentRoom(building.rooms[0]);
      setViewMode("panorama");
    } else {
      toast({ title: "Segera Hadir!", description: "Virtual tour akan segera tersedia. 🚀" });
    }
  };

  const handleVirtualNavClick = () => {
    if (!building) return;
    const videoRoom = building.rooms?.find((r) => r.video);
    if (videoRoom) {
      setCurrentRoom(videoRoom);
      setViewMode("video");
    } else {
      toast({ title: "Segera Hadir!", description: "Video navigasi akan segera tersedia. 🚀" });
    }
  };

  const handleRoomChange = (roomId) => {
    if (!building) return;
    const room = building.rooms?.find((r) => r.id === roomId);
    if (room) {
      setCurrentRoom(room);
    } else {
      for (const b of campusBuildings) {
        const targetRoom = b.rooms?.find((r) => r.id === roomId);
        if (targetRoom) { navigate(`/building/${b.id}`); return; }
      }
      toast({ title: "Room tidak ditemukan", description: "Hotspot mengarah ke ruangan yang tidak tersedia." });
    }
  };

  // Loading
  if (isLoading) {
    return (
      <div className="page-dark flex items-center justify-center min-h-screen">
        <div className="loading-spinner" />
      </div>
    );
  }

  // Not found
  if (!building) {
    return (
      <div className="page-dark flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-white mb-4">Gedung tidak ditemukan</h1>
          <button
            className="btn-pill-dark"
            onClick={() => navigate("/home")}
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  // ===== VIEWER MODE =====
  if (viewMode && currentRoom) {
    return (
      <>
        <Helmet><title>{building.name} – Virtual Tour FEB UNDIP</title></Helmet>
        <div className="min-h-screen relative bg-black">
          <button
            id="btn-back-viewer"
            className="btn-back-circle absolute top-4 left-4 z-50"
            onClick={() => { setViewMode(null); setCurrentRoom(null); }}
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
          <div className="glass absolute top-4 right-4 z-50 px-4 py-2 rounded-2xl">
            <span className="text-white font-bold text-sm">{building.name}</span>
          </div>
          {viewMode === "video" && currentRoom.video ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <video width="100%" height="100%" controls autoPlay preload="metadata"
                style={{ maxHeight: "100vh", maxWidth: "100vw" }}
                poster={currentRoom.panorama || undefined}
              >
                <source src={currentRoom.video} type="video/mp4" />
                Browser Anda tidak mendukung video.
              </video>
            </div>
          ) : (
            <div className="absolute inset-0">
              <PanoramaViewer room={currentRoom} onHotspotClick={handleRoomChange} />
            </div>
          )}
        </div>
      </>
    );
  }

  // ===== DETAIL PAGE =====
  const description =
    buildingDescriptions[building.id] ||
    building.description ||
    `${building.name} merupakan salah satu gedung utama Fakultas Ekonomika dan Bisnis Universitas Diponegoro yang difungsikan untuk kegiatan perkuliahan dan pelayanan akademik.`;

  const panoramaThumbnail = building.rooms?.find((r) => r.panorama)?.panorama;
  const hasVideo = !!building.rooms?.find((r) => r.video);

  return (
    <>
      <Helmet>
        <title>{building.name} – FEB UNDIP</title>
        <meta name="description" content={`Jelajahi ${building.name} di FEB Universitas Diponegoro. ${description}`} />
      </Helmet>

      <div className="page-dark">
        {/* ===== HERO FULL WIDTH ===== */}
        <div className="detail-hero">
          <ImageOptimizer
            src={building.thumbnail || "/images/LOGO FEB UNDIP.png"}
            alt={`${building.name} – foto eksterior`}
            className="w-full h-full object-cover"
          />
          <div className="detail-hero-overlay" />

          {/* Back */}
          <div className="detail-hero-back">
            <button
              id="btn-back-building"
              className="btn-back-circle"
              onClick={() => navigate("/home")}
              aria-label="Kembali"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
          </div>

          {/* Hero text overlay */}
          <motion.div
            className="detail-hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1>{building.name}</h1>
            <p>{description}</p>
          </motion.div>
        </div>

        {/* ===== EXPLORE SECTION ===== */}
        <div className="detail-content">
          <div className="detail-explore-label">Explore</div>
          <div className="detail-cards-row">

            {/* Virtual Tour */}
            <motion.div
              id="btn-virtual-tour"
              className="detail-feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              onClick={handleVirtualTourClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleVirtualTourClick()}
              aria-label={`Virtual Tour ${building.name}`}
            >
              <div className="detail-feature-card-media">
                {panoramaThumbnail ? (
                  <ImageOptimizer
                    src={panoramaThumbnail}
                    alt={`Virtual Tour ${building.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{ background: "linear-gradient(135deg, #271C51, #3b2a75)" }}
                  />
                )}
                <div className="detail-feature-card-media-overlay" />
              </div>
              <div className="detail-feature-card-body">
                <div className="detail-feature-card-info">
                  <h3 className="detail-feature-card-title">Virtual Tour</h3>
                  <p className="detail-feature-card-desc">
                    Penelusuran panoramik 360 derajat area publik dan fasilitas luar ruangan.
                  </p>
                </div>
                <Compass className="detail-feature-card-icon" size={22} />
              </div>
            </motion.div>

            {/* Virtual Navigation */}
            <motion.div
              id="btn-virtual-nav"
              className="detail-feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              onClick={handleVirtualNavClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleVirtualNavClick()}
              aria-label={`Virtual Navigation ${building.name}`}
            >
              <div className="detail-feature-card-media" style={{ background: "#111" }}>
                {/* Dark bg with play button */}
                <div className="detail-feature-card-play">
                  <div className="detail-feature-card-play-btn">
                    <Play className="text-white ml-1" fill="white" size={22} />
                  </div>
                </div>
              </div>
              <div className="detail-feature-card-body">
                <div className="detail-feature-card-info">
                  <h3 className="detail-feature-card-title">Virtual Navigation</h3>
                  <p className="detail-feature-card-desc">
                    Panduan visual navigasi gedung untuk membantu aksesibilitas mahasiswa baru.
                  </p>
                </div>
                {/* Custom A-nav icon */}
                <svg
                  className="detail-feature-card-icon"
                  width="22" height="22"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
