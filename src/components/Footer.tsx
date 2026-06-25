import React, { useState } from "react";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  ArrowRight,
  TrendingUp,
  MessageCircle,
  HelpCircle,
  Lock,
  Globe
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0b0c0a] text-white border-t border-neutral-900 pt-16 pb-10 relative overflow-hidden">
      {/* Background radial highlight & grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          
          {/* Column 1: Top Categories */}
          <div className="md:col-span-3 text-left">
            <h3 className="font-serif text-sm font-semibold tracking-[0.15em] text-gold-400 uppercase mb-5">
              Top Categories
            </h3>
            <ul className="space-y-3 font-sans text-xs text-neutral-400">
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Paintings</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Tables</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Mirror</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Chairs</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Lamp</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Lighting</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Pooja Essentials</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Decor Plates</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Frames</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Clocks</a></li>
              <li><a href="#catalog-section" className="hover:text-gold-400 transition-colors block">Acrylic Glass Painting</a></li>
            </ul>
          </div>

          {/* Column 2: Further Info */}
          <div className="md:col-span-3 text-left">
            <h3 className="font-serif text-sm font-semibold tracking-[0.15em] text-gold-400 uppercase mb-5">
              Further Info
            </h3>
            <ul className="space-y-3 font-sans text-xs text-neutral-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors block">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors block">Return and Refund Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors block">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors block">Terms of service</a></li>
              <li><a href="#happy-customers" className="hover:text-gold-400 transition-colors block">Customer Testimonials</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors block">Contact Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors block">Track your Order</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="md:col-span-3 text-left relative">
            <h3 className="font-serif text-sm font-semibold tracking-[0.15em] text-gold-400 uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 font-sans text-xs text-neutral-300">
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-gold-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <a href="#" className="hover:text-gold-400 transition-colors font-medium">Track Order</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-gold-400">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <a href="https://wa.me/#" className="hover:text-gold-400 transition-colors font-medium">WhatsApp Support</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-gold-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:support@vibecrafts.com" className="hover:text-gold-400 transition-colors font-medium break-all">
                  support@vibecrafts.com
                </a>
              </li>
            </ul>

            {/* Subtle Vector line-art chair/lamp decoration in bottom of contacts column */}
            <div className="absolute bottom-[-130px] right-[-40px] opacity-[0.03] pointer-events-none select-none hidden lg:block">
              <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                {/* Chair outline */}
                <path d="M20,80 L35,80 L35,50 L20,50 Z" />
                <path d="M20,50 L20,30" />
                <path d="M35,50 L35,30" strokeDasharray="1,1" />
                {/* Floor lamp */}
                <path d="M70,80 L70,20" />
                <path d="M60,20 C60,10 80,10 80,20 Z" />
                {/* Plant outline */}
                <path d="M45,80 C45,70 42,65 40,60" />
                <path d="M40,60 C48,60 50,55 45,50" />
              </svg>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="md:col-span-3 text-left">
            <h3 className="font-serif text-sm font-semibold tracking-[0.15em] text-gold-400 uppercase mb-4">
              Sign up for email update
            </h3>
            <p className="font-sans text-neutral-400 text-xs font-light leading-relaxed mb-6">
              Keep up-to-date with our latest product launches, special offers and new arrivals.
            </p>

            <form onSubmit={handleSubscribe} className="relative mb-6">
              <div className="relative flex items-center bg-white rounded-full p-1 border border-neutral-200 shadow-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-neutral-900 placeholder-neutral-400 pl-4 pr-24 py-2 focus:outline-none text-xs font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-xs font-bold transition-all shadow-sm flex items-center justify-center cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>

            {subscribed && (
              <p className="text-[11px] text-emerald-400 font-sans flex items-center gap-1 mb-4">
                <Check className="w-3.5 h-3.5" />
                Subscribed successfully! Thank you.
              </p>
            )}

            {/* Social Icons in Round white circles */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-gold-400 hover:text-neutral-950 transition-all duration-300 shadow-md">
                <Facebook className="w-4 h-4 fill-current stroke-0" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-gold-400 hover:text-neutral-950 transition-all duration-300 shadow-md">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-gold-400 hover:text-neutral-950 transition-all duration-300 shadow-md">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-gold-400 hover:text-neutral-950 transition-all duration-300 shadow-md">
                {/* Custom stylized Pinterest "P" using vector/span text or custom icon layout */}
                <span className="font-sans text-sm font-black italic">P</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom copyright & payment gateway row */}
        <div className="border-t border-neutral-900/80 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Leftside Copyright text */}
          <div className="text-left">
            <p className="font-sans text-xs text-neutral-500 font-medium">
              &copy; {new Date().getFullYear()} Vibecrafts. All rights reserved.
            </p>
          </div>

          {/* Rightside We Accept Payment Badges precisely matching the image */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest mr-2 font-bold">
              We accept
            </span>
            
            {/* Paytm Badge */}
            <div className="px-2.5 py-1 bg-white rounded border border-neutral-200 flex items-center justify-center shadow-sm select-none h-6.5">
              <span className="font-sans text-[10px] font-black tracking-tighter text-sky-600">
                Pay<span className="text-sky-400">tm</span>
              </span>
            </div>

            {/* PhonePe Badge */}
            <div className="px-2.5 py-1 bg-white rounded border border-neutral-200 flex items-center justify-center shadow-sm select-none h-6.5">
              <span className="font-sans text-[9px] font-black text-purple-700">
                PhonePe
              </span>
            </div>

            {/* UPI Badge */}
            <div className="px-2.5 py-1 bg-white rounded border border-neutral-200 flex items-center justify-center shadow-sm select-none h-6.5">
              <span className="font-sans text-[9px] font-black italic tracking-wide text-neutral-800">
                UPI
              </span>
            </div>

            {/* G Pay Badge */}
            <div className="px-2.5 py-1 bg-white rounded border border-neutral-200 flex items-center justify-center shadow-sm select-none h-6.5">
              <span className="font-sans text-[9px] font-extrabold tracking-tight text-neutral-800 flex items-center gap-0.5">
                <span className="text-blue-600 font-black">G</span> Pay
              </span>
            </div>

            {/* RuPay Badge */}
            <div className="px-2.5 py-1 bg-white rounded border border-neutral-200 flex items-center justify-center shadow-sm select-none h-6.5">
              <span className="font-sans text-[9px] font-black tracking-tight text-cyan-600 italic">
                RuPay<span className="text-orange-500">›</span>
              </span>
            </div>

            {/* VISA Badge */}
            <div className="px-2.5 py-1 bg-white rounded border border-neutral-200 flex items-center justify-center shadow-sm select-none h-6.5">
              <span className="font-sans text-[10px] font-black tracking-tight text-blue-900 italic">
                VISA
              </span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
