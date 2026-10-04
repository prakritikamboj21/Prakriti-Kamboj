import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategory, DietaryType } from '../types';
import { Plus, Search, Check, Flame, Info, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  items: MenuItem[];
  selectedCategory: MenuCategory;
  onSelectCategory: (cat: MenuCategory) => void;
  dietaryFilter: DietaryType;
  setDietaryFilter: (val: DietaryType) => void;
  onAddToCart: (item: MenuItem) => void;
  onViewDish: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  selectedCategory,
  onSelectCategory,
  dietaryFilter,
  setDietaryFilter,
  onAddToCart,
  onViewDish,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories: { label: string; value: MenuCategory }[] = [
    { label: 'All Offerings', value: 'all' },
    { label: 'North Indian Classics', value: 'north-indian' },
    { label: 'South Indian Tiffins', value: 'south-indian' },
    { label: 'Indo-Chinese Wok', value: 'indo-chinese' },
    { label: 'Tandoor & Breads', value: 'tandoor-breads' },
    { label: 'Desserts & Cellar', value: 'desserts-cellar' },
  ];

  // Filtering
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesBadge = item.specialtyBadge?.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients?.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        return matchesName || matchesDesc || matchesBadge || matchesIngredients;
      }
      return true;
    });
  }, [items, selectedCategory, dietaryFilter, searchQuery]);

  const handleAddClick = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 900);
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#FFF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8D4B00] block mb-2">
              Master Curations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1F1B1A] tracking-tight">
              Explore Full Dining Menu
            </h2>
            <p className="text-sm text-[#554336] mt-1 font-normal">
              Every selection prepared à la minute with uncompromised craft.
            </p>
          </div>

          {/* Spice Gauge Legend matching Image 6 */}
          <div className="flex items-center gap-3 text-xs bg-white/80 border border-[#DBC2B0]/50 px-4 py-2 rounded-full shadow-2xs self-start md:self-auto">
            <span className="font-semibold text-[#1F1B1A]">Spice Gauge:</span>
            <span className="flex items-center gap-1 text-[#1B4332]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Mild</span>
            </span>
            <span className="text-[#887364]">•</span>
            <span className="flex items-center gap-1 text-[#8D4B00]">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Medium</span>
            </span>
            <span className="text-[#887364]">•</span>
            <span className="flex items-center gap-1 text-[#6B1D2F]">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              <span>Fiery</span>
            </span>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-2 pb-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => onSelectCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#8D4B00] text-white shadow-sm'
                      : 'bg-[#F6ECEA] text-[#554336] hover:bg-[#EAE0DE] hover:text-[#1F1B1A]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Quick Dietary Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#887364]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, ingredients, spices..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-white rounded-lg border border-[#DBC2B0]/60 focus:outline-none focus:border-[#8D4B00] focus:ring-1 focus:ring-[#8D4B00] text-[#1F1B1A] placeholder-[#887364]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#887364] hover:text-[#1F1B1A]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Dietary pills */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-[#1F1B1A] text-white'
                    : 'bg-white border border-[#DBC2B0]/60 text-[#554336] hover:bg-[#F6ECEA]'
                }`}
              >
                All Diets
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'bg-white border border-emerald-300 text-[#1B4332] hover:bg-emerald-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Pure Veg</span>
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#6B1D2F] text-white shadow-xs'
                    : 'bg-white border border-rose-300 text-[#6B1D2F] hover:bg-rose-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Non-Veg</span>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#DBC2B0]">
            <p className="text-sm font-semibold text-[#554336]">
              No dishes found matching your selection.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#8D4B00] hover:underline"
            >
              Reset filters and view all dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => onViewDish(item)}
                  className="bg-[#FFFDF9] rounded-2xl border border-[#D97706]/15 hover:border-[#D97706]/35 p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Top Row: Dietary badge & Specialty tag */}
                    <div className="flex items-center justify-between mb-3">
                      {/* Dietary Tag */}
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                          item.isVeg
                            ? 'bg-[#EBF5EE] text-[#1B4332] border-[#1B4332]/30'
                            : 'bg-[#FDF0F2] text-[#6B1D2F] border-[#6B1D2F]/30'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                        <span>{item.isVeg ? 'Pure Veg' : 'Non-Veg'}</span>
                      </span>

                      {/* Specialty Tag (e.g. CHEF'S SPECIAL, 24H SLOW COOKED) */}
                      {item.specialtyBadge && (
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#887364] bg-[#FAF6EE] px-2 py-0.5 rounded-md border border-[#DBC2B0]/40">
                          {item.specialtyBadge}
                        </span>
                      )}
                    </div>

                    {/* Dish Title & Price */}
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg font-bold text-[#1F1B1A] group-hover:text-[#8D4B00] transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-bold text-[#8D4B00] text-base tracking-tight whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Sensory Description */}
                    <p className="text-xs text-[#554336] leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Row: Spice Tag & Add Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#DBC2B0]/30 mt-auto">
                    {/* Spice Indicator */}
                    <div className="flex items-center gap-1.5 text-xs text-[#887364]">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.spiceLevel === 'fiery'
                            ? 'bg-rose-600'
                            : item.spiceLevel === 'medium'
                            ? 'bg-amber-500'
                            : 'bg-emerald-500'
                        }`}
                      />
                      <span className="text-[11px] font-medium text-[#554336]">
                        {item.spiceLabel}
                      </span>
                    </div>

                    {/* Add to Order Button */}
                    <button
                      onClick={(e) => handleAddClick(e, item)}
                      className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                        isAdded
                          ? 'bg-emerald-600 text-white border-emerald-600 scale-95'
                          : 'bg-[#FFF8F6] hover:bg-[#8D4B00] text-[#8D4B00] hover:text-white border-[#D97706]/40 hover:border-[#8D4B00]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
