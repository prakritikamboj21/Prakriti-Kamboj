import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { DietaryType } from '../types';
import { ShoppingBag, Calendar, Menu as MenuIcon, X, Sparkles, Check } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  dietaryFilter: DietaryType;
  setDietaryFilter: (val: DietaryType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  dietaryFilter,
  setDietaryFilter,
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Menu', id: 'menu' },
    { label: 'Our Story', id: 'story' },
    { label: 'Quality & Hygiene', id: 'standards' },
    { label: 'Visit & Hours', id: 'visit' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF8F6]/92 backdrop-blur-md border-b border-[#DBC2B0]/40 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer py-1"
          >
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-medium transition-colors hover:text-[#8D4B00] py-1 ${
                    isActive ? 'text-[#8D4B00] font-semibold' : 'text-[#554336]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8D4B00] rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dietary Preference Toggles */}
            <div className="flex items-center bg-[#F6ECEA] p-1 rounded-full border border-[#DBC2B0]/50">
              <button
                onClick={() =>
                  setDietaryFilter(dietaryFilter === 'veg' ? 'all' : 'veg')
                }
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#1B4332] text-white shadow-sm'
                    : 'text-[#1B4332] hover:bg-[#EBF5EE]'
                }`}
                title="Filter Vegetarian dishes"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>Pure Veg</span>
                {dietaryFilter === 'veg' && <Check className="w-3 h-3 ml-0.5" />}
              </button>

              <button
                onClick={() =>
                  setDietaryFilter(dietaryFilter === 'non-veg' ? 'all' : 'non-veg')
                }
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#6B1D2F] text-white shadow-sm'
                    : 'text-[#6B1D2F] hover:bg-[#FDF0F2]'
                }`}
                title="Filter Non-Veg dishes"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                <span>Non-Veg</span>
                {dietaryFilter === 'non-veg' && <Check className="w-3 h-3 ml-0.5" />}
              </button>
            </div>

            {/* Reserve a Table Button */}
            <button
              onClick={onOpenReservation}
              className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#D97706]/40 text-[#2B2625] hover:border-[#8D4B00] hover:text-[#8D4B00] hover:bg-[#FAF6EE] transition-all duration-200"
            >
              Reserve a Table
            </button>

            {/* Order Online Button with Cart Badge */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#8D4B00] hover:bg-[#6B1D2F] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online</span>
              {cartCount > 0 && (
                <span className="bg-[#6B1D2F] text-white font-bold text-[11px] px-1.5 py-0.2 rounded-full border border-amber-200/40">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#8D4B00] hover:bg-[#F6ECEA] rounded-lg transition-colors"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#6B1D2F] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F1B1A] hover:bg-[#F6ECEA] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F6] border-b border-[#DBC2B0]/40 px-5 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-base font-medium py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#F6ECEA] text-[#8D4B00] font-semibold'
                    : 'text-[#554336] hover:bg-[#FAF6EE]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Dietary Filter */}
          <div className="pt-2 border-t border-[#DBC2B0]/30">
            <p className="text-xs font-semibold text-[#887364] uppercase tracking-wider mb-2">
              Dietary Preference
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() =>
                  setDietaryFilter(dietaryFilter === 'veg' ? 'all' : 'veg')
                }
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#1B4332] text-white border-[#1B4332]'
                    : 'bg-white text-[#1B4332] border-emerald-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Pure Veg</span>
              </button>
              <button
                onClick={() =>
                  setDietaryFilter(dietaryFilter === 'non-veg' ? 'all' : 'non-veg')
                }
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#6B1D2F] text-white border-[#6B1D2F]'
                    : 'bg-white text-[#6B1D2F] border-rose-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-lg border border-[#8D4B00] text-[#8D4B00] font-semibold text-sm hover:bg-[#FAF6EE] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full py-3 rounded-lg bg-[#8D4B00] text-white font-bold text-sm shadow hover:bg-[#6B1D2F] flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online ({cartCount} items)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
