import React from 'react';
import { Droplet, Sparkles, ShieldCheck, Award } from 'lucide-react';

export const HospitalityStandards: React.FC = () => {
  const standards = [
    {
      title: 'Complimentary Pure Water',
      description:
        'Zero charges for hydration. Every guest is served 100% RO + UV multi-stage purified drinking water, available chilled or ambient in sanitized copper carafes.',
      icon: Droplet,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-700',
      borderColor: 'border-teal-200/60',
    },
    {
      title: 'Daily Sourced Spices',
      description:
        'Whole spices stone-ground every morning. Cold-pressed sesame and mustard oils, antibiotic-free meats, zero artificial synthetic dyes, and 100% MSG-free options.',
      icon: Sparkles,
      iconBg: 'bg-amber-50',
      iconColor: 'text-[#8D4B00]',
      borderColor: 'border-amber-200/60',
    },
    {
      title: 'ISO 22000 Certified',
      description:
        'Full glass open kitchens allow transparent observation. High-temperature steam-sanitized crockery and automated temperature logging across all cold storage.',
      icon: ShieldCheck,
      iconBg: 'bg-rose-50',
      iconColor: 'text-[#6B1D2F]',
      borderColor: 'border-rose-200/60',
    },
    {
      title: '3 Specialized Masters',
      description:
        'Our kitchens are divided by discipline: dedicated Lucknowi tandoor masters, Madurai dosai craftswomen, and Hakka wok maestros presiding over their craft.',
      icon: Award,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#1B4332]',
      borderColor: 'border-emerald-200/60',
    },
  ];

  return (
    <section id="standards" className="py-16 lg:py-24 bg-[#FAF6EE] border-y border-[#DBC2B0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8D4B00] block mb-2">
            Uncompromising Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1F1B1A] tracking-tight">
            Our Purity &amp; Hospitality Standards
          </h2>
          <p className="text-sm text-[#554336] mt-3 leading-relaxed">
            We believe dining luxury begins with impeccable hygiene, transparent sourcing, and authentic culinary technique.
          </p>
        </div>

        {/* 4 Standards Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std, idx) => {
            const IconComponent = std.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#DBC2B0]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${std.iconBg} ${std.iconColor} border ${std.borderColor} flex items-center justify-center mb-5`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1F1B1A] mb-2 leading-snug">
                  {std.title}
                </h3>
                <p className="text-xs text-[#554336] leading-relaxed">
                  {std.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
