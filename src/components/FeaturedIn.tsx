import React from "react";

interface LogoItem {
  name: string;
  renderLogo: () => React.JSX.Element;
}

const LOGOS: LogoItem[] = [
  {
    name: "Tracxn",
    renderLogo: () => (
      <div className="flex items-center gap-2 select-none">
        {/* Tracxn stylized logo pointer */}
        <svg className="w-5 h-5 text-gold-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
        </svg>
        <span className="font-sans text-lg font-extrabold tracking-tight text-neutral-300">
          Trac<span className="text-gold-400">xn</span>
        </span>
      </div>
    )
  },
  {
    name: "ThePrint",
    renderLogo: () => (
      <div className="flex items-center select-none">
        <span className="font-serif text-lg font-bold tracking-tight text-[#e5af5d]">
          The<span className="text-white bg-gold-600 px-1 rounded ml-0.5 font-sans text-base">Print</span>
        </span>
      </div>
    )
  },
  {
    name: "Business Standard",
    renderLogo: () => (
      <div className="flex flex-col items-center select-none">
        <span className="font-serif text-base font-black tracking-tight text-neutral-300 border-b border-gold-600/30 pb-0.5">
          Business Standard
        </span>
      </div>
    )
  },
  {
    name: "ANI",
    renderLogo: () => (
      <div className="flex flex-col items-center select-none leading-none text-center">
        <span className="font-sans text-2xl font-black tracking-widest text-white">
          ANI
        </span>
        <span className="text-[7px] text-neutral-500 uppercase tracking-wider mt-1 scale-90">
          South Asia's Leading News Agency
        </span>
      </div>
    )
  },
  {
    name: "dailyhunt",
    renderLogo: () => (
      <div className="flex items-center gap-1.5 select-none">
        {/* dailyhunt clover leaf */}
        <div className="grid grid-cols-2 gap-0.5 rotate-45">
          <div className="w-2 h-2 rounded-full bg-gold-500" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-orange-400" />
        </div>
        <span className="font-sans text-base font-bold tracking-tight text-neutral-300">
          daily<span className="text-gold-400">hunt</span>
        </span>
      </div>
    )
  },
  {
    name: "ZEE5",
    renderLogo: () => (
      <div className="flex items-center select-none">
        <span className="font-serif text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-300 to-amber-500">
          Z5
        </span>
      </div>
    )
  }
];

// Combine logs list to have a seamless double track loop
const LOOP_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

export default function FeaturedIn() {
  return (
    <section className="py-12 bg-[#060606] border-t border-b border-neutral-900/60 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-80 h-80 bg-gold-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Label Header */}
        <div className="text-center mb-8">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold-400 font-medium">
            Featured In
          </span>
          <div className="w-12 h-[1px] bg-gold-700/40 mx-auto mt-2" />
        </div>

        {/* Outer continuous container holding the marquee track */}
        <div className="relative w-full overflow-hidden py-4 flex items-center">
          {/* Edge shadow gradient mask to fade logos seamlessly on the left & right sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#060606] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#060606] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex w-max items-center gap-16 animate-marquee hover:[animation-play-state:paused]">
            {LOOP_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center opacity-45 hover:opacity-100 hover:scale-105 transition-all duration-300 filter grayscale hover:grayscale-0 px-4"
              >
                {logo.renderLogo()}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
