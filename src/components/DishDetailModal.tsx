import React, { useState } from 'react';
import { X, Plus, Minus, Flame, Sparkles, AlertCircle, Clock, Utensils, Check } from 'lucide-react';
import { MenuItem, SpiceLevel } from '../types';

interface DishDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, spice: SpiceLevel) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSpice, setSelectedSpice] = useState<SpiceLevel>('medium');
  const [justAdded, setJustAdded] = useState(false);

  if (!isOpen || !item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedSpice);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border border-[#D97706]/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative h-60 w-full bg-stone-900 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badges on Image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
                  item.isVeg
                    ? 'bg-[#1B4332] text-white border-emerald-400/50'
                    : 'bg-[#6B1D2F] text-white border-rose-400/50'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.isVeg ? 'bg-emerald-400' : 'bg-rose-400'
                  }`}
                />
                <span>{item.isVeg ? 'Pure Veg' : 'Non-Veg'}</span>
              </span>

              {item.specialtyBadge && (
                <span className="text-xs font-bold uppercase tracking-wider text-amber-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30">
                  {item.specialtyBadge}
                </span>
              )}
            </div>

            <span className="text-xl font-bold text-white drop-shadow-md">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-xs">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#1F1B1A]">
              {item.name}
            </h3>
            {item.originRegion && (
              <p className="text-[#8D4B00] font-semibold text-[11px] mt-0.5">
                Heritage: {item.originRegion} &bull; {item.cookingMethod}
              </p>
            )}
            <p className="text-sm text-[#554336] leading-relaxed mt-2.5">
              {item.description}
            </p>
          </div>

          {/* Chef's Note Quote */}
          {item.chefNote && (
            <div className="p-3.5 rounded-xl bg-[#FFF1E6]/80 border-l-3 border-[#D97706] text-[#554336]">
              <span className="font-bold text-[#8D4B00] block mb-0.5">Chef&apos;s Curation Note:</span>
              <p className="italic">{item.chefNote}</p>
            </div>
          )}

          {/* Spice Customization */}
          <div>
            <label className="block text-xs font-bold text-[#1F1B1A] uppercase tracking-wider mb-2">
              Select Spice Profile
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['mild', 'medium', 'fiery'] as SpiceLevel[]).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSelectedSpice(level)}
                  className={`py-2 px-3 rounded-xl border capitalize font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedSpice === level
                      ? level === 'mild'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                        : level === 'medium'
                        ? 'border-amber-600 bg-amber-50 text-[#8D4B00]'
                        : 'border-rose-600 bg-rose-50 text-[#6B1D2F]'
                      : 'border-[#DBC2B0]/60 bg-white text-[#554336] hover:bg-[#F6ECEA]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      level === 'mild'
                        ? 'bg-emerald-500'
                        : level === 'medium'
                        ? 'bg-amber-500'
                        : 'bg-rose-600'
                    }`}
                  />
                  <span>{level}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-[#1F1B1A] uppercase tracking-wider mb-2">
                Prime Artisanal Ingredients
              </label>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#FAF6EE] border border-[#DBC2B0]/50 text-[#554336] text-[11px]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Allergens warning */}
          {item.allergens && item.allergens.length > 0 && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-100 text-stone-700 text-[11px]">
              <AlertCircle className="w-4 h-4 text-stone-500 shrink-0" />
              <span>
                <strong>Allergen Notice:</strong> Contains {item.allergens.join(', ')}.
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer / Add to Order */}
        <div className="p-4 bg-[#FFF8F6] border-t border-[#DBC2B0]/40 flex items-center justify-between gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center border border-[#DBC2B0] rounded-xl bg-white overflow-hidden shadow-xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-[#F6ECEA] text-[#554336] transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-sm font-bold text-[#1F1B1A]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-[#F6ECEA] text-[#554336] transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={handleAdd}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#8D4B00] hover:bg-[#6B1D2F] text-white hover:shadow-lg'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Order &bull; ${(item.price * quantity).toFixed(2)}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
