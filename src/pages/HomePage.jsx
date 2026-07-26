import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { campusBuildings } from "@/data/campusData";
import ImageOptimizer from "@/components/ImageOptimizer";

// Subtitle for each building (shown below card name)
const buildingSubtitles = {
  "outdoor":    "Outdoor Space",
  "gedung-a":   "Main Hall",
  "gedung-b":   "Laboratories",
  "gedung-c":   "Lecture Rooms",
  "gedung-iup": "International Hall",
  "gedung-kwu": "Entrepreneurship Hub",
  "dekanat":    "Administration",
  "gedung-pkm": "Student Union",
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Journey Of Economics – Beranda</title>
        <meta
          name="description"
          content="Jelajahi FEB UNDIP – Virtual Tour Gedung, Staff, dan Ormawa Fakultas Ekonomika dan Bisnis Universitas Diponegoro."
        />
      </Helmet>

      <div className="home-root">
        <div className="home-container-inner">

          {/* ======= TOP BAR ======= */}
          <div className="home-topbar">
            <div className="flex items-center gap-4">
              <button
                id="btn-back-home"
                className="btn-back-circle"
                onClick={() => navigate("/")}
                aria-label="Kembali ke opening"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>
              <div>
                <div className="home-title-badge">
                  <h1>Journey Of Economics</h1>
                </div>
                <p className="home-subtitle">
                  Fakultas Ekonomi dan Bisnis, Universitas Diponegoro
                </p>
              </div>
            </div>
          </div>

          {/* ======= BODY ======= */}
          <div className="home-body">

            {/* === LEFT COLUMN: JELAJAHI === */}
            <div>
              <div className="section-label">JELAJAHI</div>
              <div className="explore-col">

                {/* Seputar FEB – large card */}
                <motion.div
                  id="hero-card-seputar-feb"
                  className="explore-main-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => navigate("/feb-desc")}
                >
                  <img
                    src="/images/fotoGedung/Dekanat.jpg"
                    alt="Seputar FEB"
                  />
                  <div className="explore-main-overlay" />
                  <div className="explore-main-text">
                    <h3>Seputar FEB</h3>
                    <p>Explore Campus Life</p>
                  </div>
                </motion.div>

                {/* Sub cards */}
                <div className="explore-sub-row">
                  <motion.div
                    id="hero-card-staff"
                    className="explore-sub-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    onClick={() => navigate("/staff")}
                  >
                    <img
                      src="/images/fotoGedung/Gedung A.jpg"
                      alt="Struktur Kepemimpinan"
                    />
                    <div className="explore-sub-overlay" />
                    <div className="explore-sub-text">Struktur Kepemimpinan</div>
                  </motion.div>

                  <motion.div
                    id="hero-card-ormawa"
                    className="explore-sub-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.18 }}
                    onClick={() => navigate("/ormawa")}
                  >
                    <img
                      src="/images/fotoGedung/Gerbang Depan FEB.jpg"
                      alt="Ormawa & UKM"
                    />
                    <div className="explore-sub-overlay" />
                    <div className="explore-sub-text">Ormawa &amp; UKM</div>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* === RIGHT COLUMN: GEDUNG === */}
            <div className="buildings-col">
              <div className="buildings-header">
                <div className="section-label" style={{ marginBottom: 0 }}>GEDUNG</div>
              </div>

              <div className="buildings-grid">
                {campusBuildings.map((building, index) => (
                  <motion.div
                    key={building.id}
                    id={`building-card-${building.id}`}
                    className="building-item"
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
                    <div className="building-item-img">
                      <ImageOptimizer
                        src={building.thumbnail || "/images/logo.PNG"}
                        alt={building.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="building-item-name">{building.name}</div>
                    {buildingSubtitles[building.id] && (
                      <div className="building-item-sub">
                        {buildingSubtitles[building.id]}
                      </div>
                    )}
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
