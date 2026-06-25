import React, { useState } from "react";
import { X, Calendar, Clock, User, Shield, CheckCircle, Sparkles, Send } from "lucide-react";
import { ConsultationBooking } from "../types";
import { TIME_SLOTS, DESIGNERS } from "../data";

interface DesignConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesignConsultModal({ isOpen, onClose }: DesignConsultModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "irfanmalik0035@gmail.com", // Autofill logged in user
    phone: "",
    notes: "",
  });

  const [selectedDesigner, setSelectedDesigner] = useState(DESIGNERS[0].name);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[1]);
  const [stylePreference, setStylePreference] = useState("Black & Gold Art Deco");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Generate the next 5 dates for selection chips
  const upcomingDates = Array.from({ length: 5 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      raw: d.toISOString().split("T")[0],
      dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
      dayNumber: d.toLocaleDateString("en-US", { day: "numeric" }),
      monthName: d.toLocaleDateString("en-US", { month: "short" }),
    };
  });

  const [selectedDate, setSelectedDate] = useState(upcomingDates[0].raw);

  const styleOptions = [
    "Black & Gold Art Deco",
    "Minimalist Matte Obsidian",
    "Modern Luxury Penthouse",
    "Reflective Gilded Metallic Accent"
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1500);
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
    >
      <div className="bg-[#121212] border border-gold-900/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isConfirmed ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
            
            <div>
              {/* Header */}
              <div className="mb-6 text-center">
                <span className="font-sans text-[10px] tracking-[0.4em] text-gold-500 uppercase font-semibold mb-2 block">
                  PRIVATE ADVISORY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Private Design Advisory
                </h3>
                <p className="font-sans text-neutral-400 text-xs mt-1.5 font-light">
                  Plan a complimentary 30-minute private design video-call session with our top architectural curators.
                </p>
              </div>

              {/* Step 1: Select Designer */}
              <div className="mb-6">
                <label className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-3 font-sans">
                  1. Choose Your Curatorial Expert
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DESIGNERS.map((des) => (
                    <button
                      type="button"
                      key={des.name}
                      onClick={() => setSelectedDesigner(des.name)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-24 ${
                        selectedDesigner === des.name
                          ? "bg-gold-950/25 border-gold-500 text-gold-300 shadow-lg shadow-gold-950/10"
                          : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                      }`}
                    >
                      <span className="text-xs font-bold text-white block">{des.name}</span>
                      <span className="text-[9px] text-neutral-400 font-sans leading-tight mt-1 line-clamp-2">
                        {des.specialty}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Date */}
              <div className="mb-6">
                <label className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-3 font-sans">
                  2. Select Consultation Date
                </label>
                <div className="flex gap-2.5 overflow-x-auto pb-2">
                  {upcomingDates.map((dateObj) => (
                    <button
                      type="button"
                      key={dateObj.raw}
                      onClick={() => setSelectedDate(dateObj.raw)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border min-w-[70px] shrink-0 transition-all duration-300 ${
                        selectedDate === dateObj.raw
                          ? "bg-gold-500/10 border-gold-500 text-gold-300 shadow-md shadow-gold-950/10"
                          : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                      }`}
                    >
                      <span className="text-[9px] uppercase tracking-widest font-sans font-medium">{dateObj.dayName}</span>
                      <span className="text-lg font-serif font-bold text-white mt-0.5">{dateObj.dayNumber}</span>
                      <span className="text-[8px] uppercase tracking-wider text-neutral-500 font-sans">{dateObj.monthName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Choose Time Slot */}
              <div className="mb-6">
                <label className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-3 font-sans">
                  3. Select Preferred Time Slot (UTC-7)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-1 rounded-lg border text-center text-[10px] font-sans font-medium transition-all duration-300 ${
                        selectedTimeSlot === slot
                          ? "bg-gold-500/15 border-gold-500 text-gold-300 font-semibold"
                          : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                      }`}
                    >
                      {slot.replace(" - ", "\n")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact & Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-2 font-sans">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Irfan Malik"
                    className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-2 font-sans">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 123-4567"
                    className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

              </div>

              {/* Design Preference dropdown */}
              <div className="mb-6">
                <label className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-2 font-sans">
                  Style Inspiration Vibe
                </label>
                <div className="flex flex-wrap gap-2">
                  {styleOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setStylePreference(opt)}
                      className={`px-3 py-1.5 rounded-full text-[10px] font-sans font-medium border transition-all duration-300 ${
                        stylePreference === opt
                          ? "bg-gold-500/10 border-gold-500 text-gold-300"
                          : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mb-6">
                <label className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-2 font-sans">
                  Additional Notes (Specific spaces or floor layout details)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g., Living room wall is textured concrete. I want to contrast it with a large golden mirror and matching lamp."
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-lg p-3 text-xs font-sans focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600"
                />
              </div>

            </div>

            {/* Submit Action */}
            <div className="border-t border-neutral-900 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-neutral-500 text-[10px]">
                <Shield className="w-3.5 h-3.5 text-gold-600" />
                <span>Encrypted, respect-guaranteed platform</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-black text-xs uppercase tracking-widest font-bold font-sans rounded-lg hover:brightness-110 transition-all duration-300 shadow-xl shadow-gold-950/20 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    Securing Slot...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Confirm Reservation
                  </>
                )}
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Success screen */
          <div className="p-8 text-center flex flex-col items-center justify-center animate-in fade-in duration-500">
            
            <div className="w-16 h-16 rounded-full bg-gold-950/40 border border-gold-500 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-gold-400" />
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold mb-2">
              RESERVATION SECURED
            </span>
            <h3 className="font-serif text-3xl text-white font-medium mb-3">
              Your Session is Confirmed!
            </h3>
            
            <p className="font-sans text-neutral-400 text-xs max-w-md mx-auto leading-relaxed mb-6 font-light">
              Congratulations! We have booked your complementary private consultation. A calendar invite with a secure video call bridge has been dispatched to <span className="text-gold-300 font-semibold">{formData.email}</span>.
            </p>

            {/* Dynamic Summary Card */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-5 max-w-md w-full mb-8 text-left space-y-3">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Curator Expert</span>
                <span className="text-xs text-white font-semibold font-sans">{selectedDesigner}</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Scheduled Date</span>
                <span className="text-xs text-gold-300 font-bold font-sans">
                  {new Date(selectedDate).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Time Window</span>
                <span className="text-xs text-white font-sans font-medium">{selectedTimeSlot}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Inspiration Vibe</span>
                <span className="text-xs text-gold-400 font-sans font-medium italic">{stylePreference}</span>
              </div>
            </div>

            {/* Close trigger button */}
            <button
              onClick={onClose}
              className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-sans uppercase tracking-[0.15em] rounded-lg transition-colors border border-neutral-800"
            >
              Done, return to Gallery
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
