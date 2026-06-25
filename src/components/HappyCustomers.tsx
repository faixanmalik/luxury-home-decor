import React, { useRef } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, ShoppingBag, ArrowRight } from "lucide-react";

interface TestimonialItem {
  id: string;
  customerName: string;
  rating: number;
  headline: string;
  feedback: string;
  homePhoto: string; // Customer photo of the item in their house
  productName: string;
  productImage: string; // Professional catalog thumbnail
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    customerName: "Vir Kapoor",
    rating: 5,
    headline: "Perfect console and I love this",
    feedback: "Happy with the purchase. Packaging was gold standard and extreme value for money. Brings an premium art-gallery feel straight into my living room corridor.",
    homePhoto: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80",
    productName: "Classic and Royal Elephant with Golden Tusks Floating Canvas Wall Painting",
    productImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "review-2",
    customerName: "Rohan Verma",
    rating: 5,
    headline: "So happy with it",
    feedback: "It looks absolutely amazing, and I must say, I am truly impressed with the overall hand-gilded premium outcome. The velvet is plush and highly comfortable.",
    homePhoto: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=300&q=80",
    productName: "Shell Motif Luxury Sky Blue Velvet Comfy Lounge Chair",
    productImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "review-3",
    customerName: "Ananya Rathi",
    rating: 5,
    headline: "Love it! Just perfect!",
    feedback: "This is a fantastic product with exceptional quality! I'm truly impressed with its durability, frame sturdiness and how gracefully the glass details catch the sunset light.",
    homePhoto: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&q=80",
    productName: "Seven Horses Running at Sunrise Premium Canvas Wall Painting",
    productImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: "review-4",
    customerName: "Meera Sen",
    rating: 5,
    headline: "An absolute masterpiece!",
    feedback: "The warm ambient glow transforms our lounge entirely at night. Guests never fail to ask where we got this table lamp. Beautiful solid brass base detailing.",
    homePhoto: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&q=80",
    productName: "Aurum Geo Table Light with Touch Dimmer Switch",
    productImage: "https://images.unsplash.com/photo-1542728928-1413eeae4d92?auto=format&fit=crop&w=100&q=80"
  }
];

export default function HappyCustomers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="happy-customers" className="py-20 bg-[#070707] text-white relative overflow-hidden border-b border-neutral-900">
      {/* Background design elements to maintain the luxury premium gold scheme */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="font-sans text-xs tracking-[0.4em] text-gold-500 uppercase font-semibold mb-3 block animate-pulse">
              VOICES OF LUXURY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              Happy Customers
            </h2>
            <div className="w-20 h-[1px] bg-gradient-to-r from-gold-600 to-transparent mt-3" />
          </div>

          {/* Navigation Controls matched to the image's slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-gold-400 hover:border-gold-500/30 transition-all cursor-pointer shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-gold-400 hover:border-gold-500/30 transition-all cursor-pointer shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TESTIMONIALS SLIDER */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8"
          style={{ scrollbarWidth: "none" }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[48%] lg:w-[32.5%] shrink-0 snap-start snap-always"
            >
              {/* Luxury Gilded Obsidian Card */}
              <div className="h-full bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-gold-500/20 transition-all duration-300">
                
                {/* Micro reflection top accent */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
                
                <div>
                  {/* Testimonial Core Row 1: Name, Rating & Customer Home Photo inside house */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="text-left">
                      <h3 className="font-serif text-lg font-medium text-white group-hover:text-gold-300 transition-colors">
                        {item.customerName}
                      </h3>
                      
                      {/* 5-Star Row */}
                      <div className="flex items-center gap-1 mt-1.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                        ))}
                      </div>
                    </div>

                    {/* Customer Real Home Setup Snapshot */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-neutral-800 shadow-lg shrink-0 relative group-hover:border-gold-500/30 transition-all">
                      <img
                        src={item.homePhoto}
                        alt="Customer home setup review"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>

                  {/* Headline & Feedback */}
                  <div className="text-left mb-6">
                    <div className="flex gap-2">
                      <Quote className="w-4 h-4 text-gold-500/30 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-sans text-sm font-bold text-neutral-200 leading-snug tracking-wide mb-2">
                          {item.headline}
                        </h4>
                        <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                          {item.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM ROW: Reference item purchased from store */}
                <div className="border-t border-neutral-800/80 pt-4.5 mt-auto flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0 flex items-center justify-center p-0.5">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-[9px] text-gold-500 font-extrabold uppercase tracking-widest">
                      <ShoppingBag className="w-3 h-3" />
                      <span>Verified Purchase</span>
                    </div>
                    <span className="font-sans text-[11px] text-neutral-400 font-medium truncate block mt-0.5 group-hover:text-neutral-300 transition-colors">
                      {item.productName}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CUSTOM DELIBERATE SCROLL BAR (Matching the user's provided screen scroll indicator) */}
        <div className="mt-4 max-w-lg mx-auto bg-neutral-900/60 h-1.5 rounded-full overflow-hidden border border-neutral-800/40 relative">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
            style={{ width: "35%" }}
            animate={{
              x: ["0%", "185%", "0%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

      </div>
    </section>
  );
}
