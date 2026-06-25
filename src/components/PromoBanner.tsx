import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Percent, Award, ShieldCheck } from "lucide-react";

interface PromoBannerProps {
  onShopNowClick: () => void;
}

export default function PromoBanner({ onShopNowClick }: PromoBannerProps) {
  return (
    <section className="py-12 bg-black relative overflow-hidden border-t border-b border-gold-900/30">
      {/* Subtle organic shadow overlay pattern matching the image vibe but in black-gold */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-950/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Promo Card Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0d0d0d] via-[#12110f] to-[#0a0a09] border border-gold-900/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Subtle gold sheen crossing the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-500/5 to-gold-500/10 opacity-30 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[420px] relative">
            
            {/* LEFT COLUMN: Luxury Showroom Composite (Lamp, Emerald Armchair, Nesting Coffee Tables) */}
            <div className="lg:col-span-4 p-8 lg:p-10 flex items-center justify-center relative min-h-[320px] lg:min-h-[420px]">
              
              {/* Floor Lamp (Behind / Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute left-6 bottom-8 w-24 h-64 sm:w-28 sm:h-72 z-10 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80"
                  alt="Aethelgard Floor Lamp"
                  className="w-full h-full object-contain object-bottom select-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Royal Emerald Velvet Armchair (Center / Elevated Vibe) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-1/3 bottom-12 w-44 h-44 sm:w-52 sm:h-52 z-20 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.7)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80"
                  alt="Emerald Royal Lounge Chair"
                  className="w-full h-full object-contain object-bottom select-none hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Marble Gold Nesting Coffee Tables (Front / Right Overlap) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute right-4 bottom-4 w-40 h-28 sm:w-48 sm:h-32 z-30 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&q=80"
                  alt="Aurelia Gold Nesting Tables"
                  className="w-full h-full object-contain object-bottom select-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Decorative base glow */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/40 rounded-full blur-md -z-10" />
            </div>

            {/* MIDDLE COLUMN: Text overlay, Brand name, Discounts and CTA Button */}
            <div className="lg:col-span-5 px-6 py-10 lg:py-12 flex flex-col items-center text-center relative z-40">
              
              {/* Premium small tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-950/50 border border-gold-800/40 mb-3 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-sans text-[9px] tracking-[0.25em] text-gold-300 uppercase font-bold">
                  ROYAL MONSOON PRIVATE SALE
                </span>
              </div>

              {/* Majestic Image-like overlay text "Home DECOR" */}
              <div className="relative mb-6 select-none select-none">
                {/* Hand-written cursive "Home" overlay */}
                <h3 className="font-script text-5xl sm:text-6xl text-gold-400 absolute -top-8 left-1/2 -translate-x-1/2 z-10 tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Home
                </h3>
                {/* Massive bold "DECOR" in matching theme colors */}
                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 drop-shadow-md">
                  DECOR
                </h2>
              </div>

              {/* Custom styled Discount metrics "UPTO 70% OFF + EXTRA 15% OFF" */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 border-t border-b border-gold-900/10 py-4 w-full max-w-sm">
                
                <div className="text-center">
                  <span className="font-sans text-[8px] sm:text-[9px] text-neutral-400 uppercase tracking-widest font-light block mb-0.5">
                    UPTO
                  </span>
                  <div className="flex items-baseline justify-center gap-0.5 text-white">
                    <span className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">70</span>
                    <span className="font-sans text-base sm:text-lg font-bold text-gold-400">%</span>
                  </div>
                  <span className="font-sans text-[8px] sm:text-[9px] text-gold-500 font-extrabold tracking-wider block mt-0.5">
                    OFF
                  </span>
                </div>

                <div className="text-gold-400/60 text-lg sm:text-2xl font-light font-sans self-center">
                  +
                </div>

                <div className="text-center">
                  <span className="font-sans text-[8px] sm:text-[9px] text-neutral-400 uppercase tracking-widest font-light block mb-0.5">
                    EXTRA
                  </span>
                  <div className="flex items-baseline justify-center gap-0.5 text-white">
                    <span className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">15</span>
                    <span className="font-sans text-base sm:text-lg font-bold text-gold-400">%</span>
                  </div>
                  <span className="font-sans text-[8px] sm:text-[9px] text-gold-500 font-extrabold tracking-wider block mt-0.5">
                    OFF
                  </span>
                </div>

              </div>

              {/* CTA SHOP NOW Button */}
              <button
                onClick={onShopNowClick}
                className="group relative bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 hover:brightness-110 text-neutral-950 px-8 py-3.5 rounded-xl font-sans text-xs uppercase tracking-[0.2em] font-extrabold shadow-lg shadow-gold-950/30 transition-all flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Sheen reflection shimmer on hover */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>

              {/* Fine Print info */}
              <p className="font-sans text-[9px] text-neutral-500 tracking-wider font-light mt-4">
                *Includes complimentary white-glove setup and premium authenticity seal.
              </p>
            </div>

            {/* RIGHT COLUMN: Happy Elegant Model Portrait fading seamlessly into the card */}
            <div className="lg:col-span-3 h-[280px] lg:h-[420px] relative overflow-hidden self-end w-full">
              {/* Fade masks to blend model photo seamlessly into the dark background */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a0a09] to-transparent z-10 lg:hidden" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#12110f] lg:from-[#12110f] to-transparent z-10 hidden lg:block" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a09] to-transparent z-10" />
              
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
                alt="Elegant Ambassador Luxe"
                className="w-full h-full object-cover object-top scale-100 lg:scale-105 hover:scale-110 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay styling elements */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-gold-900/40 px-2.5 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-sans text-[8px] text-neutral-300 uppercase tracking-widest font-semibold">
                  Aurum Ambassador
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
