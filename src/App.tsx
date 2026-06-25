import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoBanner from "./components/PromoBanner";
import QuickCategoryTags from "./components/QuickCategoryTags";
import HappyCustomers from "./components/HappyCustomers";
import FeaturedIn from "./components/FeaturedIn";
import Footer from "./components/Footer";
import ProductCatalog from "./components/ProductCatalog";
import PartialPaymentBanner from "./components/PartialPaymentBanner";
import InteractiveLamps from "./components/InteractiveLamps";
import PopularPicks from "./components/PopularPicks";
import InteractiveVisualizer from "./components/InteractiveVisualizer";
import DesignConsultModal from "./components/DesignConsultModal";
import CartDrawer from "./components/CartDrawer";
import { Product, CartItem } from "./types";
import { Sparkles, Mail, Check, ShieldCheck, Heart, Instagram, Facebook, Compass } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Newsletter subscription simulation
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Cart operations
  const handleAddToCart = (
    product: Product,
    quantity: number,
    material: string,
    color: { name: string; hex: string }
  ) => {
    // Generate a unique instance ID for this specific combination of optionals
    const itemInstanceId = `${product.id}-${material.replace(/\s+/g, "").toLowerCase()}-${color.name.toLowerCase()}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === itemInstanceId);
      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [
          ...prevCart,
          {
            id: itemInstanceId,
            product,
            quantity,
            selectedMaterial: material,
            selectedColor: color,
          },
        ];
      }
    });
  };

  const handleUpdateQty = (itemId: string, newQty: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Scroll to catalog helper
  const handleScrollToCatalog = () => {
    const catalogSection = document.getElementById("catalog-section");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 5000);
  };

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-neutral-200 overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* Top Banner Alert / Ticker */}
      <div className="bg-gradient-to-r from-gold-950/80 via-gold-800/90 to-gold-950/80 border-b border-gold-700/30 py-2.5 text-center px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4.5 h-4.5 text-gold-300 animate-pulse shrink-0" />
          <span className="font-sans text-[10px] tracking-[0.25em] text-white font-bold uppercase">
            MONSOON ROYALTY: REDEEM AN EXTRA 10% OFF EXISTING 80% SAVINGS WITH COUPON CODE:{" "}
            <span className="text-gold-200 font-extrabold underline decoration-gold-400 decoration-2">
              GOLDEN80
            </span>
          </span>
        </div>
      </div>

      {/* Navbar Integration */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      <Hero
        onShopNowClick={handleScrollToCatalog}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Layout */}
      <main>
        
        {/* Curated Product Store */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
        />

        {/* Partial Payment Schemes & Trust Indicators */}
        <PartialPaymentBanner />

        {/* Premium Interactive Lamps with Realtime Day/Night and Illumination Switch */}
        <InteractiveLamps />

        {/* Popular Picks interactive category layout with specific detail cards */}
        <PopularPicks />

        {/* Promotional Sale Billboard Banner */}
        <PromoBanner onShopNowClick={handleScrollToCatalog} />

        {/* Quick Staggered Category Capsule Tags with Center Search Bar */}
        <QuickCategoryTags
          onSearch={(query) => {
            setSearchQuery(query);
            setActiveCategory("All");
          }}
          onFilter={(category, search) => {
            setActiveCategory(category);
            setSearchQuery(search);
          }}
        />

        {/* Happy Customers Testimonials Section with horizontal sliding reviews and product indicators */}
        <HappyCustomers />

        {/* Dynamic Interactive Gilded Room Visualizer */}
        <InteractiveVisualizer />

        {/* Value Proposition Segment */}
        <section id="trust-banners" className="py-20 bg-black border-t border-b border-neutral-900/60 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-neutral-950 to-black border border-neutral-900/80 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gold-950/30 border border-gold-700/40 flex items-center justify-center mb-4 text-gold-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">Lifetime Structural Craft</h3>
                <p className="font-sans text-neutral-400 text-xs font-light leading-relaxed">
                  Every welded bracket, timber alignment, and hand-applied gold foil flake is backed by our lifetime structural replacement pledge.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-neutral-950 to-black border border-neutral-900/80 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gold-950/30 border border-gold-700/40 flex items-center justify-center mb-4 text-gold-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">White-Glove VIP Delivery</h3>
                <p className="font-sans text-neutral-400 text-xs font-light leading-relaxed">
                  Avoid transport stress. Our professional logistics unit uncrates, assembles, positions, and clears all packing materials safely.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-neutral-950 to-black border border-neutral-900/80 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gold-950/30 border border-gold-700/40 flex items-center justify-center mb-4 text-gold-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">Complimentary Curations</h3>
                <p className="font-sans text-neutral-400 text-xs font-light leading-relaxed">
                  Unsure of color compatibility? Plan a video-link advisory with our certified curators to custom coordinate your space specs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Infinite Horizontal Logo Marquee Section representing publications */}
        <FeaturedIn />

      </main>

      {/* Elegant Black & Gold Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Video Consultation Booking Modal */}
      <DesignConsultModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}
