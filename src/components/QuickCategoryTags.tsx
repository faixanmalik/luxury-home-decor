import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, Sparkles, Compass } from "lucide-react";

interface TagItem {
  name: string;
  category: string;
  search: string;
  image: string;
}

const TAGS: TagItem[] = [
  // Row 1 equivalents
  {
    name: "Tables",
    category: "Tables",
    search: "",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Coffee Tables",
    category: "Tables",
    search: "Coffee",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Center Tables",
    category: "Tables",
    search: "Center",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Chairs",
    category: "Chairs",
    search: "",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Lounge Chairs",
    category: "Chairs",
    search: "Lounge",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Floor Temples",
    category: "Wall Shelfs",
    search: "Temple",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Lamps",
    category: "Lamps",
    search: "",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Floor Lamps",
    category: "Lamps",
    search: "Floor",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Mirrors",
    category: "Mirrors",
    search: "",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Ceiling Lights",
    category: "Lamps",
    search: "Ceiling",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Shoe Rack",
    category: "Wall Shelfs",
    search: "Rack",
    image: "https://images.unsplash.com/photo-1532372320978-9b4d8a3a8245?auto=format&fit=crop&w=80&q=80"
  },
  // Row 2 equivalents
  {
    name: "Home Temples",
    category: "Wall Shelfs",
    search: "Temple",
    image: "https://images.unsplash.com/photo-1551216223-37c8d1dbec5c?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Horse Paintings",
    category: "Paintings",
    search: "Horse",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Console Table",
    category: "Tables",
    search: "Console",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Office Chairs",
    category: "Chairs",
    search: "Office",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Side Tables",
    category: "Tables",
    search: "Side",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "3D Wall Art",
    category: "Paintings",
    search: "3D",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Wall Clocks",
    category: "Wall Clocks",
    search: "",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Neon Lights",
    category: "Lamps",
    search: "Neon",
    image: "https://images.unsplash.com/photo-1542728928-1413eeae4d92?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Ottoman Chair",
    category: "Chairs",
    search: "Ottoman",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=80&q=80"
  },
  // Row 3 equivalents
  {
    name: "Vanity Mirror",
    category: "Mirrors",
    search: "Vanity",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Wooden Backlit",
    category: "Wall Clocks",
    search: "Backlit",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Door Temple",
    category: "Wall Shelfs",
    search: "Temple",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Bar Trolley",
    category: "Tables",
    search: "Trolley",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Acrylic Glass Painting",
    category: "Paintings",
    search: "Acrylic",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Wall Plates",
    category: "Paintings",
    search: "Plate",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Bathroom Cabinet",
    category: "Wall Shelfs",
    search: "Cabinet",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=80&q=80"
  }
];

interface QuickCategoryTagsProps {
  onSearch: (query: string) => void;
  onFilter: (category: string, search: string) => void;
}

export default function QuickCategoryTags({ onSearch, onFilter }: QuickCategoryTagsProps) {
  const [typedQuery, setTypedQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(typedQuery);
    // Smooth scroll to catalog
    const catalog = document.getElementById("catalog-section");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTagClick = (tag: TagItem) => {
    onFilter(tag.category, tag.search);
    setTypedQuery(tag.name);
    // Smooth scroll to catalog
    const catalog = document.getElementById("catalog-section");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#090909] text-white relative border-b border-neutral-900/80 overflow-hidden">
      {/* Decorative luxury radial glow backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* SEARCH BAR (Matching the user's uploaded image exactly but styled in Royal Theme) */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearchSubmit} className="relative group">
            {/* Soft gold drop shadow on focus */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-400/15 rounded-full blur-md opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
            
            <input
              type="text"
              value={typedQuery}
              onChange={(e) => setTypedQuery(e.target.value)}
              placeholder="Search best sellers, luxury tables, decor..."
              className="w-full bg-neutral-900/90 hover:bg-neutral-900 text-white placeholder-neutral-500 pl-7 pr-16 py-4.5 rounded-full border border-neutral-800 focus:border-gold-500/60 focus:outline-none font-sans text-sm tracking-wide transition-all shadow-xl"
            />
            
            <button
              type="submit"
              className="absolute right-4.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 hover:brightness-110 text-neutral-950 transition-all shadow-md cursor-pointer flex items-center justify-center"
              aria-label="Submit Search"
            >
              <Search className="w-4 h-4 font-bold" />
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <Compass className="w-3 h-3 text-gold-500 animate-spin-slow" />
            <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-medium">
              Click any capsule tag below to filter instantly
            </span>
          </div>
        </div>

        {/* CAPSULE FLOW PILLS GRID (Responsive wrap, structured cleanly like the screenshot) */}
        <div className="flex flex-wrap justify-center gap-3.5 max-w-6xl mx-auto px-2">
          {TAGS.map((tag, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
              onClick={() => handleTagClick(tag)}
              className="flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-neutral-100 hover:bg-gold-50 text-neutral-900 border border-gold-400/25 hover:border-gold-500/80 transition-all duration-300 shadow-md hover:shadow-gold-500/10 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 group"
            >
              {/* Circular Thumbnail with fine gold ring */}
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gold-500/20 shadow-inner shrink-0 bg-neutral-200">
                <img
                  src={tag.image}
                  alt={tag.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Tag Name Text */}
              <span className="font-sans text-xs font-semibold tracking-wide text-neutral-800 group-hover:text-neutral-950">
                {tag.name}
              </span>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
