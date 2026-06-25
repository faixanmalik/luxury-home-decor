import { Product } from "./types";

export const CATEGORIES = [
  "All",
  "Tables",
  "Chairs",
  "Lamps",
  "Mirrors",
  "Paintings",
  "Wall Clocks",
  "Wall Shelfs"
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Midas Aurelia Coffee Table",
    category: "Tables",
    price: 1899,
    originalPrice: 9495,
    discountPercentage: 80,
    description: "An absolute masterpiece of interior craft. Features a hand-polished celestial gold-finished stainless steel frame styled with an interlocking geometric cage pattern, topped by high-durability white and gold Calacatta marble.",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 148,
    features: [
      "Individually hand-soldered geometric pillars",
      "Calacatta gold quartz marble tabletop (20mm thickness)",
      "Scratch-resistant electroplated brass-gold finishing",
      "Soft padded bottom to guard expensive wooden flooring"
    ],
    specs: {
      "Dimensions": "Dia: 90cm, Height: 42cm",
      "Weight": "34 kg",
      "Frame Material": "S304 Stainless Steel",
      "Stone Type": "Polished Natural Quartzite"
    },
    materials: [
      "Celestial Gold Steel",
      "Obsidian Slate Steel",
      "Brushed Champagne Brass"
    ],
    colors: [
      { name: "Saffron Gold", hex: "#dfb954" },
      { name: "Obsidian Black", hex: "#1c1c1c" },
      { name: "Champagne Silver", hex: "#d1cfc7" }
    ]
  },
  {
    id: "prod-8",
    name: "Helios Gilded Nesting Tables",
    category: "Tables",
    price: 1390,
    originalPrice: 6950,
    discountPercentage: 80,
    description: "A gorgeous set of two nesting tables, designed to overlap beautifully. Framed in high-tensile carbon steel electroplated with satin-brass gold, topped with charcoal-veined obsidian quartz stone.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 64,
    features: [
      "Space-saving modular nesting behavior",
      "Ebonized tempered obsidian glass surfaces",
      "Industrial solid brass support nodes",
      "Excellent high-shine hand-buffed finish"
    ],
    specs: {
      "Large Table": "Dia: 75cm, H: 45cm",
      "Small Table": "Dia: 55cm, H: 38cm",
      "Total Weight": "26 kg",
      "Top Material": "Tempered Obsidian Glass"
    },
    materials: [
      "Brushed Champagne Brass",
      "Polished Yellow Gold",
      "Ebonized Matte Bronze"
    ],
    colors: [
      { name: "Saffron Gold", hex: "#dfb954" },
      { name: "Obsidian Black", hex: "#1c1c1c" }
    ]
  },
  {
    id: "prod-9",
    name: "Aethelgard Obsidian Console Table",
    category: "Tables",
    price: 1750,
    originalPrice: 8750,
    discountPercentage: 80,
    description: "The ultimate foyer accent. Framed in linear golden geometric frames with a suspended, high-gloss noir black lacquer wood drawer compartment, ideal for grand entryways.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 42,
    features: [
      "Dual soft-close drawers lined with royal velvet interiors",
      "Polished titanium gold alloy linear support frame",
      "Scratch-proof matte clear lacquer protection layer",
      "Integrated hidden cable routing management slot"
    ],
    specs: {
      "Dimensions": "W: 120cm, D: 35cm, H: 80cm",
      "Weight": "29 kg",
      "Drawer Count": "2 Soft-Close",
      "Finish Type": "Titanium Gold Plated"
    },
    materials: [
      "Satin Gilded Titanium",
      "Burnished Antique Gold"
    ],
    colors: [
      { name: "Noir Black", hex: "#0d0d0d" },
      { name: "Antique Brass", hex: "#a77a2d" }
    ]
  },
  {
    id: "prod-2",
    name: "Imperial Charcoal Velvet Lounge Chair",
    category: "Chairs",
    price: 1250,
    originalPrice: 6250,
    discountPercentage: 80,
    description: "Wrap yourself in deep, comforting luxury. This accent armchair features dense premium velvet upholstery, a deep double-cushioned seat profile, and tall, elegant tapered brass-gold metal stilt legs.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 94,
    features: [
      "Ergonomic sloped high back with supportive lumbar roll",
      "Ultra-dense memory-foam seat cushion with spring core",
      "Premium spill-resistant Belgian performance velvet",
      "Adjustable floor levelers on solid iron electro-plated legs"
    ],
    specs: {
      "Dimensions": "W: 78cm, D: 84cm, H: 96cm",
      "Weight": "19.5 kg",
      "Fabric": "Belgian Velvet",
      "Max Capacity": "160 kg"
    },
    materials: [
      "Royal Charcoal Velvet",
      "Midnight Blue Velvet",
      "Forest Emerald Velvet"
    ],
    colors: [
      { name: "Velvet Charcoal", hex: "#2b2b2b" },
      { name: "Velvet Emerald", hex: "#0c3b2e" },
      { name: "Velvet Navy", hex: "#101e3a" }
    ]
  },
  {
    id: "prod-10",
    name: "Onyx Gilded Dining Chair",
    category: "Chairs",
    price: 420,
    originalPrice: 2100,
    discountPercentage: 80,
    description: "Elegant seating crafted for exclusive dining rooms. Formulated with dynamic curved wire backing finished in gorgeous roseate gold, layered with custom performance matte black leather cushions.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewsCount: 51,
    features: [
      "Heavy duty curved alloy structural frame",
      "Stain-resistant genuine aniline top-grain leather",
      "Hand-polished mirror gold finish",
      "Stackable up to 4 chairs for modular storage"
    ],
    specs: {
      "Dimensions": "W: 52cm, D: 56cm, H: 82cm",
      "Weight": "7.2 kg",
      "Seat Height": "46cm",
      "Leather Type": "Full Grain Italian"
    },
    materials: [
      "Mirror Gold Steel",
      "Satin Rose Gold Steel",
      "Matte Black Carbon Steel"
    ],
    colors: [
      { name: "Aniline Noir", hex: "#111111" },
      { name: "Saddle Tan", hex: "#8b5a2b" }
    ]
  },
  {
    id: "prod-11",
    name: "Auric Royal Throne Accent Chair",
    category: "Chairs",
    price: 1550,
    originalPrice: 7750,
    discountPercentage: 80,
    description: "An outstanding conversation starter. This high-back armchair is styled with a hand-carved gilded mahogany backrest, custom-tufted midnight velvet upholstery, and gold foil rivet accents.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 38,
    features: [
      "Solid Mahogany wood structural core",
      "100% hand-applied antiqued gold leaf foil",
      "Deep button-tufted diamond patterned backing",
      "Includes matching cylindrical velvet lumbar pillow"
    ],
    specs: {
      "Dimensions": "W: 88cm, D: 90cm, H: 110cm",
      "Weight": "28.5 kg",
      "Foam Class": "High Resilience Class-4",
      "Max Capacity": "180 kg"
    },
    materials: [
      "Midnight Velvet & Gold Leaf",
      "Charcoal Velvet & Silver Leaf"
    ],
    colors: [
      { name: "Royal Midnight", hex: "#141b29" },
      { name: "Royal Obsidian", hex: "#090909" }
    ]
  },
  {
    id: "prod-3",
    name: "Aero Lux Golden Pendant Lamp",
    category: "Lamps",
    price: 450,
    originalPrice: 2250,
    discountPercentage: 80,
    description: "An elegant, floating sculpture of light. The Aero Lux casts a warm, soothing ambient glow through a dynamic gold leaf ring, creating exquisite soft patterns across dark-themed rooms.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewsCount: 112,
    features: [
      "Dimmable integrated LED strip (2700K warm yellow-gold glow)",
      "Height adjustable steel suspension cable up to 1.8m",
      "Textured premium gold-leaf foil interior lining",
      "Matte-black aluminum canopy compatible with sloped ceilings"
    ],
    specs: {
      "Diameter": "45cm Ring",
      "Light Source": "Integrated Warm LED, 32W",
      "Lumens": "1800 lm (Fully Dimmable)",
      "Lifespan": "50,000 hours"
    },
    materials: [
      "Gold Leaf Interior & Matte Black Rim",
      "Satin Brass & Opal Acrylic",
      "Polished Copper & Matte White"
    ],
    colors: [
      { name: "Auric Gold", hex: "#c5973c" },
      { name: "Matte Black", hex: "#121212" },
      { name: "Polished Copper", hex: "#b87333" }
    ]
  },
  {
    id: "prod-12",
    name: "Lumina Gilded Arching Floor Lamp",
    category: "Lamps",
    price: 580,
    originalPrice: 2900,
    discountPercentage: 80,
    description: "Cast an overarching beam of sophisticated warm amber across your seating sections. Features a heavy marble-anchored base and a sweeping curved brass neck holding a luxury woven mesh gold shade.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 79,
    features: [
      "Nero Marquina solid black marble pedestal weight (18kg)",
      "Smooth step-on dimming floor button switch",
      "Double insulated structural brass arching tube",
      "Interchangeable gold mesh / frosted opal globes included"
    ],
    specs: {
      "Arch Reach": "140cm",
      "Max Height": "210cm",
      "Base Weight": "18 kg",
      "Holder Class": "E26 Ceramic (60W Max)"
    },
    materials: [
      "Polished Brass & Black Marble",
      "Satin Silver & White Marble"
    ],
    colors: [
      { name: "Marquina Gold", hex: "#dfb954" },
      { name: "Satin Noir", hex: "#1a1a1a" }
    ]
  },
  {
    id: "prod-13",
    name: "Soleil Brass Table Luminary",
    category: "Lamps",
    price: 310,
    originalPrice: 1550,
    discountPercentage: 80,
    description: "A compact sculptural lamp for console desks and nightstands. Emits beautiful, highly patterned starburst shadows through a hand-perforated brass sheet cylinder.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviewsCount: 44,
    features: [
      "Hand-perforated continuous steel cylinder",
      "Includes vintage spiral amber-glass Edison bulb (4W LED)",
      "Anti-skid velvet underlay base prevents furniture scratch",
      "Luxury twisted fabric brown power cord (2m length)"
    ],
    specs: {
      "Dimensions": "Dia: 18cm, H: 38cm",
      "Weight": "2.4 kg",
      "Plug Type": "US Standard polarized-2pin",
      "Bulb Included": "4W Amber T45 LED"
    },
    materials: [
      "Satin Gold Pierced Brass",
      "Matte Black Pierced Carbon"
    ],
    colors: [
      { name: "Auric Brass", hex: "#c5973c" },
      { name: "Slate Charcoal", hex: "#222222" }
    ]
  },
  {
    id: "prod-4",
    name: "Midas Archway Full-Length Mirror",
    category: "Mirrors",
    price: 699,
    originalPrice: 3495,
    discountPercentage: 80,
    description: "Inject spaciousness and opulent light into your entryways. A handcrafted metal arch styled with an antique gold trim framing an ultra-clear, shatter-proof HD float mirror glass.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 165,
    features: [
      "Ultra-high definition distortion-free copper-free silver glass",
      "Sturdy integrated wooden backboard with pre-installed hooks",
      "Textured heavy solid iron frame with luxury antique gold wash",
      "Includes premium floor-mounting kickstand and wall anchors"
    ],
    specs: {
      "Dimensions": "W: 80cm, H: 180cm",
      "Weight": "22 kg",
      "Glass Thickness": "5mm",
      "Frame Width": "3cm"
    },
    materials: [
      "Textured Antique Gold",
      "Sandblasted Charcoal Black",
      "Polished Copper Rose"
    ],
    colors: [
      { name: "Antique Gold", hex: "#a77a2d" },
      { name: "Satin Obsidian", hex: "#1a1a1a" },
      { name: "Roseate Gold", hex: "#b76e79" }
    ]
  },
  {
    id: "prod-14",
    name: "Astrid Sunburst Golden Wall Mirror",
    category: "Mirrors",
    price: 399,
    originalPrice: 1995,
    discountPercentage: 80,
    description: "An iconic art-deco wall adornment. Embellished with alternating lengths of geometric gold iron spokes surrounding an HD glass core, evoking a radiant celestial sunburst.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 92,
    features: [
      "Over 120 individually welded high-tensile structural rays",
      "Pre-mounted safe centered keyhole hanger anchor",
      "High-grade electroplated satin gold corrosion-resistant coating",
      "Ideal for centering above fireplaces or credenza consoles"
    ],
    specs: {
      "Diameter": "85cm Overall, 30cm Glass",
      "Weight": "4.6 kg",
      "Backboard": "Medium-Density Fibreboard (MDF)",
      "Mirror Class": "HD Distortion-Free Silvered"
    },
    materials: [
      "Electroplated Gilded Sunray",
      "Aged Silver Antique Sunray"
    ],
    colors: [
      { name: "Gilded Amber", hex: "#d6b35d" },
      { name: "Aged Silver", hex: "#b2b2b2" }
    ]
  },
  {
    id: "prod-15",
    name: "Sovereign Gilded Hexagonal Mirror",
    category: "Mirrors",
    price: 290,
    originalPrice: 1450,
    discountPercentage: 80,
    description: "Inject modern geometry into dull corridors. Features a sleek, heavy hexagonal metal frame finished in deep satin brass gold, complete with an elegant suspended gold leather strap.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewsCount: 39,
    features: [
      "Suspended by adjustable genuine leather mounting belt",
      "Includes a solid matching brass decorative wall anchor peg",
      "Waterproof backboard suitable for luxury powder rooms",
      "Modern minimalist profile with slim 1.5cm metal bezel"
    ],
    specs: {
      "Width": "60cm Vertex to Vertex",
      "Height": "52cm",
      "Strap Length": "45cm Adjustable",
      "Frame Bezel": "1.5cm Thickness"
    },
    materials: [
      "Satin Brass & Gold Strap",
      "Noir Black & Charcoal Strap"
    ],
    colors: [
      { name: "Gilded Brass", hex: "#c5973c" },
      { name: "Midnight Black", hex: "#141414" }
    ]
  },
  {
    id: "prod-5",
    name: "Golden Meridian Abstract Canvas Art",
    category: "Paintings",
    price: 380,
    originalPrice: 1900,
    discountPercentage: 80,
    description: "An impactful visual conversation piece. Hand-painted acrylic gold foil waves set against an atmospheric dark obsidian and marble background, canvas stretched over sturdy pinewood.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviewsCount: 81,
    features: [
      "100% hand-applied 24K gold foil flakes",
      "Premium heavy-duty primed linen canvas",
      "Moisture-proof, non-fading archival pigment inks",
      "Encased in a floating modern metallic gold PS frame"
    ],
    specs: {
      "Dimensions": "W: 100cm, H: 100cm, Depth: 4cm",
      "Weight": "4.8 kg",
      "Frame Style": "Minimal Floating Frame",
      "Medium": "Acrylic & Metallic Leaf"
    },
    materials: [
      "Framed Gold Foil",
      "Framed Black Onyx Matte",
      "Framed Copper Leaf"
    ],
    colors: [
      { name: "Gold Foil", hex: "#dfb954" },
      { name: "Deep Charcoal", hex: "#1f1f1f" }
    ]
  },
  {
    id: "prod-16",
    name: "Gilded Cosmos Triptych Canvas",
    category: "Paintings",
    price: 520,
    originalPrice: 2600,
    discountPercentage: 80,
    description: "A monumental three-panel set capturing cosmic nebulae. Swirling golden metallic paint and stardust glitter hand-textured across deep navy and slate-black linen canvases.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 57,
    features: [
      "Full 3-panel matching triptych configuration",
      "Subtle three-dimensional paint texture ridges",
      "Solid kiln-dried Canadian pine inner frame structure",
      "Includes multi-point alignment templates for easy hanging"
    ],
    specs: {
      "Panel Dimension": "W: 45cm, H: 90cm (Each)",
      "Total Combined Width": "145cm (With spacing)",
      "Frame Type": "Frameless Gallery Wrap",
      "Texture Method": "Palette Knife Acrylic"
    },
    materials: [
      "Cosmos Gold Foil Triptych",
      "Cosmos Silver Foil Triptych"
    ],
    colors: [
      { name: "Gilded Celestial", hex: "#dfb954" },
      { name: "Midnight Navy", hex: "#0b1528" }
    ]
  },
  {
    id: "prod-17",
    name: "Ethereal Sand Dunes Gold Foil Painting",
    category: "Paintings",
    price: 299,
    originalPrice: 1495,
    discountPercentage: 80,
    description: "Minimalist serene elegance. Features organic horizontal ridges resembling shifting desert sand dunes, coated with shimmering gold glitter powder and layered on concrete matte black.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviewsCount: 33,
    features: [
      "Rich micro-textured sand-mortar texture mix",
      "Stretched on warp-resistant engineered backboards",
      "Sealed with high-grade UV protective archival sealant",
      "Complemented by elegant brushed aluminum shadowbox frame"
    ],
    specs: {
      "Dimensions": "W: 70cm, H: 50cm, Depth: 3.5cm",
      "Weight": "2.8 kg",
      "Frame Border": "1.2cm Floating Rim",
      "Base Paint": "Hypoallergenic Low-VOC Acrylic"
    },
    materials: [
      "Desert Gold Sandstone",
      "Desert Rose Gold Sandstone"
    ],
    colors: [
      { name: "Dune Gold", hex: "#c5973c" },
      { name: "Concrete Noir", hex: "#181818" }
    ]
  },
  {
    id: "prod-6",
    name: "Aethelgard Modernist Golden Wall Clock",
    category: "Wall Clocks",
    price: 240,
    originalPrice: 1200,
    discountPercentage: 80,
    description: "Where minimalist geometry meets timeless precision. Features a thin, sweeping concentric gold rim and ultra-quiet silent sweeping copper needles mounted on a polished slate core.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 72,
    features: [
      "Premium silent sweep quartz movement (no annoying clicking)",
      "High-tensile CNC-machined structural outer iron hoop",
      "Real gold electroplated finish with micro-lacquer protective coating",
      "Requires only 1 AA battery (highly energy efficient)"
    ],
    specs: {
      "Diameter": "60cm",
      "Depth": "4.5cm",
      "Weight": "2.1 kg",
      "Battery Type": "1x AA Carbon Zinc (Recommended)"
    },
    materials: [
      "Anodized Satin Gold Steel",
      "Gloss Black Obsidian Ring"
    ],
    colors: [
      { name: "Gilded Satin", hex: "#d6b35d" },
      { name: "Noir Black", hex: "#0d0d0d" }
    ]
  },
  {
    id: "prod-18",
    name: "Zephyr Luxury Roman Gilded Clock",
    category: "Wall Clocks",
    price: 220,
    originalPrice: 1100,
    discountPercentage: 80,
    description: "Classic roman numerals reimagined in lightweight hollow metal art. Framed in elegant open-back circular carbon tubes finished in shimmering antique gold wash.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewsCount: 41,
    features: [
      "Classic skeletal Roman numeral design",
      "Reinforced heavy-duty integrated wall hook hanging bracket",
      "Taiwan-imported ultra-reliable quiet-gear step motor",
      "Staggering raw textured gold finish creates beautiful shadows"
    ],
    specs: {
      "Diameter": "50cm",
      "Weight": "1.7 kg",
      "Needle Material": "Refined Copper Alloy",
      "Backing Type": "Skeleton Hollow Frame"
    },
    materials: [
      "Washed Antique Gold",
      "Brushed Steel Bronze"
    ],
    colors: [
      { name: "Antique Gilded", hex: "#a77a2d" },
      { name: "Satin Bronze", hex: "#614e3f" }
    ]
  },
  {
    id: "prod-19",
    name: "Chronos Obsidian Gold Pendulum Clock",
    category: "Wall Clocks",
    price: 350,
    originalPrice: 1750,
    discountPercentage: 80,
    description: "A gorgeous modern pendulum clock. Composed of an elegant rectangular real black slate slab with an off-center gold wire ring dial and a quietly swaying vertical golden pendulum rod.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 29,
    features: [
      "Swaying vertical gold pendulum with noiseless electromagnetic loop",
      "Solid hand-sliced mountain-grade black slate slab body",
      "Real copper hour markings and indicator needles",
      "Dual battery compartment separates clock and sway functions"
    ],
    specs: {
      "Dimensions": "W: 24cm, H: 65cm, D: 6cm",
      "Weight": "4.2 kg",
      "Slate Thickness": "12mm Natural Split",
      "Batteries Required": "2x AA Alkaline"
    },
    materials: [
      "Obsidian Slate & Brass Pendulum",
      "White Travertine & Rose Gold Pendulum"
    ],
    colors: [
      { name: "Onyx Slate", hex: "#151515" },
      { name: "Polished Auric", hex: "#c5973c" }
    ]
  },
  {
    id: "prod-7",
    name: "Elysium Gold-Rail Floating Shelves (Set of 3)",
    category: "Wall Shelfs",
    price: 190,
    originalPrice: 950,
    discountPercentage: 80,
    description: "Organize your curated ornaments on structured luxury. Features solid matte black roasted ash wood shelves bounded by secure, elegant geometric gold railings.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewsCount: 55,
    features: [
      "Includes 3 sizes (Small, Medium, Large) for dynamic bento placement",
      "Heavy load-bearing industrial brackets finished in brass gold",
      "Natural premium roasted wood shelves with beautiful exposed grains",
      "Front guardrails prevent perfume bottles or art pieces from tipping over"
    ],
    specs: {
      "Dimensions": "L: 30cm/40cm/50cm, Depth: 15cm",
      "Max Load Capacity": "12 kg per shelf",
      "Wood Species": "American Roasted Ash",
      "Brackets": "Premium Electroplated Brass Iron"
    },
    materials: [
      "Roasted Ash & Brushed Gold Rail",
      "Ebonized Oak & Midnight Rail"
    ],
    colors: [
      { name: "Roasted Ash", hex: "#3e2723" },
      { name: "Gilded Brass", hex: "#c5973c" }
    ]
  },
  {
    id: "prod-20",
    name: "Pyramid Gilded Hexagon Wall Shelves",
    category: "Wall Shelfs",
    price: 170,
    originalPrice: 850,
    discountPercentage: 80,
    description: "A gorgeous set of three honeycomb interlocking wall storage nodes. Features high-tensile brass wireframes enclosing solid ebonized cedar wooden planks.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviewsCount: 49,
    features: [
      "Dynamic honeycomb interlocking wall montage structure",
      "Lightweight yet structurally reinforced steel wires",
      "Sanded organic cedarwood with water-resistant oil seal",
      "Rear hidden drop-in screw anchors for an invisible floating appearance"
    ],
    specs: {
      "Hexagon Size": "W: 35cm, H: 30cm, D: 12cm",
      "Total Node Count": "3 Separate Interlocking Hexagons",
      "Weight": "3.1 kg (Total)",
      "Metal Tube Gauge": "5mm Solid Carbon Wire"
    },
    materials: [
      "Satin Gold Honeycomb Cedar",
      "Black Anodized Honeycomb Pine"
    ],
    colors: [
      { name: "Auric Wire", hex: "#c5973c" },
      { name: "Ebonized Carbon", hex: "#1f1f1f" }
    ]
  },
  {
    id: "prod-21",
    name: "Midas Corner Floating Glass Ledge",
    category: "Wall Shelfs",
    price: 140,
    originalPrice: 700,
    discountPercentage: 80,
    description: "Optimise tight room corners with opulent glass ledges. Features heavy 8mm toughened gold-fumed smoked glass plates anchored inside geometric brass jaws.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 31,
    features: [
      "Heavy duty gold-alloy clamping jaw mounts",
      "Gold-fumed tinted tempered shatter-proof glass plates",
      "Includes precise laser spirit level and mounting drill guides",
      "Provides luxurious aesthetic storage for perfumes or small crystals"
    ],
    specs: {
      "Glass Radius": "25cm Quarter-Circle",
      "Glass Thickness": "8mm Toughened Glass",
      "Weight Capacity": "8.5 kg",
      "Mount Screws": "Heavy Duty Steel anchors"
    },
    materials: [
      "Smoked Gold Tempered Glass & Brass",
      "Clear Glass & Black Chrome"
    ],
    colors: [
      { name: "Smoked Auric", hex: "#d6b35d" },
      { name: "Satin Brass Peg", hex: "#a77a2d" }
    ]
  }
];

export const TIME_SLOTS = [
  "09:00 AM - 10:30 AM",
  "11:00 AM - 12:30 PM",
  "02:00 PM - 03:30 PM",
  "04:00 PM - 05:30 PM",
  "06:00 PM - 07:30 PM"
];

export const DESIGNERS = [
  { name: "Aurelia Sterling", specialty: "Black & Gold Opulence, Classic Art Deco" },
  { name: "Marcus Obsidian", specialty: "Minimalist Matte Black & High Contrast Textures" },
  { name: "Evelyn Gilded", specialty: "Lighting and Reflective Metallics Integration" }
];
