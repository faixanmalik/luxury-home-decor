import { useState } from "react";
import { Sparkles, Eye, Lightbulb, RefreshCw, Layout, Layers, HelpCircle, Check } from "lucide-react";

interface VisualizerItem {
  id: string;
  name: string;
  image: string;
  height: string;
  scale: string;
}

export default function InteractiveVisualizer() {
  const [activeBackdrop, setActiveBackdrop] = useState("charcoal");
  const [activeItem, setActiveItem] = useState("chair");
  const [isWarmLightOn, setIsWarmLightOn] = useState(true);

  const backdrops = [
    {
      id: "charcoal",
      name: "Matte Charcoal Slate",
      cssClass: "bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#0c0c0c]",
      borderAccent: "border-neutral-800",
      description: "A deep, modern volcanic matte slate that absorbs stray glare and boosts gold reflection."
    },
    {
      id: "marble",
      name: "Obsidian Gilded Marble",
      cssClass: "bg-radial from-[#151515] via-[#0b0b0b] to-[#1a150e]",
      borderAccent: "border-gold-900/40",
      description: "Black marble patterns interspersed with real gold crystalline veins."
    },
    {
      id: "walnut",
      name: "Rich Walnut Timber",
      cssClass: "bg-gradient-to-br from-[#1c120a] via-[#2a1b10] to-[#120b06]",
      borderAccent: "border-amber-950/40",
      description: "Organic warm dark American walnut grain, providing soft, timeless luxury."
    },
    {
      id: "emerald",
      name: "Royal Emerald Velvet",
      cssClass: "bg-gradient-to-br from-[#051e16] via-[#092b20] to-[#03130e]",
      borderAccent: "border-emerald-950/40",
      description: "Deep jewel-toned imperial green, creating an outstanding velvet backdrop."
    }
  ];

  const items: { [key: string]: VisualizerItem } = {
    chair: {
      id: "chair",
      name: "Imperial Velvet Chair",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
      height: "h-64 sm:h-80",
      scale: "group-hover:scale-105"
    },
    table: {
      id: "table",
      name: "Midas Aurelia Coffee Table",
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=800&q=80",
      height: "h-48 sm:h-56",
      scale: "group-hover:scale-105"
    },
    mirror: {
      id: "mirror",
      name: "Midas Archway Mirror",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
      height: "h-72 sm:h-96",
      scale: "group-hover:scale-105"
    },
    lamp: {
      id: "lamp",
      name: "Aero Lux Pendant Lamp",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      height: "h-40 sm:h-48",
      scale: "group-hover:scale-105"
    }
  };

  const selectedBackdropObj = backdrops.find((b) => b.id === activeBackdrop) || backdrops[0];
  const selectedItemObj = items[activeItem];

  return (
    <section id="visualizer-section" className="py-24 bg-gradient-to-b from-[#0b0b0b] to-black border-t border-neutral-900/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.4em] text-gold-500 uppercase font-semibold mb-3 block">
            IMMERSIVE EXPERIENCES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight mb-4">
            The Gilded Room Visualizer
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4" />
          <p className="font-sans text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Experiment interactively. Coordinate our luxury signature assets against high-end architectural wall schemes to preview color compatibility.
          </p>
        </div>

        {/* Bento Grid Visualizer Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel (Left, cols: 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Backdrop selection */}
            <div className="bg-[#111111] border border-neutral-900 p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Layout className="w-4 h-4 text-gold-400" />
                <h3 className="font-serif text-lg text-white font-medium">1. Choose Wall Backdrop</h3>
              </div>
              <p className="font-sans text-neutral-400 text-xs font-light mb-4 leading-relaxed">
                Backdrop textures change the light reflection indices across metal surfaces.
              </p>
              
              <div className="space-y-3">
                {backdrops.map((bd) => (
                  <button
                    key={bd.id}
                    id={`visualizer-bd-${bd.id}`}
                    onClick={() => setActiveBackdrop(bd.id)}
                    className={`w-full p-3 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 ${
                      activeBackdrop === bd.id
                        ? "bg-gold-950/20 border-gold-500/80"
                        : "bg-black/40 border-neutral-800 hover:border-neutral-700"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg shrink-0 border border-white/10 ${bd.cssClass}`} />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white font-sans">{bd.name}</span>
                      <span className="text-[10px] text-neutral-500 font-sans line-clamp-1">{bd.description}</span>
                    </div>
                    {activeBackdrop === bd.id && (
                      <Check className="w-4 h-4 text-gold-400 ml-auto shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Furniture Selection */}
            <div className="bg-[#111111] border border-neutral-900 p-6 rounded-2xl flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-gold-400" />
                <h3 className="font-serif text-lg text-white font-medium">2. Choose Furnishing</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {Object.values(items).map((itm) => (
                  <button
                    key={itm.id}
                    id={`visualizer-item-${itm.id}`}
                    onClick={() => setActiveItem(itm.id)}
                    className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center gap-2 ${
                      activeItem === itm.id
                        ? "bg-gold-950/20 border-gold-500/80 text-gold-400"
                        : "bg-black/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-neutral-800">
                      <img src={itm.image} alt={itm.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider font-sans truncate w-full">
                      {itm.name.replace("Midas ", "").replace("Imperial ", "")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Canvas (Center, cols: 8) */}
          <div className="lg:col-span-8 flex flex-col bg-[#111111] border border-neutral-900 p-6 sm:p-8 rounded-2xl">
            
            {/* Canvas Header Controls */}
            <div className="flex items-center justify-between mb-4 border-b border-neutral-900 pb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  Interactive Preview Stage
                </span>
              </div>

              {/* Warm light trigger */}
              <button
                id="visualizer-light-btn"
                onClick={() => setIsWarmLightOn(!isWarmLightOn)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-sans font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isWarmLightOn
                    ? "bg-gold-500/10 text-gold-300 border-gold-500/60 shadow-lg shadow-gold-950/20"
                    : "bg-black text-neutral-500 border-neutral-800 hover:text-neutral-300"
                }`}
              >
                <Lightbulb className={`w-3.5 h-3.5 ${isWarmLightOn ? "fill-current" : ""}`} />
                {isWarmLightOn ? "Warm Amber Light: ON" : "Cold Light: ON"}
              </button>
            </div>

            {/* Interactive Stage Canvas Frame */}
            <div
              id="visualizer-stage-frame"
              className={`relative flex-grow min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-700 ${selectedBackdropObj.cssClass}`}
            >
              
              {/* Warm Lighting Radial Overlay */}
              {isWarmLightOn && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,179,93,0.18)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none z-10 transition-opacity duration-500" />
              )}
              
              {/* Subtle grid pattern accent */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

              {/* Dynamic Overlay Shadow Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              {/* Rendered Object Stage Layer */}
              <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center">
                
                {/* Decorative golden frame backing */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gold-500/5 bg-transparent blur-md pointer-events-none" />
                
                {/* Simulated lamp casting down-light if item is lamp */}
                {selectedItemObj.id === "lamp" && isWarmLightOn && (
                  <div className="absolute top-1/2 -translate-y-1/2 w-48 h-48 bg-gold-400/10 rounded-full blur-[40px] mix-blend-screen animate-pulse pointer-events-none" />
                )}

                {/* Main Rendered Asset */}
                <div className="relative group cursor-pointer transition-transform duration-500">
                  <img
                    src={selectedItemObj.image}
                    alt={selectedItemObj.name}
                    className={`rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 object-cover max-w-full ${selectedItemObj.height} ${selectedItemObj.scale} transition-all duration-500`}
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle golden reflection outline */}
                  <div className="absolute inset-0 rounded-2xl border border-gold-500/20 pointer-events-none group-hover:border-gold-500/40 transition-colors" />
                </div>

                {/* Item label tag inside Canvas */}
                <div className="mt-6 px-4 py-2 bg-black/80 border border-gold-900/40 rounded-xl inline-flex flex-col items-center shadow-lg backdrop-blur-sm">
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold-400 font-bold">Preview Asset</span>
                  <span className="font-serif text-sm text-white font-medium">{selectedItemObj.name}</span>
                </div>

              </div>

              {/* Decorative Floor shadow under item */}
              <div className="absolute bottom-12 w-48 h-4 bg-black/80 blur-xl rounded-full scale-150 z-10" />

            </div>

            {/* Design Guideline recommendation based on selections */}
            <div className="mt-6 p-4 bg-black/50 border border-neutral-900 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-gold-950/40 border border-gold-700/30 rounded-lg text-gold-400 shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider font-sans mb-1">
                  Designer Coordination Tip
                </span>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed font-light">
                  {activeBackdrop === "charcoal" && "The Matte Charcoal absorbs scatter light, amplifying the depth of gold finishes. Pair this combination with local warm spots of 2700K ambient light (like the Aero Lux Pendant) for optimal luminance contrast."}
                  {activeBackdrop === "marble" && "The Obsidian Gilded Marble features intrinsic golden veins. Placing the geometric Midas Coffee Table on this backdrop produces a high-end luxury rhythm where linear structures flow elegantly into organic stone contours."}
                  {activeBackdrop === "walnut" && "American Walnut wood grains evoke rich organic warmth. The dark chocolate wood balances the hard gold-foil metallic structures of the Aethelgard Wall Clock or Elysium Shelf, creating a deeply cozy luxury vibe."}
                  {activeBackdrop === "emerald" && "Emerald Green and Celestial Gold represents an ultra-chic, high-fashion jewel combo. Placing the Imperial Charcoal Velvet Chair on this deep green backdrop creates a rich visual depth ideal for elegant reading corners."}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
