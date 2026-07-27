import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ImageOptimizer from "@/components/ImageOptimizer";

export default function OpeningPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Journey Of Economics – FEB UNDIP</title>
        <meta
          name="description"
          content="Selamat datang di Virtual Tour FEB UNDIP – Journey Of Economics. Jelajahi Fakultas Ekonomika dan Bisnis Universitas Diponegoro."
        />
      </Helmet>

      <div className="opening-bg relative overflow-hidden">
        {/* Ambient glow blobs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #9438E3 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #EEB463 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageOptimizer
              src="/images/logo.PNG"
              alt="Logo Journey Of Economics FEB UNDIP"
              className="mx-auto w-52 h-52 object-contain logo-glow-multi"
              priority={true}
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1
              className="text-white font-bold leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                letterSpacing: "0.02em",
              }}
            >
              Journey Of Economicssss
            </h1>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              id="btn-click-here"
              className="btn-pill-dark"
              onClick={() => navigate("/home")}
            >
              Click Here!
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
