import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronLeft, Users, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ===== DATA STAFF PENGAJAR (SESUAI DENGAN FOTO SAMPLE 1:1) =====
const dekanData = {
  role: "Dekan",
  name: "Prof. Faisal, S.E., M.Si., Ph.D.",
  description: "Dekan Fakultas Ekonomika dan Bisnis Universitas Diponegoro.",
  photo: "/images/staff/sample.jpg",
};

const wakilDekanData = [
  {
    role: "Wakil Dekan Akademik dan Kemahasiswaan",
    name: "Prof. Dr. Harjum Muharam, S.E., M.E.",
    description: "Wakil Dekan Bidang Akademik dan Kemahasiswaan FEB UNDIP.",
    photo: "/images/staff/sample.jpg",
  },
  {
    role: "Wakil Dekan Sumber Daya",
    name: "Dr. Wahyu Meiranto, S.E., M.Si., Akt.",
    description: "Wakil Dekan Bidang Sumber Daya FEB UNDIP.",
    photo: "/images/staff/sample.jpg",
  },
];

const pimpinanDepartemen = [
  {
    dept: "Ketua Departemen Manajemen",
    name: "Prof. Dr. Suharnomo, S.E., M.Si.",
    photo: "/images/staff/sample.jpg",
  },
  {
    dept: "Ketua Departemen Akuntansi",
    name: "Agung Juliarto, S.E., M.Si., Akt., Ph.D.",
    photo: "/images/staff/sample.jpg",
  },
  {
    dept: "Ketua Departemen Ilmu Ekonomi dan Studi Pembangunan",
    name: "Prof. Akhmad Syakir Kurnia, S.E., M.Si., Ph.D.",
    photo: "/images/staff/sample.jpg",
  },
];

// Component Foto Staff 1:1 Rasio (Persegi)
function StaffPhoto({ src, alt, sizeClass = "w-44 h-44", isDekan = false }) {
  const [err, setErr] = useState(false);
  const fallbackSrc = "/images/staff/sample.jpg";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl aspect-square ${sizeClass} mx-auto flex-shrink-0 mb-4 transition-transform duration-300 hover:scale-105 ${
        isDekan
          ? "border-2 border-[#EEB463] shadow-[0_0_24px_rgba(238,180,99,0.35)]"
          : "border-2 border-[#9438E3]/50 shadow-xl"
      }`}
    >
      <img
        src={err ? fallbackSrc : (src || fallbackSrc)}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setErr(true)}
      />
    </div>
  );
}

export default function StaffPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Struktur Kepemimpinan – FEB UNDIP</title>
        <meta
          name="description"
          content="Struktur Kepemimpinan Fakultas Ekonomika dan Bisnis UNDIP – Dekan, Wakil Dekan, dan Ketua Departemen."
        />
      </Helmet>

      <div className="page-dark min-h-screen bg-[#191238] pb-20">
        <div className="staff-root max-w-6xl mx-auto px-4 pt-6">

          {/* ======= HEADER ======= */}
          <div className="flex items-center gap-4 mb-10">
            <button
              id="btn-back-staff"
              className="btn-back-circle"
              onClick={() => navigate("/home")}
              aria-label="Kembali"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
            <div>
              <h1 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight">
                Struktur Kepemimpinan
              </h1>
              <p className="text-[#DDDADE]/70 text-xs sm:text-sm mt-0.5">
                Fakultas Ekonomika dan Bisnis Universitas Diponegoro
              </p>
            </div>
          </div>

          {/* ======= PIMPINAN FAKULTAS (HIRARKI SEPERTI TAMPILAN GAMBAR) ======= */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* Header Section */}
            <div className="pb-3 mb-10 border-b border-[rgba(221,218,222,0.14)]">
              <div className="flex items-center gap-2 text-white font-bold text-xl">
                <Users size={22} className="text-[#9438E3]" />
                <span>Pimpinan Fakultas</span>
              </div>
              <div className="w-12 h-1 bg-[#EEB463] rounded-full mt-2"></div>
            </div>

            {/* BARIS 1: DEKAN (Tengah Atas) */}
            <div className="flex justify-center mb-12">
              <motion.div
                className="bg-[#271C51] p-6 rounded-3xl border border-[#EEB463]/40 shadow-2xl max-w-md w-full text-center hover:border-[#EEB463] transition-all"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
              >
                <StaffPhoto
                  src={dekanData.photo}
                  alt={dekanData.name}
                  sizeClass="w-48 h-48 sm:w-52 sm:h-52"
                  isDekan
                />
                <div className="text-[#EEB463] text-sm font-bold tracking-wide uppercase mb-1">
                  {dekanData.role}
                </div>
                <h2 className="text-white font-extrabold text-lg sm:text-xl leading-snug mb-2">
                  {dekanData.name}
                </h2>
                <p className="text-[#DDDADE]/75 text-xs leading-relaxed max-w-xs mx-auto">
                  {dekanData.description}
                </p>
              </motion.div>
            </div>

            {/* BARIS 2: WAKIL DEKAN (2 Kolom Bersampingan) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {wakilDekanData.map((wd, i) => (
                <motion.div
                  key={wd.role}
                  className="bg-[#302361] p-6 rounded-3xl border border-[rgba(221,218,222,0.14)] shadow-xl text-center hover:bg-[#392a72] hover:border-[#9438E3]/60 transition-all"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                >
                  <StaffPhoto
                    src={wd.photo}
                    alt={wd.name}
                    sizeClass="w-40 h-40 sm:w-44 sm:h-44"
                  />
                  <div className="text-[#9438E3] text-xs font-bold tracking-wide uppercase mb-1">
                    {wd.role}
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-2">
                    {wd.name}
                  </h3>
                  <p className="text-[#DDDADE]/75 text-xs leading-relaxed max-w-xs mx-auto">
                    {wd.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ======= PIMPINAN DEPARTEMEN ======= */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <div className="pb-3 mb-8 border-b border-[rgba(221,218,222,0.14)]">
              <div className="flex items-center gap-2 text-white font-bold text-xl">
                <Layers size={22} className="text-[#9438E3]" />
                <span>Pimpinan Departemen</span>
              </div>
              <div className="w-12 h-1 bg-[#9438E3] rounded-full mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pimpinanDepartemen.map((d, i) => (
                <motion.div
                  key={d.dept}
                  className="bg-[#302361] p-5 rounded-3xl border border-[rgba(221,218,222,0.14)] shadow-xl text-center hover:bg-[#392a72] hover:border-[#9438E3]/60 transition-all flex flex-col items-center justify-between"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.25 + i * 0.08 }}
                >
                  <div>
                    <StaffPhoto
                      src={d.photo}
                      alt={d.name}
                      sizeClass="w-32 h-32 sm:w-36 sm:h-36"
                    />
                    <div className="text-[#EEB463] text-xs font-semibold block mb-1">
                      {d.dept}
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                      {d.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer note */}
          <p className="text-center text-xs italic text-[#DDDADE]/40 mt-10">
            Data Struktur Kepemimpinan Fakultas Ekonomika dan Bisnis Universitas Diponegoro
          </p>

        </div>
      </div>
    </>
  );
}
