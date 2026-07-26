import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageOptimizer from "@/components/ImageOptimizer";

const departments = [
  {
    icon: "🏛️",
    name: "Departemen Manajemen",
    programs: ["S1 Manajemen", "S1 Bisnis Digital", "S2 Magister Manajemen"],
  },
  {
    icon: "📈",
    name: "Departemen Ilmu Ekonomi dan Studi Pembangunan (IESP)",
    programs: ["S1 Ekonomi", "S1 Ekonomi Islam", "S2 Magister Ekonomi"],
  },
  {
    icon: "📊",
    name: "Departemen Akuntansi",
    programs: ["S1 Akuntansi", "S2 Magister Akuntansi", "Pendidikan Profesi Akuntan (PPAk)"],
  },
];

const doctorPrograms = [
  "Doktor Ilmu Ekonomi",
  "Doktor Ilmu Manajemen",
  "Doktor Ilmu Akuntansi",
];

export default function FEBDescriptionPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Profil Fakultas – FEB UNDIP</title>
        <meta
          name="description"
          content="Pusat Keunggulan Akademik Berstandar Internasional – Fakultas Ekonomika dan Bisnis Universitas Diponegoro."
        />
      </Helmet>

      <div className="feb-desc-root">

        {/* ======= HERO ======= */}
        <div className="feb-desc-hero">
          <ImageOptimizer
            src="/images/fotoGedung/Dekanat.jpg"
            alt="FEB UNDIP"
            className="w-full h-full object-cover"
          />
          <div className="feb-desc-hero-overlay" />

          {/* Back button */}
          <div className="absolute top-5 left-5 z-10">
            <button
              id="btn-back-feb-desc"
              className="btn-back-circle"
              onClick={() => navigate("/home")}
              aria-label="Kembali"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
          </div>

          {/* Hero text */}
          <motion.div
            className="feb-desc-hero-text"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="feb-desc-label">Profil Fakultas</span>
            <h1 className="feb-desc-hero-title">
              Pusat Keunggulan Akademik<br />Berstandar Internasional
            </h1>
          </motion.div>
        </div>

        {/* ======= CONTENT ======= */}
        <motion.div
          className="feb-desc-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Description */}
          <p className="feb-desc-text">
            Fakultas Ekonomika dan Bisnis (FEB) Universitas Diponegoro merupakan salah
            satu fakultas di Universitas Diponegoro yang berdiri pada 14 Maret 1960. Sejak
            tahun 2011, Fakultas Ekonomi resmi berganti nama menjadi Fakultas
            Ekonomika dan Bisnis (FEB) sebagai bentuk pengembangan keilmuan yang
            tidak hanya berfokus pada ekonomi, tetapi juga bisnis dan manajemen.
          </p>
          <p className="feb-desc-text">
            FEB UNDIP berkomitmen menyelenggarakan pendidikan, penelitian, dan pengabdian
            kepada masyarakat yang berkualitas serta menghasilkan lulusan yang berintegritas,
            kompeten, dan mampu bersaing di tingkat nasional maupun internasional. Fakultas ini
            juga telah memperoleh akreditasi nasional unggul dan akreditasi internasional FIBAA
            sebagai pengakuan atas mutu pendidikannya.
          </p>
          <p className="feb-desc-text italic">
            Saat ini, FEB UNDIP memiliki tiga departemen dengan jenjang pendidikan mulai dari
            Sarjana (S1), Magister (S2), Doktor (S3), hingga Pendidikan Profesi Akuntan (PPAk).
          </p>

          {/* Departments */}
          <div className="feb-dept-section">
            <div className="feb-dept-title">
              <span>🎓</span>
              <span>Departemen dan Program Studi</span>
            </div>

            <div className="feb-dept-grid">
              {departments.map((dept) => (
                <motion.div
                  key={dept.name}
                  className="feb-dept-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="feb-dept-card-icon">{dept.icon}</span>
                  <div className="feb-dept-card-name">{dept.name}</div>
                  <ul>
                    {dept.programs.map((prog) => (
                      <li key={prog}>{prog}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Program Lanjutan */}
            <div className="feb-lanjutan-card">
              <div className="feb-lanjutan-title">Program Lanjutan</div>
              <p className="feb-lanjutan-desc">
                Selain program yang berada di masing-masing departemen, FEB UNDIP juga
                menyelenggarakan program Doktor (S3) Ekonomi, dengan konsentrasi:
              </p>
              <div className="feb-lanjutan-pills">
                {doctorPrograms.map((prog) => (
                  <div key={prog} className="feb-lanjutan-pill">
                    <span>🎖️</span>
                    <span>{prog}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
