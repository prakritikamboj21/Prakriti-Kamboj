import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Sparkles, Tag, Bike, Store } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [promoCode, setPromoCode] = useState('ROYALWOK');
  const [discountApplied, setDiscountApplied] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('140 Mercer St, Apt 4B, New York, NY 10012');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  const discountRate = discountApplied ? 0.15 : 0;
  const discountAmount = subtotal * discountRate;
  const deliveryFee = orderType === 'pickup' || subtotal > 45 ? 0 : 3.99;
  const tax = (subtotal - discountAmount) * 0.08875;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee + tax);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ROYALWOK') {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  const handleCloseAndReset = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl flex flex-col border-l border-[#D97706]/20">
          {/* Header */}
          <div className="flex items-center justify-between p-5 bg-[#FFF8F6] border-b border-[#DBC2B0]/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#8D4B00] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F1B1A]">
                  Your Gourmet Bag
                </h3>
                <p className="text-[11px] text-[#887364]">
                  {cartItems.reduce((acc, c) => acc + c.quantity, 0)} items selected
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#887364] hover:text-[#1F1B1A] hover:bg-[#F6ECEA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {orderPlaced ? (
              /* Order Success View */
              <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#8D4B00]">
                    Kitchen Order Dispatched
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#1F1B1A] mt-1">
                    Fresh from the Wok &amp; Clay Tandoor
                  </h4>
                  <p className="text-xs text-[#554336] mt-2 max-w-xs mx-auto">
                    {orderType === 'delivery'
                      ? `Our priority dispatch courier is preparing to deliver your order to ${deliveryAddress} in ~30–40 mins.`
                      : 'Your hot order will be packaged in thermal copper containers for pickup at the Imperial Arcade pavilion in ~20 mins.'}
                  </p>
                </div>

                <div className="p-4 bg-[#FAF6EE] rounded-xl border border-[#DBC2B0]/60 text-xs text-left space-y-2">
                  <div className="flex justify-between font-bold text-[#1F1B1A]">
                    <span>Order #SW-{(Math.random() * 100000).toFixed(0)}</span>
                    <span className="text-[#8D4B00]">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#887364] text-[11px]">
                    <span>Fulfillment:</span>
                    <span className="capitalize font-semibold text-[#1F1B1A]">{orderType}</span>
                  </div>
                  <div className="flex justify-between text-[#887364] text-[11px]">
                    <span>Items:</span>
                    <span>{cartItems.reduce((acc, c) => acc + c.quantity, 0)} items</span>
                  </div>
                </div>

                <button
                  onClick={handleCloseAndReset}
                  className="w-full py-3 rounded-xl bg-[#8D4B00] text-white text-xs font-bold hover:bg-[#6B1D2F] transition-colors"
                >
                  Return to Restaurant Menu
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              /* Empty Bag View */
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#DBC2B0] mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#1F1B1A]">
                  Your Gourmet Bag is Empty
                </h4>
                <p className="text-xs text-[#887364] max-w-xs mx-auto">
                  Explore our North Indian curries, crispy dosas, and sizzling wok creations to add to your feast.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold text-[#8D4B00] hover:underline"
                >
                  Explore Dining Menu &rarr;
                </button>
              </div>
            ) : (
              /* Active Bag Items */
              <div className="space-y-6">
                {/* Fulfillment Toggle */}
                <div className="grid grid-cols-2 p-1 bg-[#F6ECEA] rounded-xl border border-[#DBC2B0]/50 text-xs">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg font-semibold transition-all ${
                      orderType === 'delivery'
                        ? 'bg-white text-[#8D4B00] shadow-xs'
                        : 'text-[#554336] hover:text-[#1F1B1A]'
                    }`}
                  >
                    <Bike className="w-3.5 h-3.5" />
                    <span>Direct Delivery</span>
                  </button>
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg font-semibold transition-all ${
                      orderType === 'pickup'
                        ? 'bg-white text-[#8D4B00] shadow-xs'
                        : 'text-[#554336] hover:text-[#1F1B1A]'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>Express Pickup</span>
                  </button>
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-[11px] font-bold text-[#1F1B1A] mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full bg-[#FFF8F6] text-xs px-3 py-2 rounded-lg border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] text-[#1F1B1A]"
                    />
                  </div>
                )}

                {/* Items List */}
                <div className="divide-y divide-[#DBC2B0]/40">
                  {cartItems.map((ci) => (
                    <div key={ci.item.id} className="py-3.5 flex items-start gap-3">
                      <img
                        src={ci.item.image}
                        alt={ci.item.name}
                        className="w-16 h-16 rounded-xl object-cover border border-[#DBC2B0]/50 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-bold text-[#1F1B1A] truncate pr-2">
                            {ci.item.name}
                          </h4>
                          <span className="text-xs font-bold text-[#8D4B00] whitespace-nowrap">
                            ${(ci.item.price * ci.quantity).toFixed(2)}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#887364] mt-0.5">
                          {ci.item.isVeg ? '🟢 Pure Veg' : '🔴 Non-Veg'} &bull; {ci.item.spiceLabel}
                        </p>

                        {/* Quantity Stepper */}
                        <div className="flex items-center justify-between mt-2.5">
                          <div className="flex items-center border border-[#DBC2B0] rounded-lg bg-white overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(ci.item.id, ci.quantity - 1)}
                              className="p-1 hover:bg-[#F6ECEA] text-[#554336] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold text-[#1F1B1A]">
                              {ci.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(ci.item.id, ci.quantity + 1)}
                              className="p-1 hover:bg-[#F6ECEA] text-[#554336] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => onUpdateQuantity(ci.item.id, 0)}
                            className="text-[#887364] hover:text-rose-600 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="space-y-1.5 pt-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-[#887364] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code (try ROYALWOK)"
                        className="w-full bg-[#FFF8F6] text-xs pl-9 pr-3 py-2 rounded-lg border border-[#DBC2B0] uppercase font-mono tracking-wider focus:outline-none focus:border-[#8D4B00]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#F6ECEA] hover:bg-[#EAE0DE] text-[#1F1B1A] text-xs font-bold rounded-lg border border-[#DBC2B0] transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {discountApplied && (
                    <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                      <Sparkles className="w-3 h-3" /> Code ROYALWOK applied: 15% VIP discount!
                    </p>
                  )}
                </form>

                {/* Bill Breakdown */}
                <div className="bg-[#FAF6EE] p-4 rounded-xl border border-[#DBC2B0]/60 space-y-2 text-xs">
                  <div className="flex justify-between text-[#554336]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-700 font-medium">
                      <span>Promo Discount (15%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#554336]">
                    <span>Fulfillment Fee</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-semibold">FREE</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#554336]">
                    <span>Estimated NY Tax (8.875%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-2 border-t border-[#DBC2B0]/40 flex justify-between font-bold text-sm text-[#1F1B1A]">
                    <span>Grand Total</span>
                    <span className="text-[#8D4B00] text-base">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          {!orderPlaced && cartItems.length > 0 && (
            <div className="p-5 bg-[#FFF8F6] border-t border-[#DBC2B0]/40 space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-[#8D4B00] hover:bg-[#6B1D2F] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Complete Order &bull; ${total.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-[#887364]">
                Packaged hot in sealed artisan copper-safe containers. 100% spill-proof.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
