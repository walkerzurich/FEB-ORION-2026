import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Compass, Building2, BookOpen, Sparkles } from "lucide-react";
import { campusBuildings } from "@/data/campusData";
import ImageOptimizer from "@/components/ImageOptimizer";

// Subtitle for each building (shown below card name)
const buildingSubtitles = {
  "outdoor":    "Fasilitas Outdoor",
  "gedung-a":   "Ruang Kelas Utama",
  "gedung-b":   "Lobby & Pojok Kemenkeu",
  "gedung-c":   "Kantin & Ruang Kuliah",
  "gedung-iup": "International Program",
  "gedung-kwu": "Inspiration Space & Galeri",
  "dekanat":    "Pusat Administrasi",
  "gedung-pkm": "Organisasi Mahasiswa",
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Grizzy Compass – Beranda</title>
        <meta
          name="description"
          content="Jelajahi FEB UNDIP – Virtual Tour Gedung, Kepemimpinan, dan Ormawa Fakultas Ekonomika dan Bisnis Universitas Diponegoro melalui Grizzy Compass."
        />
      </Helmet>

      <div className="home-root relative overflow-hidden bg-[#191238]">
        {/* Modern Background Gradient Glow Blobs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #9438E3 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #5F5EBB 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #EEB463 0%, transparent 70%)",
          }}
        />

        <div className="home-container-inner relative z-10">

          {/* ======= TOP BAR ======= */}
          <div className="home-topbar flex items-center justify-between py-5 px-6 md:px-10">
            <div className="flex items-center gap-4">
              <button
                id="btn-back-home"
                className="btn-back-circle"
                onClick={() => navigate("/")}
                aria-label="Kembali ke opening"
              >
                <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>

              <div className="flex items-center gap-3.5">
                <ImageOptimizer
                  src="/images/LOGO ORION 26.PNG"
                  alt="Logo Grizzy Compass"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_0_12px_rgba(238,180,99,0.5)]"
                  priority={true}
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-tight">
                    Grizzy Compass
                  </h1>
                  <p className="text-[0.72rem] md:text-[0.78rem] font-semibold text-[#DDDADE]/80 tracking-wider uppercase mt-0.5">
                    Fakultas Ekonomika dan Bisnis, Universitas Diponegoro
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======= BODY ======= */}
          <div className="home-body">

            {/* === LEFT COLUMN: JELAJAHI === */}
            <div>
              <div className="section-label flex items-center gap-2 text-xs font-bold tracking-widest text-[#EEB463] mb-3">
                <Compass className="w-4 h-4 text-[#EEB463]" />
                <span>JELAJAHI</span>
              </div>
              <div className="explore-col space-y-4">

                {/* Seputar FEB – Cover Logo FEB Undip (Full 100% un-cropped logo & fully visible text) */}
                <motion.div
                  id="hero-card-seputar-feb"
                  className="explore-main-card relative rounded-3xl overflow-hidden cursor-pointer h-[340px] border border-[rgba(221,218,222,0.18)] bg-gradient-to-br from-[#271C51] via-[#302361] to-[#191238] shadow-2xl transition-all duration-300 hover:border-[#9438E3] hover:shadow-[0_0_30px_rgba(148,56,227,0.35)] flex flex-col justify-between"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => navigate("/feb-desc")}
                >
                  {/* Top Badge */}
                  <div className="p-4 pb-0 relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9438E3]/30 border border-[#9438E3]/50 text-[0.7rem] font-bold text-[#EEB463] uppercase tracking-wider backdrop-blur-md">
                      <BookOpen className="w-3.5 h-3.5 text-[#EEB463]" /> Profil Kampus
                    </div>
                  </div>

                  {/* Centered FULL Logo - Perfect scaling without cropping */}
                  <div className="flex-1 flex items-center justify-center px-4 py-2 relative z-10">
                    <img
                      src="/images/LOGO FEB UNDIP.png"
                      alt="LOGO FEB UNDIP"
                      width={547}
                      height={196}
                      className="w-auto h-auto max-w-[92%] max-h-[145px] object-contain filter drop-shadow-[0_0_16px_rgba(255,255,255,0.45)] transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Bottom Text Bar - Fully padded & visible */}
                  <div className="p-4 bg-[#140e2d] border-t border-[rgba(221,218,222,0.12)] relative z-10">
                    <h3 className="text-lg font-extrabold text-white leading-tight">Seputar FEB</h3>
                    <p className="text-xs text-[#DDDADE]/80 italic mt-0.5 leading-normal">Pusat Keunggulan Akademik Berstandar Internasional</p>
                  </div>
                </motion.div>

                {/* Sub cards */}
                <div className="explore-sub-row grid grid-cols-2 gap-4">
                  <motion.div
                    id="hero-card-staff"
                    className="explore-sub-card relative h-44 rounded-2xl overflow-hidden cursor-pointer bg-[#302361] border border-[rgba(221,218,222,0.14)] shadow-xl transition-all duration-300 hover:border-[#9438E3] hover:shadow-[0_0_24px_rgba(148,56,227,0.3)]"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    onClick={() => navigate("/staff")}
                  >
                    <img
                      src="/images/Pimpinan Fakultas dan Departemen/Pimpinan FEB Undip.png"
                      alt="Struktur Kepemimpinan"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="explore-sub-overlay absolute inset-0 bg-gradient-to-t from-[#191238] via-[#191238]/60 to-transparent" />
                    <div className="explore-sub-text absolute bottom-4 left-4 right-4 text-sm font-bold text-white leading-snug">
                      Struktur Kepemimpinan
                    </div>
                  </motion.div>

                  <motion.div
                    id="hero-card-ormawa"
                    className="explore-sub-card relative h-44 rounded-2xl overflow-hidden cursor-pointer bg-[#302361] border border-[rgba(221,218,222,0.14)] shadow-xl transition-all duration-300 hover:border-[#5F5EBB] hover:shadow-[0_0_24px_rgba(95,94,187,0.3)]"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.18 }}
                    onClick={() => navigate("/ormawa")}
                  >
                    <img
                      src="/images/Kumpulan Logo UKM dan Ormawa.png"
                      alt="Ormawa & UKM"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="explore-sub-overlay absolute inset-0 bg-gradient-to-t from-[#191238] via-[#191238]/60 to-transparent" />
                    <div className="explore-sub-text absolute bottom-4 left-4 right-4 text-sm font-bold text-white leading-snug">
                      Ormawa &amp; UKM
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* === RIGHT COLUMN: GEDUNG === */}
            <div className="buildings-col">
              <div className="buildings-header mb-3">
                <div className="section-label flex items-center gap-2 text-xs font-bold tracking-widest text-[#9438E3]">
                  <Building2 className="w-4 h-4 text-[#9438E3]" />
                  <span>VIRTUAL TOUR GEDUNG</span>
                </div>
              </div>

              <div className="buildings-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {campusBuildings.map((building, index) => (
                  <motion.div
                    key={building.id}
                    id={`building-card-${building.id}`}
                    className="building-item relative bg-[#271C51] border border-[rgba(221,218,222,0.14)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#EEB463] hover:shadow-[0_8px_24px_rgba(238,180,99,0.25)] hover:-translate-y-1"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.38, delay: index * 0.055 }}
                    onClick={() => navigate(`/building/${building.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && navigate(`/building/${building.id}`)
                    }
                    aria-label={`Jelajahi ${building.name}`}
                  >
                    <div className="building-item-img w-full aspect-[4/3] overflow-hidden bg-black/40">
                      <ImageOptimizer
                        src={building.thumbnail || "/images/LOGO FEB UNDIP.png"}
                        alt={building.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-3">
                      <div className="building-item-name font-bold text-sm text-white leading-tight">
                        {building.name}
                      </div>
                      {buildingSubtitles[building.id] && (
                        <div className="building-item-sub text-[0.7rem] text-[#DDDADE]/70 mt-1">
                          {buildingSubtitles[building.id]}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
