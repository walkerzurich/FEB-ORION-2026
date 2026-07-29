import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Users, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ormawaList } from "@/data/LogoList";

const ormawaOnly = ormawaList.filter((o) => o.category === "ormawa");
const ukmOnly    = ormawaList.filter((o) => o.category === "ukm");

const tabs = [
  { key: "ormawa", label: "Ormawa", data: ormawaOnly },
  { key: "ukm",   label: "UKM",    data: ukmOnly },
];

function OrgCard({ item, index }) {
  const [err, setErr] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.32, delay: index * 0.04 }}
      className="ormawa-org-card group"
    >
      {/* Logo area */}
      <div className="ormawa-org-logo-box">
        {!err ? (
          <img
            src={item.logo}
            alt={item.shortName}
            className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-108"
            onError={() => setErr(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#EEB463] font-bold text-base text-center px-2 leading-tight">
              {item.shortName}
            </span>
          </div>
        )}
      </div>

      {/* Name area */}
      <div className="ormawa-org-info">
        <div className="ormawa-org-short">{item.shortName}</div>
        <div className="ormawa-org-name">{item.name}</div>
      </div>
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
          content="Organisasi Mahasiswa (Ormawa) dan Unit Kegiatan Mahasiswa (UKM) di Fakultas Ekonomika dan Bisnis Universitas Diponegoro."
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
                FEB Universitas Diponegoro · {ormawaList.length} Organisasi
              </p>
            </div>
          </div>

          {/* ====== TABS ====== */}
          <div
            className="flex gap-1 p-1 mb-6 rounded-2xl"
            style={{
              background: "rgba(39,28,81,0.7)",
              border: "1px solid rgba(221,218,222,0.18)",
            }}
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
                <span className="ml-1.5 text-xs" style={{ opacity: 0.6 }}>
                  ({tab.data.length})
                </span>
              </button>
            ))}
          </div>

          {/* ====== GRID ====== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {currentTab?.data.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-white/40 text-sm">
                    Data belum tersedia
                  </p>
                </div>
              ) : (
                <div className="ormawa-org-grid">
                  {currentTab.data.map((item, i) => (
                    <OrgCard key={item.shortName} item={item} index={i} />
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
