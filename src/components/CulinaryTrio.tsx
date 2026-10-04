import React from 'react';
import { ArrowRight, Flame, Sparkles, Wind } from 'lucide-react';
import { MenuCategory } from '../types';

interface CulinaryTrioProps {
  onSelectCategory: (category: MenuCategory) => void;
}

export const CulinaryTrio: React.FC<CulinaryTrioProps> = ({ onSelectCategory }) => {
  const pillars = [
    {
      id: 'north-indian' as MenuCategory,
      tag: 'Charcoal Tandoor & Dum',
      title: 'Royal North Indian',
      // Rich Awadhi curries and naan spread (Image 4 style)
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
      description:
        'Slow-simmered rich curries, fragrant Awadhi dum biryani, and live clay-oven roasted tandoori breads imbued with smoky charcoal spirit.',
      buttonText: 'View North Indian Dishes',
      badgeColor: 'bg-amber-950/80 text-amber-200 border-amber-600/30',
      accentColor: '#8D4B00',
    },
    {
      id: 'south-indian' as MenuCategory,
      tag: 'Fermented Batter & Ghee',
      title: 'Golden South Indian',
      // Crispy Dosa on green banana leaf with brass bowls of sambar (Image 1 style)
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
      description:
        'Crispy ghee roast dosas, pillow-soft steamed idlis, fresh coconut chutneys, and soul-comforting lentil sambar spiked with mustard seeds and curry leaves.',
      buttonText: 'View South Indian Tiffins',
      badgeColor: 'bg-emerald-950/80 text-emerald-200 border-emerald-600/30',
      accentColor: '#1B4332',
    },
    {
      id: 'indo-chinese' as MenuCategory,
      tag: 'High-Heat Wok Hei',
      title: 'Sizzling Indo-Chinese',
      // High-heat wok toss with leaping flames and peppers (Image 5 style)
      image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
      description:
        "The electrifying collision of Calcutta Chinese heritage: fiery Schezwan aromatics, crispy manchurian bites, and smoky Hakka noodles kissed by high wok flame.",
      buttonText: 'View Indo-Chinese Wok',
      badgeColor: 'bg-rose-950/80 text-rose-200 border-rose-600/30',
      accentColor: '#6B1D2F',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCF1EF]/60 border-y border-[#DBC2B0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8D4B00] block mb-2">
              The Three Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1F1B1A] tracking-tight">
              Discover Our Culinary Trio
            </h2>
          </div>
          <p className="text-sm text-[#554336] max-w-md leading-relaxed font-normal">
            Three specialized kitchen brigades working simultaneously to honor the authentic techniques of Awadh, the Malabar Coast, and Kolkata&apos;s Chinatown.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#DBC2B0]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame with Badge */}
              <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Pillar Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md border ${pillar.badgeColor}`}
                  >
                    {pillar.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1B1A] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[#554336] text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectCategory(pillar.id)}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#DBC2B0] hover:border-[#8D4B00] bg-[#FFF8F6] hover:bg-[#FAF6EE] text-[#1F1B1A] hover:text-[#8D4B00] text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-[#8D4B00] group-hover:text-white group-hover:border-[#8D4B00]"
                  >
                    <span>{pillar.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
