import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronLeft, Users, Layers, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ===== DATA PIMPINAN FAKULTAS =====
const dekanData = {
  role: "Dekan",
  name: "Prof. Faisal, S.E., M.Si., Ph.D.",
  description: "Dekan Fakultas Ekonomika dan Bisnis Universitas Diponegoro.",
  photo: "/images/Pimpinan Fakultas dan Departemen/Dekan_ Prof. Faisal, S.E., M.Si., Ph.D..png",
};

const wakilDekanData = [
  {
    role: "Wakil Dekan Akademik dan Kemahasiswaan",
    name: "Prof. Dr. Harjum Muharam, S.E., M.E.",
    description: "Wakil Dekan Bidang Akademik dan Kemahasiswaan FEB UNDIP.",
    photo: "/images/Pimpinan Fakultas dan Departemen/Wakil Dekan Akademik dan Kemahasiswaan_ Prof. Dr. Harjum Muharam, S.E., M.E..png",
  },
  {
    role: "Wakil Dekan Sumber Daya",
    name: "Dr. Wahyu Meiranto, S.E., M.Si., Akt.",
    description: "Wakil Dekan Bidang Sumber Daya FEB UNDIP.",
    photo: "/images/Pimpinan Fakultas dan Departemen/Wakil Dekan Sumber Daya_ Dr. Wahyu Meiranto, S.E., M.Si., Akt..png",
  },
];

// ===== DATA PIMPINAN DEPARTEMEN & PRODI =====
const departmentLeadership = [
  {
    departmentName: "Departemen Akuntansi",
    icon: "📊",
    prodis: [
      {
        prodiName: "S-1 Akuntansi",
        leaders: [
          {
            role: "Ketua Departemen & Ketua Prodi S-1 Akuntansi",
            name: "Agung Juliarto, S.E., M.Si., Akt., Ph.D.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Akuntansi/Ketua Departemen_ Ketua Program Studi S-1 Akuntansi_ Agung Juliarto, S.E., M.Si., Akt., Ph.D..png",
          },
          {
            role: "Sekretaris Program Studi S-1 Akuntansi",
            name: "Adi Firman Ramadhan, S.E., M.Ak., Ph.D.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Akuntansi/Sekretaris Program Studi S-1 Akuntansi_ Adi Firman Ramadhan, S.E., M.Ak., Ph.D...png",
          },
        ],
      },
    ],
  },
  {
    departmentName: "Departemen Manajemen",
    icon: "🏛️",
    prodis: [
      {
        prodiName: "S-1 Manajemen",
        leaders: [
          {
            role: "Ketua Departemen & Ketua Prodi S-1 Manajemen",
            name: "Dr. Ismi Darmastuti, S.E., M.M.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Manajemen/S1 Manajemen/Ketua Departemen_ Ketua Program Studi S-1 Manajemen_ Dr. Ismi Darmastuti, S.E., M.M..png",
          },
          {
            role: "Sekretaris Program Studi S-1 Manajemen",
            name: "Aulia Vidya Almadana, S.E., M.M.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Manajemen/S1 Manajemen/Sekretaris Program Studi S-1 Manajemen_ Aulia Vidya Almadana, S.E., M.M..png",
          },
        ],
      },
      {
        prodiName: "S-1 Bisnis Digital",
        leaders: [
          {
            role: "Ketua Program Studi S-1 Bisnis Digital",
            name: "Dr. Kardison Lumban Batu, S.E., M.Sc.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Manajemen/S1 Bisnis Digital/Ketua Program Studi S-1 Bisnis Digital_ Dr. Kardison Lumban Batu, S.E., M.Sc..png",
          },
          {
            role: "Sekretaris Program Studi S-1 Bisnis Digital",
            name: "Dr. Eisha Lataruva, S.E., M.M.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Manajemen/S1 Bisnis Digital/Sekretaris Program Studi S-1 Bisnis Digital_ Dr. Eisha Lataruva, S.E., M.M..png",
          },
        ],
      },
    ],
  },
  {
    departmentName: "Departemen IESP (Ilmu Ekonomi dan Studi Pembangunan)",
    icon: "📈",
    prodis: [
      {
        prodiName: "S-1 Ilmu Ekonomi",
        leaders: [
          {
            role: "Ketua Departemen IESP & Ketua Prodi S-1 Ekonomi",
            name: "Wahyu Widodo, S.E., M.Si., Ph.D.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Ilmu Ekonomi dan Studi Pembangunan (IESP)/S1 Ilmu Ekonomi/Ketua DepartemenIESP_ KetuaProgramStudi S-1 Ekonomi_Wahyu Widodo, S.E., M.Si., Ph.D..png",
          },
          {
            role: "Sekretaris Program Studi S-1 Ekonomi",
            name: "Fathimah Kurniawati, S.E., M.Ec.Dev.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Ilmu Ekonomi dan Studi Pembangunan (IESP)/S1 Ilmu Ekonomi/Sekretaris Program Studi S-1 Ekonomi_ Fathimah Kurniawati, S.E., M.Ec.Dev..png",
          },
        ],
      },
      {
        prodiName: "S-1 Ekonomi Islam",
        leaders: [
          {
            role: "Ketua Program Studi S-1 Ekonomi Islam",
            name: "Ariza Fuadi, S.H.I., M.A., Ph.D.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Ilmu Ekonomi dan Studi Pembangunan (IESP)/S1 Ekonomi Islam/Ketua Program Studi S-1 Ekonomi Islam_ Ariza Fuadi, S.H.I., M.A., Ph.D..png",
          },
          {
            role: "Sekretaris Program Studi S-1 Ekonomi Islam",
            name: "Arif Pujiyono, S.E., M.Si.",
            photo: "/images/Pimpinan Fakultas dan Departemen/Pimpinan Dept. & Program Studi/Dept. Ilmu Ekonomi dan Studi Pembangunan (IESP)/S1 Ekonomi Islam/Sekretaris Program Studi S-1 Ekonomi Islam_ Arif Pujiyono, S.E., M.Si..png",
          },
        ],
      },
    ],
  },
];

// Component Foto Staff 1:1 Rasio
function StaffPhoto({ src, alt, sizeClass = "w-44 h-44", isDekan = false }) {
  const [err, setErr] = useState(false);
  const fallbackSrc = "/images/LOGO FEB UNDIP.png";

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
        className="w-full h-full object-cover object-top"
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
        <title>Struktur Kepemimpinan – Grizzy Compass FEB UNDIP</title>
        <meta
          name="description"
          content="Struktur Kepemimpinan Fakultas Ekonomika dan Bisnis UNDIP – Dekan, Wakil Dekan, Ketua & Sekretaris Departemen serta Program Studi."
        />
      </Helmet>

      <div className="page-dark min-h-screen bg-[#191238] pb-24">
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

          {/* ======= PIMPINAN FAKULTAS ======= */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* Header Section */}
            <div className="pb-3 mb-10 border-b border-[rgba(221,218,222,0.14)]">
              <div className="flex items-center gap-2.5 text-white font-bold text-xl">
                <Users size={22} className="text-[#EEB463]" />
                <span>Pimpinan Fakultas</span>
              </div>
              <div className="w-12 h-1 bg-[#EEB463] rounded-full mt-2"></div>
            </div>

            {/* DEKAN (Tengah Atas) */}
            <div className="flex justify-center mb-12">
              <motion.div
                className="bg-[#271C51] p-6 rounded-3xl border border-[#EEB463]/50 shadow-2xl max-w-md w-full text-center hover:border-[#EEB463] transition-all"
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
                <div className="text-[#EEB463] text-sm font-bold tracking-wider uppercase mb-1">
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

            {/* WAKIL DEKAN (2 Kolom Bersampingan) */}
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
                  <div className="text-[#9438E3] text-xs font-bold tracking-wider uppercase mb-1">
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

          {/* ======= PIMPINAN DEPARTEMEN & PROGRAM STUDI ======= */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <div className="pb-3 mb-10 border-b border-[rgba(221,218,222,0.14)]">
              <div className="flex items-center gap-2.5 text-white font-bold text-xl">
                <Layers size={22} className="text-[#9438E3]" />
                <span>Pimpinan Departemen &amp; Program Studi</span>
              </div>
              <div className="w-12 h-1 bg-[#9438E3] rounded-full mt-2"></div>
            </div>

            <div className="space-y-12">
              {departmentLeadership.map((dept, deptIdx) => (
                <div key={dept.departmentName} className="bg-[#271C51]/80 rounded-3xl p-6 sm:p-8 border border-[rgba(221,218,222,0.12)]">
                  {/* Title Dept */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{dept.icon}</span>
                    <h3 className="text-white font-extrabold text-xl sm:text-2xl">
                      {dept.departmentName}
                    </h3>
                  </div>

                  {/* Prodis */}
                  <div className="space-y-8">
                    {dept.prodis.map((prodi) => (
                      <div key={prodi.prodiName}>
                        <div className="flex items-center gap-2 mb-4">
                          <Award size={16} className="text-[#EEB463]" />
                          <h4 className="text-[#EEB463] font-bold text-sm sm:text-base tracking-wide">
                            Program Studi {prodi.prodiName}
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {prodi.leaders.map((leader, leaderIdx) => (
                            <motion.div
                              key={leader.name}
                              className="bg-[#302361] p-5 rounded-2xl border border-[rgba(221,218,222,0.14)] text-center hover:bg-[#392a72] hover:border-[#9438E3]/60 transition-all flex flex-col items-center justify-between"
                              initial={{ opacity: 0, y: 14 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: (deptIdx * 0.1) + (leaderIdx * 0.05) }}
                            >
                              <StaffPhoto
                                src={leader.photo}
                                alt={leader.name}
                                sizeClass="w-36 h-36 sm:w-40 sm:h-40"
                              />
                              <div className="text-[#9438E3] text-xs font-semibold uppercase tracking-wider mb-1">
                                {leader.role}
                              </div>
                              <h5 className="text-white font-bold text-sm sm:text-base leading-snug">
                                {leader.name}
                              </h5>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer note */}
          <p className="text-center text-xs italic text-[#DDDADE]/40 mt-12">
            Data Struktur Kepemimpinan Fakultas Ekonomika dan Bisnis Universitas Diponegoro
          </p>

        </div>
      </div>
    </>
  );
}
