import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Sparkles, Check, Shield, Star, RefreshCw } from "lucide-react";

interface ProductDetail {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  specs: string[];
}

interface PopularCategory {
  id: string;
  title: string;
  startingPrice: string;
  mainImage: string; // Cutout / transparent feel image
  colorAccent: string; // Custom elegant highlight class
  details: {
    tagline: string;
    description: string;
    materials: string[];
    models: ProductDetail[];
  };
}

const CATEGORIES: PopularCategory[] = [
  {
    id: "coffee-tables",
    title: "Coffee Tables",
    startingPrice: "$249",
    // Premium round double nesting table on clean background
    mainImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=80",
    colorAccent: "from-[#1a1917] to-[#12110f] border-gold-800/30 hover:border-gold-500/50", // Luxury gold-tinged dark card
    details: {
      tagline: "Sintered Stone & Brushed Brass Architectural Centerpieces",
      description: "Our nested coffee tables feature premium Italian sintered stone tops framed in robust, hand-welded steel plated with fine 24k gold or oil-rubbed bronze lacquer.",
      materials: ["Italian Sintered Stone", "Carbon Steel Frame", "Brass Plating", "Tempered Glass"],
      models: [
        {
          id: "ct-1",
          name: "Aurelia Nested Dual Set",
          price: "$349",
          image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&q=80",
          description: "Dual cascading nesting coffee tables with marble-textured sintered stone and geometric brushed gold wire frames.",
          specs: ["Large: 80cm diameter, 45cm height", "Small: 60cm diameter, 38cm height", "Heat and scratch proof top"]
        },
        {
          id: "ct-2",
          name: "Monolith Walnut Block",
          price: "$429",
          image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
          description: "A solid walnut block low-profile coffee table with raw timber edge and hidden floating base support.",
          specs: ["Dimensions: 120cm x 60cm x 35cm", "Matte organic lacquer seal", "Integrated smart push drawer"]
        },
        {
          id: "ct-3",
          name: "Ellipse Ribbed Glass Centerpiece",
          price: "$249",
          image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80",
          description: "Art-deco inspired fluted glass coffee table with a warm amber tint, catching light gracefully across clean floorboards.",
          specs: ["Fluted structural safety glass", "Solid ash wood support base", "Weight capacity: 120 kg"]
        }
      ]
    }
  },
  {
    id: "table-lamps",
    title: "Table Lamps",
    startingPrice: "$69",
    // Table lamp with beautiful drum shade and brass base
    mainImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80",
    colorAccent: "from-[#1a1917] to-[#12110f] border-gold-800/30 hover:border-gold-500/50",
    details: {
      tagline: "Diffused Ambient Illuminators & Sculptural Accents",
      description: "Artisan-made desk and side lamps engineered with warm LED modules, high-density cotton drum shades, and premium heavy ceramic or gold metallic bases.",
      materials: ["Mouth-blown Amber Glass", "Fine Brushed Satin Gold", "Linen Drum Shades"],
      models: [
        {
          id: "tl-1",
          name: "Aurum Geo Table Light",
          price: "$99",
          image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
          description: "Gilded wireframe structure with a bright warm inner tube, casting deep geometric shadows across walls.",
          specs: ["3-Way touch dimming control", "E27 brass bulb interface included", "2-year complete warranty"]
        },
        {
          id: "tl-2",
          name: "Pleated Botanical Luminary",
          price: "$69",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
          description: "Classic hand-pleated silk shade table lamp sitting on an emerald glazed ceramic pillar with brass collar.",
          specs: ["Organic natural silk shade", "Weighted anti-skid base", "Includes 2700K sunset-warm bulb"]
        },
        {
          id: "tl-3",
          name: "Minimalist Dome Task Lamp",
          price: "$85",
          image: "https://images.unsplash.com/photo-1542728928-1413eeae4d92?auto=format&fit=crop&w=600&q=80",
          description: "Industrial mid-century modern dome lamp in matte black with a bright reflective gold interior hood.",
          specs: ["Adjustable shade angle", "Braided heavy textile power cord", "Solid steel construction"]
        }
      ]
    }
  },
  {
    id: "wooden-mirrors",
    title: "Wooden Mirrors",
    startingPrice: "$79",
    // Stunning arched window-style mirror with wooden details
    mainImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80",
    colorAccent: "from-[#1a1917] to-[#12110f] border-gold-800/30 hover:border-gold-500/50",
    details: {
      tagline: "Arched Cathedral Frames & Solid Teak Framing",
      description: "Beveled luxury glass encased inside deeply carved, solid seasoned hardwood frames. Ready to elevate entryways, master bedrooms, and vanity alcoves.",
      materials: ["Solid Seasoned Teak", "Saint-Gobain HD Glass", "Antic Gold Leaf Foil"],
      models: [
        {
          id: "wm-1",
          name: "Cathedral Arch Mirror",
          price: "$149",
          image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
          description: "Stately 16-pane gothic arched window mirror with an organic distress wood finish for vintage charm.",
          specs: ["Solid mango wood framing", "Dual heavy D-ring hooks pre-installed", "Size: 150cm x 80cm"]
        },
        {
          id: "wm-2",
          name: "Scalloped Teak Vanity Ring",
          price: "$79",
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
          description: "Perfect circular entry mirror bordered by master-carved teak scallops with a rich honey polish.",
          specs: ["Diameter: 65cm", "1.2 inches frame thickness", "Ultra HD shatterproof silver glass"]
        },
        {
          id: "wm-3",
          name: "Gilded Baroque Floor Mirror",
          price: "$299",
          image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
          description: "A monumental leaner mirror styled with highly detailed hand-sculpted gold leaf baroque corner cresting.",
          specs: ["Stately Size: 190cm x 95cm", "Reinforced solid wood backer panel", "Anti-topple safety anchor kit included"]
        }
      ]
    }
  },
  {
    id: "side-tables",
    title: "Side Tables",
    startingPrice: "$99",
    // Super high quality minimalist side table next to armchair on neutral backdrop
    mainImage: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=400&q=80",
    colorAccent: "from-[#1a1917] to-[#12110f] border-gold-800/30 hover:border-gold-500/50",
    details: {
      tagline: "Compact Bedside Pedestals & Sculpted Accent Tables",
      description: "Sophisticated companion pieces designed to hold premium lamps, cocktails, or decorative journals in cozy lounge setups.",
      materials: ["Brushed Gilded Steel", "Premium Calacatta Marble", "Ribbed Oak Veneers"],
      models: [
        {
          id: "st-1",
          name: "Empire Gold Hourglass",
          price: "$149",
          image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80",
          description: "Stunning metallic gold drum-hourglass profile with a circular inlaid white marble top surface.",
          specs: ["Solid steel drum frame", "Gloss protective clear sealant coating", "Size: 45cm height, 38cm width"]
        },
        {
          id: "st-2",
          name: "Vantage Oak Bedside Plinth",
          price: "$99",
          image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
          description: "Single soft-close drawer unit crafted with modern ribbed timber panels and custom brass pull handle.",
          specs: ["European oak veneer build", "German push-to-open telescopic tracks", "Solid tapered pin wooden legs"]
        },
        {
          id: "st-3",
          name: "Solitaire Travertine Hexagon",
          price: "$189",
          image: "https://images.unsplash.com/photo-1551216223-37c8d1dbec5c?auto=format&fit=crop&w=600&q=80",
          description: "Brutalist hexagonal pedestal block carved out of genuine warm cream honed travertine stone.",
          specs: ["100% natural solid travertine stone", "Honed matte smooth finish", "Sealed with professional oil-repellant layer"]
        }
      ]
    }
  },
  {
    id: "floor-lamps",
    title: "Floor Lamps",
    startingPrice: "$119",
    // Stunning vertical tall floor lamp
    mainImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80",
    colorAccent: "from-[#1a1917] to-[#12110f] border-gold-800/30 hover:border-gold-500/50",
    details: {
      tagline: "Stately Arched Canopies & Tall Structural Beacons",
      description: "Add scale, drama, and dynamic vertical contrast to your lounges with floor lamps that frame armchairs and reading corners beautifully.",
      materials: ["Curved Carbon Steel", "Premium Heavy Marble Footing", "Smart Foot Dimmer"],
      models: [
        {
          id: "fl-1",
          name: "Lumina Marble-Base Arch",
          price: "$229",
          image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
          description: "Sweeping brushed stainless arch lamp holding a massive modern fabric hood, supported securely by a solid black Nero Marquina marble slab.",
          specs: ["Max extended reach: 180cm", "Foot-pedal step on/off system", "Weighted 22 kg base prevents tilt"]
        },
        {
          id: "fl-2",
          name: "Aethelgard Timber Tripod",
          price: "$119",
          image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
          description: "Three gorgeous interlocking oak legs supporting a classic off-white textured linen cylindrical drum hood.",
          specs: ["Height: 165cm", "Internal cable wire routing inside leg", "Perfect warm diffused lighting"]
        },
        {
          id: "fl-3",
          name: "Aurum Column Tower",
          price: "$169",
          image: "https://images.unsplash.com/photo-1542728928-1413eeae4d92?auto=format&fit=crop&w=600&q=80",
          description: "Towering sculptural brass column lamp featuring beautiful perforated filigree sheets that project intricate mandala patterns onto surroundings.",
          specs: ["Dual light sockets", "Warm golden reflections", "Solid brass with antiqued finishing"]
        }
      ]
    }
  },
  {
    id: "office-chairs",
    title: "Office Chairs",
    startingPrice: "$349",
    // Luxury pink channel-tufted velvet swivel office chair
    mainImage: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=400&q=80",
    colorAccent: "from-[#1a1917] to-[#12110f] border-gold-800/30 hover:border-gold-500/50",
    details: {
      tagline: "Ergonomic Sculptured Velvet & Premium Metal Swivels",
      description: "Ditch ugly plastic chairs. Our office collection pairs orthopaedic spine contouring and high-performance gas lifts with luxurious velvet and plush leather upholstery.",
      materials: ["Plush Bouclé or Velvet", "Class 4 High-Spec Gas Lift", "Polished Aluminum Casters"],
      models: [
        {
          id: "oc-1",
          name: "Regal Velvet Office Swivel",
          price: "$449",
          image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80",
          description: "An incredibly comfortable shell-back chair upholstered in ultra-plush pink velvet, supported on modern gold-electroplated caster legs.",
          specs: ["Pneumatic height lift", "360-degree silent rolling wheels", "Tension tilt mechanism"]
        },
        {
          id: "oc-2",
          name: "Vogue Ribbed Leather Desk Chair",
          price: "$349",
          image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=600&q=80",
          description: "Sleek, low-profile task chair styled in cognac brown full-grain ribbed leather and cast-aluminum frame. Ideal for modern workspaces.",
          specs: ["Orthopaedic lumbar support", "Adjustable armrests", "Nylon scratchless twin wheel casters"]
        },
        {
          id: "oc-3",
          name: "Bouclé Executive Swivel Throne",
          price: "$529",
          image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80",
          description: "Generously cushioned armchair completely upholstered in cozy, modern cream bouclé fabric with solid white-oak base accents.",
          specs: ["Overstuffed cloud-foam cushioning", "Synchronous multi-angle lock tilt", "Heavy-duty steel chassis"]
        }
      ]
    }
  }
];

export default function PopularPicks() {
  const [selectedCategory, setSelectedCategory] = useState<PopularCategory | null>(null);
  const [activeModelIndex, setActiveModelIndex] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const openDetails = (cat: PopularCategory) => {
    setSelectedCategory(cat);
    setActiveModelIndex(0);
  };

  const closeDetails = () => {
    setSelectedCategory(null);
  };

  const handleReserve = (modelName: string) => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="popular-picks" className="py-24 bg-[#0b0b0b] text-white relative overflow-hidden border-b border-neutral-900">
      {/* Decorative clean dark radial background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER - LUXURY BLACK & GOLD MATCHING THE ENTIRE WEBSITE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="font-sans text-xs tracking-[0.4em] text-gold-500 uppercase font-semibold mb-3 block">
              ROYAL SELECTIONS
            </span>
            <h2 id="popular-picks-title" className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight">
              Popular Picks
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-gold-600 to-transparent mt-4 mb-2" />
            <p className="font-sans text-sm text-neutral-400 mt-2 tracking-wide font-light max-w-xl leading-relaxed">
              Discover our most celebrated hand-gilded creations, vetted by master architects and designed for timeless luxury.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-gold-400 hover:text-white transition-colors cursor-pointer group">
            <span>View all collections</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* 6 CARD GRID IN HIGH-END LUXURY BLACK/GOLD SCHEME */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-7">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => openDetails(cat)}
              className="group cursor-pointer flex flex-col relative pt-16"
            >
              {/* Product Overlap Image with absolute center-alignment and floating height */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36 z-20 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3">
                <img
                  src={cat.mainImage}
                  alt={cat.title}
                  className="max-w-[95%] max-h-[95%] object-contain filter drop-shadow-[0_16px_24px_rgba(0,0,0,0.6)] rounded-lg group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Luxury Gilded Obsidian Rounded Box Container */}
              <div className={`w-full aspect-[3/4] bg-gradient-to-b ${cat.colorAccent} rounded-3xl p-5 flex flex-col justify-end text-left relative overflow-hidden transition-all duration-300 border shadow-[0_10px_25px_rgba(0,0,0,0.4)] group-hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] group-hover:-translate-y-1`}>
                
                {/* Subtle gold-tinted reflection sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-500/5 to-gold-500/10 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="font-serif text-sm sm:text-base text-white font-medium tracking-tight mb-1 group-hover:text-gold-200 transition-colors">
                    {cat.title}
                  </h3>
                  <div className="flex flex-col mt-2">
                    <span className="font-sans text-[8px] sm:text-[9px] text-neutral-400 uppercase tracking-widest font-light">
                      Starting At
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-gold-400 font-bold tracking-wide mt-0.5">
                      {cat.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Corner detail icon indicator */}
                <div className="absolute bottom-4 right-4 bg-gold-950/60 border border-gold-800/40 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN IMMERSIVE SPECIFIC DETAILS DIALOG (MODAL / NEXT PAGE SIMULATION) */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-[#0f0f11] border border-neutral-800 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl relative text-white"
            >
              {/* Close Button */}
              <button
                onClick={closeDetails}
                className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-850 transition-colors"
                aria-label="Close details panel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* LEFT SIDE: Big alternate view Image & Model Carousel */}
                <div className="lg:col-span-6 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800/80">
                  
                  {/* Category Title Header inside modal */}
                  <div className="text-left mb-6">
                    <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-extrabold uppercase block mb-1">
                      Bespoke Experience / {selectedCategory.title}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                      {selectedCategory.details.models[activeModelIndex].name}
                    </h3>
                    <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest mt-1">
                      Premium Architect Edition
                    </p>
                  </div>

                  {/* Main Active Sub-Model Showcase Image with rich contrast */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-neutral-800 relative group shadow-sm">
                    <img
                      src={selectedCategory.details.models[activeModelIndex].image}
                      alt={selectedCategory.details.models[activeModelIndex].name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Price Tag */}
                    <div className="absolute bottom-4 left-4 bg-neutral-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-gold-900/40 shadow-lg">
                      <span className="font-sans text-[10px] text-neutral-400 block leading-none">Retail Value</span>
                      <span className="font-sans text-base text-gold-300 font-extrabold mt-1 block">
                        {selectedCategory.details.models[activeModelIndex].price}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                      <span className="font-sans text-[9px] text-gold-400 font-semibold uppercase tracking-widest">
                        Design {activeModelIndex + 1} of {selectedCategory.details.models.length}
                      </span>
                    </div>
                  </div>

                  {/* Multi-Model Carousel Selection buttons (Interactive alternate images switcher) */}
                  <div className="mt-8">
                    <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-black block text-left mb-3">
                      Select Design Profile:
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedCategory.details.models.map((model, idx) => (
                        <button
                          key={model.id}
                          onClick={() => setActiveModelIndex(idx)}
                          className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all ${
                            activeModelIndex === idx
                              ? "bg-gold-950/30 border-gold-500/60 text-white shadow-sm font-semibold"
                              : "bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                          }`}
                        >
                          <img
                            src={model.image}
                            alt={model.name}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 border border-neutral-800"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-sans text-[10px] truncate leading-tight block text-white">
                              {model.name}
                            </span>
                            <span className="font-sans text-[9px] text-gold-400 font-bold mt-0.5 block">
                              {model.price}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDE: Sub-Model Descriptions, Specifications, Materials and Reserve action */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#0f0f11] to-[#070708]">
                  
                  <div className="space-y-6 text-left">
                    
                    {/* Tagline & Core description */}
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold-950/40 border border-gold-900/30 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                        <span className="font-sans text-[9px] text-gold-400 uppercase tracking-wider font-extrabold">
                          Handcrafted Bespoke Edition
                        </span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl text-white font-medium leading-snug">
                        {selectedCategory.details.tagline}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-neutral-450 leading-relaxed mt-3 font-light">
                        {selectedCategory.details.models[activeModelIndex].description}
                      </p>
                    </div>

                    {/* Specifications List */}
                    <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-5">
                      <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-black block mb-3">
                        Technical Spec Sheet:
                      </span>
                      <ul className="space-y-2.5 text-xs text-neutral-300 font-sans">
                        {selectedCategory.details.models[activeModelIndex].specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                            <span className="font-light">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Materials Block */}
                    <div>
                      <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-black block mb-2.5">
                        Organic Materials Sourced:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory.details.materials.map((mat, idx) => (
                          <span
                            key={idx}
                            className="font-sans text-[9px] uppercase tracking-wider text-neutral-300 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Trust Indicators inside Modal */}
                    <div className="grid grid-cols-2 gap-3 border-t border-neutral-800/80 pt-5 text-[10px] text-neutral-400 font-sans">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gold-400" />
                        <span>24-Month Master Warranty</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-gold-400" />
                        <span>White-glove Home Setup</span>
                      </div>
                    </div>

                  </div>

                  {/* Booking / Checkout Simulator action */}
                  <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col text-left w-full sm:w-auto">
                      <span className="font-sans text-[9px] text-neutral-500 uppercase tracking-widest font-bold">
                        Bespoke Booking Advance
                      </span>
                      <span className="font-serif text-lg text-white font-medium">
                        Pay 15% Advance at Delivery
                      </span>
                    </div>

                    <button
                      onClick={() => handleReserve(selectedCategory.details.models[activeModelIndex].name)}
                      className="w-full sm:w-auto bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 text-neutral-950 hover:brightness-110 px-7 py-3.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-4 h-4 text-neutral-950" />
                          Reservation Placed!
                        </>
                      ) : (
                        <>
                          Reserve Bespoke Order
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
