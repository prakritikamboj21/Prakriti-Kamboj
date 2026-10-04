import React from 'react';
import { Clock, MapPin, Phone, Calendar, ArrowUpRight, Car, Accessibility } from 'lucide-react';

interface HoursSanctuaryProps {
  onOpenReservation: () => void;
}

export const HoursSanctuary: React.FC<HoursSanctuaryProps> = ({ onOpenReservation }) => {
  return (
    <section id="visit" className="py-16 lg:py-24 bg-[#FAF6EE] border-t border-[#DBC2B0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8D4B00] block mb-2">
              Plan Your Visit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1F1B1A] tracking-tight">
              Hours &amp; Sanctuary
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold self-start sm:self-auto shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Kitchen Open Now &bull; Welcoming Guests</span>
          </div>
        </div>

        {/* 2 Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Service Schedule */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-[#DBC2B0]/40 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1B1A] mb-6">
                Service Schedule
              </h3>

              <div className="space-y-4">
                {/* Lunch */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF6EE]/80 border border-[#DBC2B0]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#8D4B00] flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F1B1A]">Lunch Seating</h4>
                      <p className="text-[11px] text-[#887364]">Full Tiffin &amp; Express Bento</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#8D4B00]">11:30 AM – 3:00 PM</span>
                </div>

                {/* Dinner */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF6EE]/80 border border-[#DBC2B0]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-[#6B1D2F] flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F1B1A]">Dinner Seating</h4>
                      <p className="text-[11px] text-[#887364]">Degustation &amp; A La Carte</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#6B1D2F]">5:30 PM – 10:30 PM</span>
                </div>

                {/* Takeaway */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF6EE]/80 border border-[#DBC2B0]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F1B1A]">Takeaway &amp; Delivery</h4>
                      <p className="text-[11px] text-[#887364]">Direct Gourmet Dispatch</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1F1B1A]">12:00 PM – 10:00 PM</span>
                </div>
              </div>

              {/* Complimentary Valet Note */}
              <div className="flex items-start gap-2.5 mt-5 p-3 rounded-lg bg-[#FFF8F6] border border-[#DBC2B0]/40 text-xs text-[#554336]">
                <Car className="w-4 h-4 text-[#8D4B00] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#1F1B1A]">Complimentary Valet Parking</strong> available at the Imperial Arcade North Portico for all dining patrons.
                </p>
              </div>
            </div>

            {/* Actions: Call & Book */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-[#DBC2B0]/40">
              <a
                href="tel:18007233766"
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl border border-[#DBC2B0] hover:border-[#8D4B00] text-[#1F1B1A] hover:text-[#8D4B00] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8D4B00]" />
                <span>+1 (800) 723-3766</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-[#8D4B00] hover:bg-[#6B1D2F] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Table</span>
              </button>
            </div>
          </div>

          {/* Right Column: Imperial Arcade Sanctuary Map Preview */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-[#DBC2B0]/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1B1A]">
                    Imperial Arcade Sanctuary
                  </h3>
                  <p className="text-xs text-[#554336] mt-1">
                    442 Amber Pavilion Way, Imperial Arcade Promenade, New York, NY 10012
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#887364] bg-[#FAF6EE] px-2.5 py-1 rounded-md border border-[#DBC2B0]/40">
                  Culinary District
                </span>
              </div>

              {/* Map Illustration Tile matching Image 6 */}
              <div className="relative w-full h-56 rounded-2xl bg-[#F6ECEA] overflow-hidden border border-[#DBC2B0]/60 flex items-center justify-center p-4 my-4 group cursor-pointer">
                {/* Subtle map grid vector background */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#887364" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  {/* Stylized street lines */}
                  <path d="M-20 60 Q 150 110 400 80" stroke="#DBC2B0" strokeWidth="12" fill="none" />
                  <path d="M120 -20 Q 180 140 220 300" stroke="#DBC2B0" strokeWidth="10" fill="none" />
                  <path d="M260 -20 L 320 280" stroke="#DBC2B0" strokeWidth="8" fill="none" />
                </svg>

                {/* Central Restaurant Location Pin */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#8D4B00] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <span className="text-lg">🍴</span>
                  </div>
                  <div className="mt-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#DBC2B0] shadow-sm">
                    <p className="font-serif font-bold text-xs text-[#1F1B1A]">
                      Saffron &amp; Wok Main Pavilion
                    </p>
                    <p className="text-[10px] text-[#887364]">
                      Click below to trigger turn-by-turn navigation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility and Get Directions */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#DBC2B0]/40 gap-3">
              <div className="flex items-center gap-2 text-xs text-[#554336]">
                <Accessibility className="w-4 h-4 text-[#1B4332]" />
                <span>Fully Wheelchair Accessible &amp; Family Friendly</span>
              </div>

              <a
                href="https://maps.google.com/?q=442+Amber+Pavilion+Way+New+York+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#8D4B00] hover:text-[#6B1D2F] flex items-center gap-1 hover:underline"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
