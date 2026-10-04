import React from 'react';
import { Quote } from 'lucide-react';

export const ExecutiveChef: React.FC = () => {
  return (
    <section id="story" className="py-16 lg:py-24 bg-[#FFF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chef Image Card (matching Image 8) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 aspect-[4/5] group">
              {/* Chef Photo (Chef in black jacket with greeting hands in restaurant kitchen) */}
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Executive Chef Rajeshwar Sen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Live Kitchen Badge */}
              <div className="absolute bottom-5 right-5 z-10">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>In Kitchen Tonight</span>
                </div>
              </div>

              {/* Chef Caption Tag */}
              <div className="absolute bottom-5 left-5 z-10 text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#FFDCC3] block">
                  Master of Tandoor &amp; Wok
                </span>
                <h3 className="font-serif text-xl font-bold">Chef Rajeshwar Sen</h3>
              </div>
            </div>
          </div>

          {/* Right Narrative & Chef Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#554336] leading-relaxed">
                &ldquo;It is our utmost joy and honor to welcome you to Saffron &amp; Wok. We unite three sacred culinary heritages under one roof—where the time-honored slow heat of Awadhi charcoal tandoors, the delicate fermentation of coastal South Indian tiffins, and the searing high-flame wok alchemy of Tangra harmonize together.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#554336] leading-relaxed font-light">
                Every guest who steps into our sanctuary is welcomed as family. From the first pour of chilled copper-purified water to your bespoke spice pairings, our brigades cook with devotion, honoring centuries of ancestry with fresh, uncompromised craft.
              </p>
            </div>

            {/* Golden Highlighted Quote Block */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#FFF1E6]/80 border-l-4 border-[#D97706] shadow-xs">
              <Quote className="w-8 h-8 text-[#D97706]/30 absolute top-4 right-4" />
              <blockquote className="font-serif text-lg sm:text-xl italic text-[#1F1B1A] font-medium leading-relaxed">
                &ldquo;We never compromise on the sacred heat: charcoal for the tandoor, cast iron for the dosas, and singing high flames for the wok.&rdquo;
              </blockquote>
            </div>

            {/* Chef Signature / Credentials */}
            <div className="flex items-center justify-between pt-4 border-t border-[#DBC2B0]/40">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1F1B1A]">
                  Chef Rajeshwar Sen
                </h4>
                <p className="text-xs text-[#887364] mt-0.5">
                  Executive Culinary Director &amp; Co-Founder
                </p>
              </div>

              <div className="px-3.5 py-1.5 rounded-md bg-[#6B1D2F] text-[#FFFBF7] text-[10px] font-bold tracking-[0.16em] uppercase shadow-xs">
                Executive Chef
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
