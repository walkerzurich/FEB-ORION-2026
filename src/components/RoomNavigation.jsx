import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Eye, Menu, X } from 'lucide-react';
import ImageOptimizer from '@/components/ImageOptimizer';

export default function RoomNavigation({ rooms, currentRoom, onRoomChange }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  if (!rooms || rooms.length === 0) return null;

  return (
    <>
      {/* Burger menu for mobile */}
      <button
        className="glass p-2.5 rounded-xl fixed top-4 left-4 z-[2001] md:hidden leading-none border border-[#9438E3]/40 shadow-lg text-white"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open room navigation"
        style={{ display: isMobileOpen ? "none" : undefined }}
      >
        <Menu className="w-5 h-5 text-white" />
      </button>

      {/* Sidebar for desktop */}
      <div className="nav-overlay hidden md:block">
        <div className={`transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute top-4 -right-4 z-50 glass rounded-full p-2.5 hover:bg-[#9438E3] hover:text-white transition-all border border-[#9438E3]/50 shadow-md text-[#DDDADE]"
          >
            {isExpanded ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 h-screen overflow-y-auto"
              >
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#9438E3]" />
                    Navigasi Ruangan
                  </h2>
                  <p className="text-xs text-[#DDDADE]/70">Pilih lokasi virtual tour</p>
                </div>

                <div className="space-y-3">
                  {rooms.map((room) => (
                    <motion.button
                      key={room.id}
                      onClick={() => onRoomChange(room.id)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 border ${
                        currentRoom?.id === room.id
                          ? 'bg-gradient-to-r from-[#9438E3]/30 to-[#5F5EBB]/30 border-[#9438E3] shadow-lg shadow-[#9438E3]/15'
                          : 'bg-[#312463]/70 hover:bg-[#453388] border-[rgba(221,218,222,0.14)]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        {room.thumbnail || room.image || room.panorama ? (
                          <ImageOptimizer
                            src={room.thumbnail || room.image || room.panorama}
                            alt={room.name}
                            className="w-16 h-14 object-cover rounded-lg border border-[#DDDADE]/20"
                          />
                        ) : (
                          <div className="w-16 h-14 bg-[#271C51] rounded-lg border border-[#DDDADE]/10" />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm truncate">
                            {room.name}
                          </h3>
                          {room.hotspots && room.hotspots.length > 0 && (
                            <p className="text-[#EEB463] text-xs mt-0.5">
                              {room.hotspots.length} titik interaktif
                            </p>
                          )}
                        </div>
                        {currentRoom?.id === room.id && (
                          <div className="w-2.5 h-2.5 bg-[#9438E3] rounded-full shadow-[0_0_8px_#9438E3]"></div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Current Room Info */}
                {currentRoom && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-[#271C51]/80 rounded-xl border border-[#9438E3]/30 shadow-inner"
                  >
                    <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1 opacity-70">
                      Ruangan Aktif
                    </h4>
                    <p className="text-[#EEB463] text-sm font-bold mb-3">{currentRoom.name}</p>
                    {currentRoom.hotspots && currentRoom.hotspots.length > 0 && (
                      <div>
                        <p className="text-[#DDDADE] text-xs mb-2 font-medium">Titik Interaktif:</p>
                        <div className="space-y-1.5">
                          {currentRoom.hotspots.map((hotspot) => (
                            <div
                              key={hotspot.id}
                              className="text-[#DDDADE] text-xs flex items-center gap-2 bg-[#312463]/60 px-2.5 py-1.5 rounded-lg border border-[#DDDADE]/10"
                            >
                              <div className="w-1.5 h-1.5 bg-[#EEB463] rounded-full flex-shrink-0"></div>
                              <span className="truncate">{hotspot.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collapsed State */}
          {!isExpanded && (
            <div className="p-4 h-screen flex flex-col items-center gap-4 bg-[#271C51]">
              <div className="p-2.5 glass rounded-xl border border-[#9438E3]/40">
                <MapPin className="w-5 h-5 text-[#9438E3]" />
              </div>
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => onRoomChange(room.id)}
                  className={`p-2.5 rounded-xl transition-all ${
                    currentRoom?.id === room.id
                      ? 'bg-[#9438E3] text-white shadow-md'
                      : 'bg-[#312463] text-[#DDDADE] hover:bg-[#453388] border border-[rgba(221,218,222,0.14)]'
                  }`}
                  title={room.name}
                >
                  <Eye className="w-4 h-4" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar for mobile (slide in) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-4/5 max-w-xs h-screen bg-[#271C51] z-[2002] p-0 m-0 md:hidden shadow-2xl border-r border-[#9438E3]/30"
          >
            {/* Header mobile */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#271C51] to-[#392a72] border-b border-[#9438E3]/30">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 m-0">
                <MapPin className="w-5 h-5 text-[#9438E3]" />
                Navigasi Ruangan
              </h2>
              <button
                className="glass rounded-full p-2 hover:bg-[#9438E3] transition-colors text-white"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close room navigation"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-4 h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="space-y-3">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      onRoomChange(room.id);
                      setIsMobileOpen(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 border ${
                      currentRoom?.id === room.id
                        ? 'bg-gradient-to-r from-[#9438E3]/30 to-[#5F5EBB]/30 border-[#9438E3] shadow-md'
                        : 'bg-[#312463] hover:bg-[#453388] border-[rgba(221,218,222,0.14)]'
                    }`}
                  >
                    <div className="flex flex-col items-start gap-2">
                      {room.thumbnail || room.image || room.panorama ? (
                        <ImageOptimizer
                          src={room.thumbnail || room.image || room.panorama}
                          alt={room.name}
                          className="w-full h-28 object-cover rounded-lg border border-[#DDDADE]/20 mb-1"
                        />
                      ) : (
                        <div className="w-full h-28 bg-[#271C51] rounded-lg mb-1" />
                      )}
                      <div className="flex items-center w-full">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-sm">
                            {room.name}
                          </h3>
                          {room.hotspots && room.hotspots.length > 0 && (
                            <p className="text-[#EEB463] text-xs mt-0.5">
                              {room.hotspots.length} titik interaktif
                            </p>
                          )}
                        </div>
                        {currentRoom?.id === room.id && (
                          <div className="w-2.5 h-2.5 bg-[#9438E3] rounded-full ml-2"></div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {/* Current Room Info */}
              {currentRoom && (
                <div className="mt-6 p-4 bg-[#312463] rounded-xl border border-[#9438E3]/30">
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1 opacity-70">
                    Ruangan Aktif
                  </h4>
                  <p className="text-[#EEB463] text-sm font-bold mb-3">{currentRoom.name}</p>
                  {currentRoom.hotspots && currentRoom.hotspots.length > 0 && (
                    <div>
                      <p className="text-[#DDDADE] text-xs mb-2">Titik Interaktif:</p>
                      <div className="space-y-1.5">
                        {currentRoom.hotspots.map((hotspot) => (
                          <div
                            key={hotspot.id}
                            className="text-[#DDDADE] text-xs flex items-center gap-2 bg-[#271C51] px-2.5 py-1.5 rounded-lg border border-[#DDDADE]/10"
                          >
                            <div className="w-1.5 h-1.5 bg-[#EEB463] rounded-full flex-shrink-0"></div>
                            {hotspot.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
