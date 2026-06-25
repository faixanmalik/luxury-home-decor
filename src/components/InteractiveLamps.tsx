import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Lightbulb, LightbulbOff, Sparkles, Star, Power } from "lucide-react";

interface LampData {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  // High-quality unsplash base images representing the lamps
  dayImage: string;
  bulbX: string; // horizontal percentage coordinate of the bulb for positioning the custom glow
  bulbY: string; // vertical percentage coordinate of the bulb for positioning the custom glow
  glowScale: string; // customized scale of the light cone/glow
}

const LAMPS: LampData[] = [
  {
    id: "lamp-1",
    name: "Aethelgard Timber Tripod",
    subtitle: "Artistic Timber Floor Lamp",
    price: 340,
    dayImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
    bulbX: "50%",
    bulbY: "32%",
    glowScale: "scale-125"
  },
  {
    id: "lamp-2",
    name: "Aurum Geo-Sculpt",
    subtitle: "Satin Brass Table Luminary",
    price: 310,
    dayImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    bulbX: "50%",
    bulbY: "42%",
    glowScale: "scale-150"
  },
  {
    id: "lamp-3",
    name: "Lumina Sleek Arch",
    subtitle: "Marble-Base Reading Companion",
    price: 480,
    dayImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    bulbX: "54%",
    bulbY: "34%",
    glowScale: "scale-110"
  },
  {
    id: "lamp-4",
    name: "Nouveau Cone Pendant",
    subtitle: "Satin Gold Hand-Spun Dome",
    price: 420,
    dayImage: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=600&q=80",
    bulbX: "50%",
    bulbY: "62%",
    glowScale: "scale-140"
  }
];

export default function InteractiveLamps() {
  const [lightOn, setLightOn] = useState(true);
  const [nightMode, setNightMode] = useState(false);

  // Generate some subtle glowing background star coordinates for night mode
  const stars = [
    { top: "12%", left: "8%", size: 1.5, delay: 0.2 },
    { top: "25%", left: "18%", size: 1, delay: 0.8 },
    { top: "15%", left: "28%", size: 2, delay: 0.5 },
    { top: "35%", left: "42%", size: 1.2, delay: 1.2 },
    { top: "18%", left: "68%", size: 1.8, delay: 0.3 },
    { top: "28%", left: "79%", size: 1, delay: 1.5 },
    { top: "14%", left: "91%", size: 1.5, delay: 0.7 },
    { top: "42%", left: "95%", size: 2, delay: 0.9 },
  ];

  return (
    <section 
      id="interactive-lamps" 
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${
        nightMode 
          ? "bg-gradient-to-b from-[#060a17] via-[#090f25] to-[#04060f] text-white" 
          : "bg-white text-neutral-900 border-b border-neutral-100"
      }`}
    >
      {/* Dynamic Starry Night Sky Canvas */}
      <AnimatePresence>
        {nightMode && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            {stars.map((star, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3 + star.delay * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: star.delay
                }}
                className="absolute rounded-full bg-gold-200"
                style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  boxShadow: "0 0 8px #fdf4cd"
                }}
              />
            ))}
            {/* Soft night clouds */}
            <div className="absolute top-10 left-10 w-96 h-20 bg-blue-950/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-20 right-10 w-[400px] h-32 bg-indigo-950/20 rounded-full blur-[100px]" />
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP CONTROLS AND HEADER PANEL */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-gold-900/10 mb-12">
          
          {/* Left: Light Switch Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLightOn(!lightOn)}
              className={`p-2.5 rounded-full border transition-all duration-300 ${
                lightOn 
                  ? "bg-gold-500/10 border-gold-400/40 text-gold-400 shadow-[0_0_15px_rgba(218,165,32,0.2)]" 
                  : "bg-neutral-950/30 border-neutral-800 text-neutral-500"
              }`}
              title={lightOn ? "Turn Lights Off" : "Turn Lights On"}
            >
              {lightOn ? <Lightbulb className="w-5 h-5 animate-pulse" /> : <LightbulbOff className="w-5 h-5" />}
            </button>
            <div className="flex flex-col text-left">
              <span className={`font-sans text-[10px] uppercase tracking-widest font-bold ${nightMode ? "text-neutral-400" : "text-neutral-500"}`}>
                ILLUMINATION ENGINE
              </span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-semibold">
                  {lightOn ? "Lamps Glowing" : "Lamps Suspended"}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${lightOn ? "bg-emerald-500 animate-ping" : "bg-neutral-500"}`} />
              </div>
            </div>

            {/* iOS style Switch */}
            <div 
              onClick={() => setLightOn(!lightOn)}
              className={`w-12 h-6 rounded-full p-0.5 cursor-pointer transition-colors duration-300 relative ${
                lightOn ? "bg-gold-500" : "bg-neutral-300 dark:bg-neutral-800"
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                lightOn ? "translate-x-6" : "translate-x-0"
              }`} />
            </div>
          </div>

          {/* Center: Curated Header with Dynamic Moon/Sun indicators */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <h2 className={`font-serif text-3xl sm:text-4xl font-semibold tracking-tight ${
                nightMode ? "text-white" : "text-neutral-900"
              }`}>
                Premium Lamps
              </h2>
              {nightMode && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  className="relative w-8 h-8 flex items-center justify-center text-gold-200"
                >
                  <Moon className="w-6 h-6 fill-gold-200 filter drop-shadow-[0_0_10px_rgba(253,244,205,0.6)]" />
                  <div className="absolute -inset-1 rounded-full border border-gold-400/20 blur-[2px]" />
                </motion.div>
              )}
            </div>
            <p className={`font-sans text-xs mt-2 max-w-md ${nightMode ? "text-neutral-400 font-light" : "text-neutral-500"}`}>
              Experience luxury illumination engineered for rich contrast, cozy atmospheres, and premium organic spaces.
            </p>
          </div>

          {/* Right: Night Mode Toggle */}
          <div className="flex items-center gap-4">
            {/* iOS style Switch for Day/Night */}
            <div 
              onClick={() => setNightMode(!nightMode)}
              className={`w-12 h-6 rounded-full p-0.5 cursor-pointer transition-colors duration-300 relative ${
                nightMode ? "bg-indigo-600" : "bg-neutral-300 dark:bg-neutral-800"
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                nightMode ? "translate-x-6" : "translate-x-0"
              }`} />
            </div>

            <div className="flex flex-col text-right">
              <span className={`font-sans text-[10px] uppercase tracking-widest font-bold ${nightMode ? "text-neutral-400" : "text-neutral-500"}`}>
                AMBIENT STATE
              </span>
              <span className="font-sans text-xs font-semibold">
                {nightMode ? "Cosmic Night Mode" : "Ambient Day Mode"}
              </span>
            </div>
            <button
              onClick={() => setNightMode(!nightMode)}
              className={`p-2.5 rounded-full border transition-all duration-300 ${
                nightMode 
                  ? "bg-indigo-500/10 border-indigo-400/40 text-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.2)]" 
                  : "bg-amber-500/10 border-amber-400/40 text-amber-500"
              }`}
              title={nightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
            >
              {nightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* INTERACTIVE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LAMPS.map((lamp) => {
            
            // Core style logic mimicking the 3 reference images:
            // 1) Day Mode (Night Mode OFF) + Light ON: Normal bright image with slight warm hue overlay
            // 2) Night Mode ON + Light ON: Dark blue-ish contrast image with a strong circular warm glowing gold lamp cone overlay
            // 3) Night Mode ON + Light OFF: Extremely dim, greyed out, unlit wireframe bulbs with dark overlay

            // Let's create an explicit class mapping for filters on the base image:
            let filterClass = "transition-all duration-1000 ";
            if (!nightMode) {
              if (lightOn) {
                // Day Mode, Lit
                filterClass += "brightness-[100%] contrast-[100%] saturate-[110%]";
              } else {
                // Day Mode, Unlit
                filterClass += "brightness-[85%] contrast-[95%] saturate-[70%]";
              }
            } else {
              if (lightOn) {
                // Night Mode, Lit (Cozy warm glow, strong contrast)
                filterClass += "brightness-[55%] contrast-[120%] saturate-[115%] sepia-[15%]";
              } else {
                // Night Mode, Unlit (Unlit dark cold atmosphere)
                filterClass += "brightness-[20%] contrast-[90%] saturate-[40%] grayscale-[30%]";
              }
            }

            return (
              <div 
                key={lamp.id}
                className={`group relative rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-1000 ${
                  nightMode 
                    ? "bg-[#0b1021] border-gold-900/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]" 
                    : "bg-neutral-50 border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
                }`}
              >
                {/* Image & Light Glow Chamber */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
                  
                  {/* Base Unsplash Image with interactive filter */}
                  <img
                    src={lamp.dayImage}
                    alt={lamp.name}
                    className={`w-full h-full object-cover transition-all duration-1000 ${filterClass}`}
                    referrerPolicy="no-referrer"
                  />

                  {/* 1. LAYER: Warm Ambient Golden Overlay (Activated when light is on) */}
                  <div 
                    className={`absolute inset-0 bg-amber-500/10 mix-blend-color transition-opacity duration-1000 pointer-events-none ${
                      lightOn ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* 2. LAYER: Absolute Glowing Light Cone (Simulates gorgeous physical gold light output) */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
                      lightOn ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `radial-gradient(circle 140px at ${lamp.bulbX} ${lamp.bulbY}, rgba(251, 191, 36, 0.45) 0%, rgba(217, 119, 6, 0.15) 45%, rgba(0,0,0,0) 70%)`
                    }}
                  />

                  {/* 3. LAYER: Night Darkness overlay when light is off & night mode is on */}
                  <div 
                    className={`absolute inset-0 bg-blue-950/25 mix-blend-multiply transition-opacity duration-1000 pointer-events-none ${
                      nightMode && !lightOn ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* 4. LAYER: Bulb glowing center dot */}
                  {lightOn && (
                    <motion.div
                      animate={{ scale: [0.9, 1.15, 0.9] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-6 h-6 rounded-full bg-white/90 blur-[3px] pointer-events-none shadow-[0_0_20px_#f59e0b,0_0_40px_#f59e0b]"
                      style={{
                        top: lamp.bulbY,
                        left: lamp.bulbX,
                        transform: "translate(-50%, -50%)"
                      }}
                    />
                  )}

                  {/* Subtle category badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-xs rounded border border-gold-600/10 z-10">
                    <span className="font-sans text-[8px] text-gold-400 font-bold uppercase tracking-widest">
                      BESPOKE LAMP
                    </span>
                  </div>

                  {/* Decorative price tag bubble */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-neutral-900/90 backdrop-blur-md border border-gold-600/20 rounded z-10 flex items-center gap-1 shadow-lg">
                    <span className="font-sans text-[9px] text-neutral-400">USD</span>
                    <span className="font-sans text-xs text-gold-400 font-bold">${lamp.price}</span>
                  </div>
                </div>

                {/* Card Content Footer info */}
                <div className="p-4 sm:p-5 relative z-10 text-left">
                  <div className="flex flex-col">
                    <span className={`font-serif text-sm font-medium tracking-wide ${
                      nightMode ? "text-gold-200" : "text-neutral-950"
                    }`}>
                      {lamp.name}
                    </span>
                    <span className={`font-sans text-[10px] uppercase tracking-wider mt-0.5 ${
                      nightMode ? "text-neutral-400" : "text-neutral-500"
                    }`}>
                      {lamp.subtitle}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gold-900/10 flex items-center justify-between">
                    <span className={`font-sans text-[9px] uppercase tracking-widest ${
                      nightMode ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {lightOn ? "Glowing • Warm Light" : "Suspended • Ambient"}
                    </span>
                    <button 
                      className={`text-[9px] uppercase font-bold tracking-widest py-1 px-3.5 rounded border transition-all duration-300 ${
                        nightMode
                          ? "bg-gold-500/10 border-gold-500/20 text-gold-300 hover:bg-gold-500/20"
                          : "bg-neutral-900 text-white hover:bg-neutral-800"
                      }`}
                    >
                      Bespoke Order
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
