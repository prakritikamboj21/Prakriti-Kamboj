import React from 'react';
import { Utensils, Calendar, Droplet, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle warm ambient background glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#FFDCC3]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-[#FFD9DD]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Hero Copy */}
          <div className="lg:col-span-6 space-y-7">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1E6] border border-[#D97706]/30 text-[#8D4B00] text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse"></span>
              <span>A Tri-Cuisine Odyssey</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.12] text-[#1F1B1A] font-medium tracking-tight">
              A Symphony of{' '}
              <span className="italic font-serif text-[#D97706] font-semibold">Spice</span>
              ,{' '}
              <br className="hidden sm:inline" />
              Steam &amp;{' '}
              <span className="italic font-serif text-[#6B1D2F] font-semibold">Sizzle</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#554336] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Handcrafted North Indian delicacies, golden crisp South Indian tiffins, and fiery Indo-Chinese wok masterworks—crafted with ancient culinary heritage and farm-fresh vitality.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="flex items-center justify-center gap-2.5 bg-[#8D4B00] hover:bg-[#6B1D2F] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Utensils className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Explore Menu</span>
              </button>

              <button
                onClick={onBookTable}
                className="flex items-center justify-center gap-2.5 bg-white/90 hover:bg-[#FAF6EE] text-[#1F1B1A] border border-[#DBC2B0] hover:border-[#8D4B00] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-[#8D4B00]" />
                <span>Book a Table</span>
              </button>
            </div>

            {/* Three Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#DBC2B0]/40">
              {/* Badge 1 */}
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/60 border border-[#EAE0DE] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 flex-shrink-0 mt-0.5">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B1A] leading-tight">RO &amp; UV Purified</h4>
                  <p className="text-[11px] text-[#554336] leading-snug mt-0.5">Free chilled water served</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/60 border border-[#EAE0DE] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#8D4B00] flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B1A] leading-tight">Farm To Table</h4>
                  <p className="text-[11px] text-[#554336] leading-snug mt-0.5">Stone-ground local spices</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/60 border border-[#EAE0DE] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200/60 flex items-center justify-center text-[#6B1D2F] flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B1A] leading-tight">Hygiene 5-Star</h4>
                  <p className="text-[11px] text-[#554336] leading-snug mt-0.5">Daily sterile inspections</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] sm:aspect-[16/11] group">
              {/* Image 3: Cozy warm dining restaurant banquet with candlelight, copper bowls, dosa, and wok */}
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80"
                alt="Saffron and Wok royal dining table banquet feast"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Gradient vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 right-5 z-10">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md text-[#1F1B1A] text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse"></span>
                  <span>3 Master Kitchens</span>
                </div>
              </div>

              {/* Bottom Floating Glass Card matching Image 6 */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <div className="p-4 sm:p-5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 text-white shadow-xl">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#FFDCC3] block mb-1">
                    Feast of Traditions
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                    Where Charcoal Clay Meets Wok Flame
                  </h3>
                  <p className="text-xs text-white/85 mt-1 font-light">
                    Every service curated fresh by heritage chefs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
