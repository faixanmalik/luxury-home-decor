import React, { useState } from "react";
import { X, Trash2, Minus, Plus, ShoppingBag, CreditCard, Sparkles, ShieldCheck, Ticket } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState("");
  const [activeDiscount, setActiveDiscount] = useState<{ code: string; percent: number } | null>(null);
  const [couponError, setCouponError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  // Standard cart totals
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const originalSubtotal = cart.reduce((sum, item) => sum + item.product.originalPrice * item.quantity, 0);
  const monsoonSavings = originalSubtotal - subtotal;

  // Extra coupon application
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "GOLDEN80") {
      setActiveDiscount({ code: "GOLDEN80", percent: 10 }); // Gives an extra 10% off the already 80% discounted price!
      setCouponError("");
    } else if (code === "ROYAL10") {
      setActiveDiscount({ code: "ROYAL10", percent: 10 });
      setCouponError("");
    } else if (code === "WELCOME5") {
      setActiveDiscount({ code: "WELCOME5", percent: 5 });
      setCouponError("");
    } else {
      setCouponError("Invalid or expired coupon code.");
    }
  };

  const extraDiscountAmount = activeDiscount ? (subtotal * activeDiscount.percent) / 100 : 0;
  const grandTotal = subtotal - extraDiscountAmount;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
    }, 2000);
  };

  const handleFinishCheckout = () => {
    onClearCart();
    setCheckoutSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Overlay Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md">
          
          <div className="h-full flex flex-col bg-[#0d0d0d] border-l border-gold-900/30 shadow-2xl overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-neutral-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl text-white font-medium">Your Shopping Basket</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white rounded-full transition-colors"
                aria-label="Close basket"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {checkoutSuccess ? (
              /* Success Checkout Simulator Panel */
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-gold-950/40 border border-gold-500 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-gold-400 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold mb-2">
                  TRANSACTION COMPLETED
                </span>
                <h4 className="font-serif text-2xl text-white font-medium mb-3">
                  Thank You for Your Order!
                </h4>
                <p className="font-sans text-neutral-400 text-xs max-w-xs mx-auto leading-relaxed mb-6 font-light">
                  Your luxury acquisition is secured. A pristine white-glove delivery advisor will contact you shortly to coordinate scheduling.
                </p>

                {/* Simulation Summary details */}
                <div className="bg-neutral-900/40 border border-neutral-800 p-4 rounded-xl w-full mb-8 text-left space-y-2">
                  <div className="flex justify-between text-[11px] font-sans">
                    <span className="text-neutral-500">Invoice Destination:</span>
                    <span className="text-neutral-200">irfanmalik0035@gmail.com</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-sans">
                    <span className="text-neutral-500">Settled Amount:</span>
                    <span className="text-gold-300 font-bold">${grandTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-sans">
                    <span className="text-neutral-500">Delivery Class:</span>
                    <span className="text-green-500">VIP Premium Handling</span>
                  </div>
                </div>

                <button
                  onClick={handleFinishCheckout}
                  className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-sans text-xs uppercase tracking-widest font-bold rounded-lg hover:brightness-110 transition-colors"
                >
                  Return to Store
                </button>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart state */
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-neutral-500">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg text-neutral-300 mb-2">Your basket is vacant</h4>
                <p className="font-sans text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed mb-8 font-light">
                  Explore our curated gold listings and customize a masterpiece to begin your transformation.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-neutral-900 text-gold-300 text-xs font-sans font-bold uppercase tracking-wider rounded border border-neutral-800 hover:border-gold-600/50 transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              /* Standard list and calculation panels */
              <>
                {/* Scrollable list */}
                <div className="flex-1 divide-y divide-neutral-900 overflow-y-auto px-6">
                  {cart.map((item) => (
                    <div key={item.id} className="py-6 flex gap-4">
                      
                      {/* Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-neutral-900 bg-black/40 shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Content column */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between gap-2">
                            <h5 className="font-serif text-sm text-white font-medium line-clamp-1">
                              {item.product.name}
                            </h5>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-neutral-600 hover:text-red-400 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          {/* Specs / Options */}
                          <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                            <span className="px-1.5 py-0.5 bg-neutral-900 text-[9px] font-sans text-neutral-400 rounded border border-neutral-800/60">
                              {item.selectedMaterial}
                            </span>
                            <span className="px-1.5 py-0.5 bg-neutral-900 text-[9px] font-sans text-neutral-400 rounded border border-neutral-800/60 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.selectedColor.hex }} />
                              {item.selectedColor.name}
                            </span>
                          </div>
                        </div>

                        {/* Qty controller and subprice */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center bg-black border border-neutral-900 rounded">
                            <button
                              onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-1 text-neutral-500 hover:text-white transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs text-white font-sans font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-neutral-500 hover:text-white transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <span className="text-sm font-serif font-bold text-gold-300">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>

                      </div>

                    </div>
                  ))}
                </div>

                {/* Calculation and Action footer */}
                <div className="border-t border-neutral-900 bg-black/40 p-6 space-y-4">
                  
                  {/* Monsoon Magic Savings highlight */}
                  <div className="p-3 bg-red-950/15 border border-red-950/40 rounded-lg flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold text-red-400 uppercase tracking-wider">
                      Monsoon Promo Savings:
                    </span>
                    <span className="text-xs font-mono font-bold text-red-400">
                      -${monsoonSavings.toLocaleString()} (80%)
                    </span>
                  </div>

                  {/* Coupon formulation */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-grow">
                      <Ticket className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => {
                          setCouponCode(e.target.value);
                          setCouponError("");
                        }}
                        placeholder="ENTER COUPON CODE"
                        className="w-full bg-neutral-900 border border-neutral-800 text-white rounded px-4 py-2 pl-9 text-[10px] font-mono tracking-widest uppercase focus:outline-none focus:border-gold-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-neutral-800 text-gold-300 text-[10px] uppercase font-sans font-bold tracking-wider rounded hover:bg-neutral-700 transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {couponError && <p className="text-[10px] text-red-500 font-sans">{couponError}</p>}
                  {activeDiscount && (
                    <p className="text-[10px] text-green-500 font-sans flex items-center gap-1">
                      <span>✓ Coupon Applied:</span>
                      <span className="font-mono font-bold">{activeDiscount.code}</span>
                      <span>(-{activeDiscount.percent}% extra)</span>
                    </p>
                  )}

                  {/* Pricing Breakdown lists */}
                  <div className="space-y-2 border-b border-neutral-900 pb-4 text-xs">
                    
                    <div className="flex justify-between font-sans text-neutral-400">
                      <span>Original Retail Subtotal</span>
                      <span className="line-through">${originalSubtotal.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between font-sans text-neutral-400">
                      <span>80% Monsoon Reduction</span>
                      <span className="text-red-400">-${monsoonSavings.toLocaleString()}</span>
                    </div>

                    {activeDiscount && (
                      <div className="flex justify-between font-sans text-neutral-400">
                        <span>Extra Promo ({activeDiscount.code})</span>
                        <span className="text-green-500">-${extraDiscountAmount.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between font-sans text-neutral-400">
                      <span>White Glove Shipping</span>
                      <span className="text-gold-400 uppercase font-bold text-[10px] tracking-widest">Complimentary</span>
                    </div>

                  </div>

                  {/* Grand total */}
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="font-serif text-sm text-white font-medium">Grand Acquisition Total:</span>
                    <span className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500">
                      ${grandTotal.toLocaleString()}
                    </span>
                  </div>

                  {/* Action Proceed checkout */}
                  <button
                    id="basket-checkout-btn"
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-lg hover:brightness-110 transition-all duration-300 shadow-xl shadow-gold-950/40 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    {isCheckingOut ? "Connecting Payment Terminal..." : "PROCEED TO SECURE CHECKOUT"}
                  </button>

                  <div className="flex justify-center items-center gap-1.5 text-[10px] text-neutral-500 pt-2 font-sans">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                    <span>Secure SSL payments • fully encrypted checkout</span>
                  </div>

                </div>
              </>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
