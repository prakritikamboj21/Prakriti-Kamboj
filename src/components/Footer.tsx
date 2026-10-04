import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, ShieldCheck, Instagram, Phone, MapPin, Star, Check } from 'lucide-react';
import { MenuCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: MenuCategory) => void;
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenReservation,
  onOpenCart,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#FAF6EE] border-t border-[#DBC2B0]/60 pt-16 pb-12 text-[#554336]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#DBC2B0]/40">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs leading-relaxed max-w-sm text-[#554336]">
              A sensory voyage uniting ancient subcontinental charcoal craft with the fire and finesse of pan-Asian wok alchemy. Crafted for discerning epicureans.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-[#1B4332]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>HACCP &amp; Grade A Certified</span>
            </div>

            {/* Social / Contact Icons */}
            <div className="flex items-center gap-3 pt-2 text-[#887364]">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full bg-white border border-[#DBC2B0]/50 flex items-center justify-center hover:text-[#8D4B00] hover:border-[#8D4B00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:18007233766"
                className="w-8 h-8 rounded-full bg-white border border-[#DBC2B0]/50 flex items-center justify-center hover:text-[#8D4B00] hover:border-[#8D4B00] transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#visit"
                className="w-8 h-8 rounded-full bg-white border border-[#DBC2B0]/50 flex items-center justify-center hover:text-[#8D4B00] hover:border-[#8D4B00] transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href="#reviews"
                className="w-8 h-8 rounded-full bg-white border border-[#DBC2B0]/50 flex items-center justify-center hover:text-[#8D4B00] hover:border-[#8D4B00] transition-colors"
                aria-label="Reviews"
              >
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Curations Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1F1B1A]">
              Curations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-[#8D4B00] transition-colors text-left"
                >
                  Grand Tasting Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('tandoor-breads')}
                  className="hover:text-[#8D4B00] transition-colors text-left"
                >
                  Tandoor Clay Oven
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('indo-chinese')}
                  className="hover:text-[#8D4B00] transition-colors text-left"
                >
                  Wok Signatures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('desserts-cellar')}
                  className="hover:text-[#8D4B00] transition-colors text-left"
                >
                  Cardamom &amp; Tea Bar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('south-indian')}
                  className="hover:text-[#8D4B00] transition-colors text-left"
                >
                  Plant-Based Selection
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCart}
                  className="hover:text-[#8D4B00] transition-colors text-left font-medium"
                >
                  Direct Delivery
                </button>
              </li>
            </ul>
          </div>

          {/* Visit & Hours Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1F1B1A]">
              Visit &amp; Hours
            </h4>
            <div className="space-y-2.5 text-xs text-[#554336]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8D4B00] shrink-0 mt-0.5" />
                <span>442 Amber Pavilion Way, Imperial Arcade, Culinary District</span>
              </div>
              <div className="pt-1">
                <p className="font-semibold text-[#1F1B1A]">Lunch Seating</p>
                <p className="text-[11px] text-[#887364]">Mon – Sun: 12:00 PM – 3:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#1F1B1A]">Dinner Seating</p>
                <p className="text-[11px] text-[#887364]">Mon – Sun: 6:30 PM – 11:30 PM</p>
              </div>
              <div className="pt-1 flex items-center gap-1.5 font-medium text-[#8D4B00]">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:18007233766" className="hover:underline">
                  +1 (800) 723-3766
                </a>
              </div>
            </div>
          </div>

          {/* The Tasting Journal Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1F1B1A]">
              The Tasting Journal
            </h4>
            <p className="text-xs text-[#554336] leading-relaxed">
              Receive seasonal degustation invitations and private cellar releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-white text-xs px-3.5 py-2.5 pr-10 rounded-xl border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] focus:ring-1 focus:ring-[#8D4B00] placeholder-[#887364]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 rounded-lg bg-[#8D4B00] hover:bg-[#6B1D2F] text-white transition-colors cursor-pointer"
                  aria-label="Subscribe to tasting journal"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" /> Thank you for subscribing.
                </p>
              )}
            </form>

            <p className="text-[10px] text-[#887364]">
              We respect quiet inboxes. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#887364]">
          <p>© 2026 Saffron &amp; Wok Hospitality Group. All culinary rights reserved.</p>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenReservation}
              className="hover:text-[#8D4B00] transition-colors"
            >
              Reservation Policy
            </button>
            <span className="text-stone-300">•</span>
            <a href="#standards" className="hover:text-[#8D4B00] transition-colors">
              Health &amp; Safety
            </a>
            <span className="text-stone-300">•</span>
            <a href="#privacy" className="hover:text-[#8D4B00] transition-colors">
              Privacy &amp; Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
