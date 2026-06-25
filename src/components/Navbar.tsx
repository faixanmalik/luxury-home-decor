import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Menu, X, Sparkles, PhoneCall, Compass } from "lucide-react";
import { CartItem } from "../types";

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenConsultation: () => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Navbar({
  cart,
  onOpenCart,
  onOpenConsultation,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    { name: "Paintings", category: "Paintings" },
    { name: "Tables", category: "Tables" },
    { name: "Mirrors", category: "Mirrors" },
    { name: "Chairs", category: "Chairs" },
    { name: "Wall Clocks", category: "Wall Clocks" },
    { name: "Lamps", category: "Lamps" },
    { name: "Wall Shelfs", category: "Wall Shelfs" },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0b0b0b]/95 backdrop-blur-md border-b border-gold-900/40 py-3 shadow-lg shadow-black/60"
          : "bg-gradient-to-b from-black via-black/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onSelectCategory("All")}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold-500 bg-black/80 shadow-inner">
              <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
              <div className="absolute -inset-1 rounded-full border border-gold-500/20 blur-[2px]" />
            </div>
            <div className="flex flex-row items-baseline gap-2.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-gold-200 whitespace-nowrap">
                Aurum Luxe
              </span>
              <span className="font-sans text-[9px] tracking-[0.2em] text-gold-500 uppercase font-semibold whitespace-nowrap hidden sm:inline">
                Gold Edition
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              id="nav-all"
              onClick={() => {
                onSelectCategory("All");
                const catalogEl = document.getElementById("catalog-section");
                if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase font-sans font-medium transition-colors duration-300 ${
                activeCategory === "All"
                  ? "text-gold-400 border-b border-gold-400"
                  : "text-neutral-400 hover:text-gold-300"
              }`}
            >
              All Collection
            </button>
            {menuItems.map((item) => (
              <button
                key={item.name}
                id={`nav-${item.category.toLowerCase().replace(" ", "-")}`}
                onClick={() => {
                  onSelectCategory(item.category);
                  const catalogEl = document.getElementById("catalog-section");
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase font-sans font-medium transition-colors duration-300 ${
                  activeCategory === item.category
                    ? "text-gold-400 border-b border-gold-400"
                    : "text-neutral-400 hover:text-gold-300"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Live Search */}
            <div className="relative flex items-center">
              <button
                id="search-toggle-btn"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                className="p-2 text-neutral-400 hover:text-gold-400 transition-colors"
                aria-label="Search items"
              >
                <Search className="w-5 h-5" />
              </button>
              {isSearchVisible && (
                <div className="absolute right-0 top-12 bg-[#121212] border border-gold-700/50 p-2 rounded-lg shadow-xl w-60 sm:w-72 flex items-center gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search gold decor..."
                    className="w-full bg-black text-white text-xs px-3 py-2 rounded border border-neutral-800 focus:outline-none focus:border-gold-500 placeholder-neutral-500 font-sans"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => onSearchChange("")}
                      className="text-neutral-500 hover:text-white text-xs px-1"
                    >
                      Clear
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Design Consultation Trigger */}
            <button
              id="consult-nav-btn"
              onClick={onOpenConsultation}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-gold-700 to-gold-500 text-black text-xs font-semibold uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-300 shadow-lg shadow-gold-950/40"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Book Consult
            </button>

            {/* User Profile Info */}
            <div className="relative group hidden sm:block">
              <button className="p-2 text-neutral-400 hover:text-gold-400 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <div className="absolute right-0 top-10 w-48 bg-[#121212] border border-gold-900/60 p-3 rounded-lg shadow-2xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <p className="text-[10px] uppercase tracking-wider text-gold-500 font-semibold mb-1">Welcome</p>
                <p className="text-xs text-neutral-300 font-sans truncate font-medium">irfanmalik0035@gmail.com</p>
                <div className="border-t border-neutral-800 my-2" />
                <p className="text-[10px] text-neutral-400 font-sans">Royal Loyalty Points: <span className="text-gold-400 font-bold">1,250</span></p>
              </div>
            </div>

            {/* Shopping Bag Button */}
            <button
              id="cart-drawer-toggle"
              onClick={onOpenCart}
              className="relative p-2 text-neutral-400 hover:text-gold-400 transition-colors"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[9px] font-bold leading-none text-black bg-gold-400 rounded-full shadow-md animate-bounce">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-gold-400 transition-colors lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0c] border-b border-gold-900/40 px-4 py-4 space-y-3 animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => {
                onSelectCategory("All");
                setIsMobileMenuOpen(false);
                const catalogEl = document.getElementById("catalog-section");
                if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-left px-3 py-2 text-xs tracking-wider uppercase font-sans font-medium rounded ${
                activeCategory === "All" ? "text-gold-400 bg-gold-950/20" : "text-neutral-400"
              }`}
            >
              All Collection
            </button>
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onSelectCategory(item.category);
                  setIsMobileMenuOpen(false);
                  const catalogEl = document.getElementById("catalog-section");
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-left px-3 py-2 text-xs tracking-wider uppercase font-sans font-medium rounded ${
                  activeCategory === item.category ? "text-gold-400 bg-gold-950/20" : "text-neutral-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="border-t border-gold-950/40 pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-gold-700 to-gold-500 text-black text-xs font-semibold uppercase tracking-wider rounded-md"
            >
              <PhoneCall className="w-4 h-4" />
              Book Consult
            </button>
            <div className="text-center text-[10px] text-neutral-500 py-1">
              Logged in as irfanmalik0035@gmail.com
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
