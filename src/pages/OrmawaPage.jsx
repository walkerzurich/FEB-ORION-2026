import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logoList } from "@/data/LogoList";

const ormawaLogos =
  logoList.find((l) => l.folder.includes("Logo Ormawa"))?.logos || [];
const ukmLogos =
  logoList.find((l) => l.folder.includes("Logo UKM"))?.logos || [];

const tabs = [
  { key: "ormawa", label: "Ormawa", logos: ormawaLogos, folder: "Logo Ormawa" },
  { key: "ukm", label: "UKM", logos: ukmLogos, folder: "Logo UKM" },
];

function LogoCard({ src, alt, index }) {
  const [err, setErr] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
      className="ormawa-logo-card group"
    >
      {!err ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          onError={() => setErr(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-400 text-xs text-center px-1 leading-tight">
            {alt}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function OrmawaPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ormawa");

  const currentTab = tabs.find((t) => t.key === activeTab);

  return (
    <>
      <Helmet>
        <title>Ormawa & UKM – FEB UNDIP</title>
        <meta
          name="description"
          content="Organisasi Mahasiswa (Ormawa) dan Unit Kegiatan Mahasiswa (UKM) di Fakultas Ekonomika dan Bisnis UNDIP."
        />
      </Helmet>

      <div className="ormawa-root">
        <div className="ormawa-container">

          {/* ====== HEADER ====== */}
          <div className="flex items-center gap-3 pt-6 mb-6">
            <button
              id="btn-back-ormawa"
              className="btn-back-circle flex-shrink-0"
              onClick={() => navigate("/home")}
              aria-label="Kembali"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">
                Ormawa & UKM
              </h1>
              <p className="text-white/50 text-xs mt-0.5">
                FEB Universitas Diponegoro
              </p>
            </div>
          </div>

          {/* ====== TABS ====== */}
          <div
            className="flex gap-1 p-1 mb-6 rounded-2xl"
            style={{ background: "rgba(39,28,81,0.7)", border: "1px solid rgba(221,218,222,0.18)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                id={`tab-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250"
                style={{
                  background:
                    activeTab === tab.key
                      ? "linear-gradient(135deg, #9438E3, #5F5EBB)"
                      : "transparent",
                  color: activeTab === tab.key ? "#FFFFFF" : "#DDDADE",
                  boxShadow:
                    activeTab === tab.key
                      ? "0 4px 16px rgba(148,56,227,0.45)"
                      : "none",
                }}
              >
                {tab.label}
                <span
                  className="ml-1.5 text-xs"
                  style={{ opacity: 0.6 }}
                >
                  ({tab.logos.length})
                </span>
              </button>
            ))}
          </div>

          {/* ====== LOGO GRID ====== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {currentTab?.logos.length === 0 ? (
                <div className="text-center py-16">
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <span className="text-2xl opacity-40">🏛️</span>
                  </div>
                  <p className="text-white/40 text-sm">
                    Data logo belum tersedia
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {currentTab.logos.map((logo, i) => (
                    <LogoCard
                      key={`${logo}-${i}`}
                      src={`/images/${currentTab.folder}/${logo}`}
                      alt={logo.replace(/\.[^.]+$/, "").replace(/^\d+\.\s*/, "")}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}
