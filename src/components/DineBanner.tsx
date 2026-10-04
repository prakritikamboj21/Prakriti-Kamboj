import React from 'react';
import { Calendar, ShoppingBag } from 'lucide-react';

interface DineBannerProps {
  onBookTable: () => void;
  onOrderDelivery: () => void;
}

export const DineBanner: React.FC<DineBannerProps> = ({ onBookTable, onOrderDelivery }) => {
  return (
    <section className="py-12 bg-[#FFF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#8D4B00] via-[#A05304] to-[#6B1D2F] text-white p-8 sm:p-12 shadow-xl border border-amber-500/20">
          {/* Subtle decorative background flourishes */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -top-10 w-60 h-60 rounded-full bg-black/10 blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#FFDCC3] block">
                Exclusive Culinary Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
                Dine In Elegance or Savor at Home
              </h2>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-xl font-light">
                Reserve your booth for tonight&apos;s service, or order online for direct priority delivery. Enjoy 15% off your first online order with code{' '}
                <span className="font-bold underline decoration-amber-300 tracking-wider text-amber-200">
                  ROYALWOK
                </span>
                .
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 self-start lg:self-center">
              <button
                onClick={onBookTable}
                className="flex items-center gap-2 bg-white text-[#1F1B1A] hover:bg-[#FAF6EE] px-6 py-3 rounded-xl font-semibold text-xs shadow-md transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#8D4B00]" />
                <span>Book Table</span>
              </button>

              <button
                onClick={onOrderDelivery}
                className="flex items-center gap-2 bg-[#6B1D2F] hover:bg-[#521321] text-white border border-rose-300/30 px-6 py-3 rounded-xl font-semibold text-xs shadow-md transition-all duration-200 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>Order Delivery</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
