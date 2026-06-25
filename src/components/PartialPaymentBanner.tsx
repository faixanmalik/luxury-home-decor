import React, { useState } from "react";
import { Sparkles, Banknote, RefreshCw, Users, ArrowUpRight, ShieldCheck, Check } from "lucide-react";

export default function PartialPaymentBanner() {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleCopy = () => {
    setCopiedCoupon(true);
    setTimeout(() => {
      setCopiedCoupon(false);
    }, 3000);
  };

  return (
    <section id="partial-payment-banner" className="py-12 bg-black border-t border-b border-gold-900/20 relative overflow-hidden z-25">
      {/* Decorative Gold Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#111111] border border-gold-900/40 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold ribbon indicator */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none hidden sm:block">
            <div className="absolute top-4 -right-10 bg-gradient-to-r from-gold-600 to-gold-400 text-black text-[9px] uppercase tracking-widest font-black font-sans py-1.5 w-40 text-center transform rotate-45 shadow-md">
              SECURE VIP
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left box: Home Decor Monsoon Sale */}
            <div className="lg:col-span-3 relative">
              {/* Badge: ENDING SOON */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-gradient-to-r from-red-800 to-red-600 border border-red-500/30 text-white text-[9px] uppercase tracking-[0.2em] font-extrabold px-3 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
                ENDING SOON
              </div>

              {/* Main Box structure */}
              <div className="bg-black/80 border border-gold-600/30 rounded-xl p-6 sm:p-8 flex flex-col justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,151,60,0.05)_0%,_transparent_70%)] pointer-events-none" />
                
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight mb-1">
                  Home Decor
                </h3>
                
                <span className="font-script text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 select-none leading-none mb-4">
                  Monsoon Sale
                </span>

                <div className="mt-2 py-2.5 px-4 bg-gold-950/20 border border-gold-500/30 rounded-lg flex items-center justify-center gap-2">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-gold-300 uppercase font-semibold">
                    Prices Going Up Soon
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                </div>
              </div>
            </div>

            {/* Middle core content */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full gap-6">
              
              <div className="space-y-4 text-left lg:pl-4">
                {/* Small intro label */}
                <span className="font-sans text-[10px] tracking-[0.35em] text-gold-400 uppercase font-semibold block">
                  BESPOKE PARTIAL PAYMENT SCHEME
                </span>

                {/* Main Heading: Pay 15% Advance */}
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-semibold leading-tight tracking-tight">
                  Pay <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600">15% Advance</span>
                </h2>

                {/* Extra Promo Banner */}
                <div className="inline-flex flex-wrap items-center gap-3 py-3 px-4 bg-black/60 border border-gold-900/30 rounded-xl w-full">
                  <span className="font-sans text-xs sm:text-sm tracking-wider text-neutral-300">
                    Balance on delivery + <span className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm bg-gold-950/40 px-2 py-0.5 rounded border border-gold-600/30">EXTRA 7% OFF</span>
                  </span>
                  <button
                    onClick={handleCopy}
                    className="ml-auto py-1.5 px-3 bg-gradient-to-r from-gold-700 to-gold-500 hover:brightness-110 text-black text-[9px] uppercase tracking-widest font-black font-sans rounded transition-all flex items-center gap-1"
                  >
                    {copiedCoupon ? (
                      <>
                        <Check className="w-3 h-3" />
                        COPIED
                      </>
                    ) : (
                      "CLAIM EXTRA 7%"
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom Trust markers matching the image structure */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-900 pt-6 lg:pl-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-950/20 border border-gold-900/40 flex items-center justify-center text-gold-400 shrink-0">
                    <Banknote className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-xs font-semibold text-white">Cash On Delivery</span>
                    <span className="font-sans text-[9px] text-neutral-500 uppercase tracking-wider">Inspect before payment</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-950/20 border border-gold-900/40 flex items-center justify-center text-gold-400 shrink-0">
                    <RefreshCw className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-xs font-semibold text-white">Easy Returns</span>
                    <span className="font-sans text-[9px] text-neutral-500 uppercase tracking-wider">No questions asked</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-950/20 border border-gold-900/40 flex items-center justify-center text-gold-400 shrink-0">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-xs font-semibold text-white">700,000+ Trusted</span>
                    <span className="font-sans text-[9px] text-neutral-500 uppercase tracking-wider">High ratings globally</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right visual: Decor Chair with Gold Accent */}
            <div className="lg:col-span-3 relative h-full flex items-center justify-center">
              <div className="relative group overflow-hidden rounded-xl border border-gold-600/20 bg-black/50 p-2 w-full max-w-[280px] lg:max-w-none aspect-[4/5] sm:aspect-video lg:aspect-[3/4]">
                {/* Gold glowing border shadow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-600 to-gold-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500" />
                
                {/* Interior frame matching our theme */}
                <div className="relative h-full w-full rounded-lg overflow-hidden bg-[#181818] border border-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                    alt="Luxury Emerald Accent Chair"
                    className="w-full h-full object-cover brightness-[90%] contrast-[105%] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Soft vignette and gold overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Decorative plant element hint just like the original design */}
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs border border-gold-600/10 py-1 px-2 rounded">
                    <span className="font-sans text-[8px] text-gold-400 font-bold uppercase tracking-widest">
                      Bespoke Collection
                    </span>
                  </div>

                  {/* Label card overlays at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md border border-gold-600/20 py-2 px-3 rounded flex items-center justify-between shadow-xl">
                    <div className="flex flex-col text-left">
                      <span className="font-serif text-xs text-white font-semibold">
                        Emerald Armchair
                      </span>
                      <span className="font-sans text-[8px] text-neutral-400 uppercase tracking-widest">
                        Gilded Steel Legs
                      </span>
                    </div>
                    <span className="font-sans text-[9px] text-gold-400 font-bold bg-gold-950/40 border border-gold-500/20 py-0.5 px-2 rounded uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
