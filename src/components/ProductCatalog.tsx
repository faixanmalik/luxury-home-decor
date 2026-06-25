import React, { useState } from "react";
import { Star, Shield, HelpCircle, ArrowRight, Heart, X, Minus, Plus, ShoppingBag, Eye } from "lucide-react";
import { Product, CartItem } from "../types";
import { PRODUCTS, CATEGORIES } from "../data";

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity: number, material: string, color: { name: string; hex: string }) => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
}

export default function ProductCatalog({
  onAddToCart,
  activeCategory,
  onSelectCategory,
  searchQuery
}: ProductCatalogProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [qty, setQty] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | null>(null);
  const [successToast, setSuccessToast] = useState("");

  // Filter products based on search query and category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((item) => item !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setQty(1);
    setSelectedMaterial(product.materials[0]);
    setSelectedColor(product.colors[0]);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCartSubmit = () => {
    if (!selectedProduct || !selectedColor) return;
    onAddToCart(selectedProduct, qty, selectedMaterial, selectedColor);
    setSuccessToast(`Added ${qty}x ${selectedProduct.name} to cart!`);
    closeProductDetail();
    setTimeout(() => {
      setSuccessToast("");
    }, 4000);
  };

  return (
    <section id="catalog-section" className="py-24 bg-[#0b0b0b] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.4em] text-gold-500 uppercase font-semibold mb-3 block">
            ROYAL ACCOUTREMENTS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-medium tracking-tight mb-4">
            Curated Gilded Collection
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4" />
          <p className="font-sans text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Every item carries the hallmark of pristine structural craft, hand-finished in rich satin gold, brushed brass, and premium obsidian combinations.
          </p>
        </div>

        {/* Category Filter Pills & Mobile Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              id={`filter-${category.toLowerCase().replace(" ", "-")}`}
              onClick={() => onSelectCategory(category)}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-gold-700 to-gold-500 text-black border-gold-400 shadow-md shadow-gold-950/20"
                  : "bg-neutral-900/40 text-neutral-400 border-neutral-800/80 hover:text-white hover:border-gold-700/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search feedback */}
        {searchQuery && (
          <div className="text-center mb-8 -mt-6">
            <span className="text-xs text-neutral-400 font-sans">
              Showing results for "<span className="text-gold-400 font-medium">{searchQuery}</span>" ({filteredProducts.length} items found)
            </span>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/20 rounded-xl border border-neutral-900 max-w-md mx-auto p-8">
            <Shield className="w-10 h-10 text-neutral-600 mx-auto mb-4" />
            <h3 className="font-serif text-lg text-neutral-300 mb-2">No masterworks found</h3>
            <p className="font-sans text-xs text-neutral-500 mb-6">
              We couldn't find any products in this category matching your criteria. Try resetting your filters.
            </p>
            <button
              onClick={() => {
                onSelectCategory("All");
              }}
              className="px-4 py-2 bg-neutral-800 text-gold-300 text-xs uppercase font-sans font-semibold rounded hover:bg-neutral-700"
            >
              Show All Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const isLiked = likedProducts.includes(product.id);
              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  onClick={() => openProductDetail(product)}
                  className="group bg-[#111111] border border-neutral-900 hover:border-gold-800/40 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/80 flex flex-col cursor-pointer relative"
                >
                  
                  {/* Image Container with Zoom & Badge */}
                  <div className="relative aspect-square overflow-hidden bg-black/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient vignette over image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/20" />

                    {/* Left Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                      <span className="px-2 py-1 bg-gradient-to-r from-red-800 to-red-600 text-white text-[9px] uppercase tracking-wider font-bold rounded-sm shadow-md">
                        {product.discountPercentage}% OFF
                      </span>
                      {product.price > 1000 && (
                        <span className="px-2 py-0.5 bg-gold-950/80 border border-gold-600 text-gold-300 text-[8px] uppercase tracking-widest font-semibold rounded-sm">
                          Free White Glove Delivery
                        </span>
                      )}
                    </div>

                    {/* Right Favorites Button */}
                    <button
                      onClick={(e) => toggleLike(product.id, e)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors z-10 ${
                        isLiked ? "bg-red-950/60 text-red-400" : "bg-black/40 text-neutral-400 hover:text-white"
                      }`}
                      aria-label="Save to favorites"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/65">
                      <span className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        Customize & Order
                      </span>
                    </div>

                  </div>

                  {/* Text & Pricing Section */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Category Label */}
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-500 font-semibold mb-1 block">
                        {product.category}
                      </span>
                      {/* Name */}
                      <h3 className="font-serif text-lg text-white group-hover:text-gold-200 transition-colors line-clamp-1 mb-2">
                        {product.name}
                      </h3>
                      {/* Description clip */}
                      <p className="font-sans text-neutral-400 text-xs font-light line-clamp-2 leading-relaxed mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Price and Ratings */}
                    <div className="border-t border-neutral-900 pt-4 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-500 line-through font-sans">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-lg font-serif font-bold text-gold-300">
                          ${product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-gold-500 fill-current" />
                        <span className="text-xs text-neutral-300 font-sans font-medium">
                          {product.rating}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-sans">
                          ({product.reviewsCount})
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Dynamic Add Success Toast */}
        {successToast && (
          <div className="fixed bottom-6 right-6 bg-[#161616] border border-gold-500 p-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-in slide-in-from-bottom-5 duration-300">
            <div className="w-8 h-8 rounded-full bg-gold-950/60 border border-gold-400 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white font-sans">Basket Updated</span>
              <span className="text-[11px] text-neutral-400 font-sans">{successToast}</span>
            </div>
          </div>
        )}

        {/* Detailed Modal Overlay */}
        {selectedProduct && selectedColor && (
          <div
            id="product-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
          >
            <div className="bg-[#121212] border border-gold-900/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 my-8">
              
              {/* Close Button */}
              <button
                onClick={closeProductDetail}
                className="absolute top-4 right-4 p-2 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Modal Left Image */}
                <div className="md:col-span-5 relative h-64 md:h-auto bg-black">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-transparent to-transparent" />
                  
                  {/* Tag inside details */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm border border-gold-900/50 p-3 rounded-lg">
                    <p className="text-[9px] uppercase tracking-wider text-gold-500 font-semibold">Seasonal Savings</p>
                    <p className="text-sm font-serif font-bold text-white">Save ${(selectedProduct.originalPrice - selectedProduct.price).toLocaleString()}</p>
                  </div>
                </div>

                {/* Modal Right Configuration */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
                  
                  <div>
                    {/* Category Label */}
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-500 font-semibold mb-2 block">
                      {selectedProduct.category}
                    </span>
                    {/* Title */}
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-3">
                      {selectedProduct.name}
                    </h2>

                    {/* Ratings */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(selectedProduct.rating)
                                ? "text-gold-500 fill-current"
                                : "text-neutral-700"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-neutral-300 font-sans font-medium">
                        {selectedProduct.rating} / 5
                      </span>
                      <span className="text-neutral-600">|</span>
                      <span className="text-[11px] text-neutral-400 font-sans font-light">
                        {selectedProduct.reviewsCount} Authentic Reviews
                      </span>
                    </div>

                    {/* Price Comparison */}
                    <div className="flex items-baseline gap-3 mb-6 p-3 bg-neutral-900/30 border border-neutral-900 rounded-lg">
                      <span className="text-sm text-neutral-500 line-through font-sans">
                        Was ${selectedProduct.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-2xl font-serif font-bold text-gold-300">
                        ${selectedProduct.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-green-500 font-sans font-bold">
                        (You Save 80%)
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs text-neutral-300 font-light leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>

                    {/* CUSTOMIZERS */}
                    <div className="space-y-5 border-t border-neutral-900 pt-5 mb-6">
                      
                      {/* Material Customizer */}
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">
                          Select Frame Finish / Core:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.materials.map((mat) => (
                            <button
                              key={mat}
                              onClick={() => setSelectedMaterial(mat)}
                              className={`px-3 py-1.5 rounded text-[10px] font-sans font-medium border transition-all duration-300 ${
                                selectedMaterial === mat
                                  ? "bg-gold-500/10 text-gold-300 border-gold-500"
                                  : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-neutral-200"
                              }`}
                            >
                              {mat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Color Palette Customizer */}
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">
                          Select Colorway Accent: <span className="text-white font-medium capitalize font-sans">{selectedColor.name}</span>
                        </label>
                        <div className="flex items-center gap-3">
                          {selectedProduct.colors.map((colorObj) => (
                            <button
                              key={colorObj.name}
                              onClick={() => setSelectedColor(colorObj)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                selectedColor.name === colorObj.name
                                  ? "border-gold-400 scale-110"
                                  : "border-transparent hover:scale-105"
                              }`}
                              style={{ backgroundColor: colorObj.hex }}
                              title={colorObj.name}
                            >
                              {selectedColor.name === colorObj.name && (
                                <span className="w-2.5 h-2.5 rounded-full bg-white mix-blend-difference" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Specifications Section (JetBrains Mono) */}
                    <div className="bg-black/40 border border-neutral-900 rounded-lg p-4 mb-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-gold-400 font-bold font-sans mb-2">
                        Product Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[10px] text-neutral-400">
                        {Object.entries(selectedProduct.specs).map(([key, val]) => (
                          <div key={key} className="flex flex-col">
                            <span className="text-neutral-600 uppercase text-[8px] tracking-wider">{key}</span>
                            <span className="text-neutral-300">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-1.5 mb-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-gold-400 font-bold font-sans mb-2">
                        Pristine Craft Details
                      </h4>
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-400">
                          <span className="text-gold-500 font-bold mt-0.5">•</span>
                          <span className="font-sans font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Pricing and Action */}
                  <div className="border-t border-neutral-900 pt-5 mt-4 flex flex-col sm:flex-row items-center gap-4">
                    
                    {/* Quantity controls */}
                    <div className="flex items-center bg-black border border-neutral-800 rounded-lg">
                      <button
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        className="p-3 text-neutral-500 hover:text-white transition-colors"
                        aria-label="Reduce quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 text-xs text-white font-sans font-semibold">
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(qty + 1)}
                        className="p-3 text-neutral-500 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Action button */}
                    <button
                      id="modal-add-to-cart-btn"
                      onClick={handleAddToCartSubmit}
                      className="w-full py-4 px-6 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-lg hover:brightness-110 transition-all duration-300 shadow-xl shadow-gold-950/20 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Basket — ${(selectedProduct.price * qty).toLocaleString()}
                    </button>

                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
