/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CulinaryTrio } from './components/CulinaryTrio';
import { MenuSection } from './components/MenuSection';
import { HospitalityStandards } from './components/HospitalityStandards';
import { ExecutiveChef } from './components/ExecutiveChef';
import { HoursSanctuary } from './components/HoursSanctuary';
import { DineBanner } from './components/DineBanner';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { DishDetailModal } from './components/DishDetailModal';
import { MENU_ITEMS } from './data/menuData';
import { MenuItem, MenuCategory, DietaryType, CartItem, SpiceLevel } from './types';
import { ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryType>('all');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');

  // Modals state
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Initial cart pre-seeded with 2 items to match Image 6's "Order Online [2]" indicator
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      item: MENU_ITEMS[0], // Old Delhi Butter Chicken
      quantity: 1,
      customSpice: 'medium',
    },
    {
      item: MENU_ITEMS[3], // Mysore Masala Dosa
      quantity: 1,
      customSpice: 'medium',
    },
  ]);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (item: MenuItem, quantity = 1, customSpice: SpiceLevel = 'medium') => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id
            ? { ...ci, quantity: ci.quantity + quantity, customSpice }
            : ci
        );
      }
      return [...prev, { item, quantity, customSpice }];
    });
    showToast(`Added ${quantity}x "${item.name}" to gourmet bag`);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQty } : ci))
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPillar = (category: MenuCategory) => {
    setSelectedCategory(category);
    scrollToSection('menu');
  };

  const totalCartCount = cartItems.reduce((acc, c) => acc + c.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F6] text-[#1F1B1A]">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        dietaryFilter={dietaryFilter}
        setDietaryFilter={setDietaryFilter}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section id="home">
          <Hero
            onExploreMenu={() => scrollToSection('menu')}
            onBookTable={() => setIsReservationOpen(true)}
          />
        </section>

        {/* Section 2: Three Pillars */}
        <CulinaryTrio onSelectCategory={handleSelectPillar} />

        {/* Section 3: Master Curations / Dining Menu */}
        <MenuSection
          items={MENU_ITEMS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          dietaryFilter={dietaryFilter}
          setDietaryFilter={setDietaryFilter}
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onViewDish={(item) => setSelectedDish(item)}
        />

        {/* Section 4: Uncompromising Principles / Hospitality Standards */}
        <HospitalityStandards />

        {/* Section 5: Executive Chef Narrative */}
        <ExecutiveChef />

        {/* Section 6: Hours & Sanctuary / Map */}
        <HoursSanctuary onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Section 7: Exclusive Dining & Home Delivery Banner */}
        <DineBanner
          onBookTable={() => setIsReservationOpen(true)}
          onOrderDelivery={() => setIsCartOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectPillar}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Interactive Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Interactive Dish Preview Modal */}
      <DishDetailModal
        item={selectedDish}
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1F1B1A] text-white shadow-2xl border border-white/10 text-xs font-semibold animate-in slide-in-from-bottom duration-300">
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-amber-300 hover:underline flex items-center gap-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>View Bag</span>
          </button>
        </div>
      )}
    </div>
  );
}
