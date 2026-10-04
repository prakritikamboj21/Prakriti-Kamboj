import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Utensils, Sparkles, MapPin } from 'lucide-react';
import { ReservationDetails } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-04');
  const [time, setTime] = useState('19:00');
  const [seatingArea, setSeatingArea] = useState<'main-dining' | 'tandoor-counter' | 'wok-alcove'>('main-dining');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const lunchSlots = ['11:30 AM', '12:15 PM', '1:00 PM', '1:45 PM', '2:30 PM'];
  const dinnerSlots = ['5:30 PM', '6:15 PM', '7:00 PM', '7:45 PM', '8:30 PM', '9:15 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'SW-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FFFDF9] rounded-3xl border border-[#D97706]/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#DBC2B0]/40 bg-[#FFF8F6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#8D4B00] text-white flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1F1B1A]">
                Reserve Your Table
              </h3>
              <p className="text-[11px] text-[#887364]">
                Imperial Arcade Sanctuary &bull; New York
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

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Party Size Selector */}
              <div>
                <label className="block text-xs font-bold text-[#1F1B1A] uppercase tracking-wider mb-2">
                  Number of Guests
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`w-11 h-11 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                        guests === num
                          ? 'bg-[#8D4B00] text-white shadow-xs'
                          : 'bg-[#F6ECEA] text-[#554336] hover:bg-[#EAE0DE]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setGuests(10)}
                    className={`px-3 h-11 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      guests === 10
                        ? 'bg-[#8D4B00] text-white shadow-xs'
                        : 'bg-[#F6ECEA] text-[#554336] hover:bg-[#EAE0DE]'
                    }`}
                  >
                    10+ Party
                  </button>
                </div>
              </div>

              {/* Date & Service Times */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1F1B1A] uppercase tracking-wider mb-2">
                    Date of Visit
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FFF8F6] text-xs px-3.5 py-2.5 rounded-xl border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] text-[#1F1B1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F1B1A] uppercase tracking-wider mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#FFF8F6] text-xs px-3.5 py-2.5 rounded-xl border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] text-[#1F1B1A]"
                  >
                    <optgroup label="Dinner Service">
                      {dinnerSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Lunch Service">
                      {lunchSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Seating Experience Preference */}
              <div>
                <label className="block text-xs font-bold text-[#1F1B1A] uppercase tracking-wider mb-2">
                  Seating Ambiance
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSeatingArea('main-dining')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      seatingArea === 'main-dining'
                        ? 'border-[#8D4B00] bg-[#FFF1E6] text-[#8D4B00] shadow-xs'
                        : 'border-[#DBC2B0]/60 bg-[#FAF6EE] text-[#554336] hover:bg-[#F6ECEA]'
                    }`}
                  >
                    <p className="font-bold">Main Dining Room</p>
                    <p className="text-[10px] text-[#887364] mt-0.5">Candlelit &amp; grand</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeatingArea('tandoor-counter')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      seatingArea === 'tandoor-counter'
                        ? 'border-[#8D4B00] bg-[#FFF1E6] text-[#8D4B00] shadow-xs'
                        : 'border-[#DBC2B0]/60 bg-[#FAF6EE] text-[#554336] hover:bg-[#F6ECEA]'
                    }`}
                  >
                    <p className="font-bold">Chef&apos;s Live Counter</p>
                    <p className="text-[10px] text-[#887364] mt-0.5">Front-row wok &amp; tandoor</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeatingArea('wok-alcove')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      seatingArea === 'wok-alcove'
                        ? 'border-[#8D4B00] bg-[#FFF1E6] text-[#8D4B00] shadow-xs'
                        : 'border-[#DBC2B0]/60 bg-[#FAF6EE] text-[#554336] hover:bg-[#F6ECEA]'
                    }`}
                  >
                    <p className="font-bold">Private Alcove</p>
                    <p className="text-[10px] text-[#887364] mt-0.5">Intimate celebrations</p>
                  </button>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-[#DBC2B0]/40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#1F1B1A] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#FFF8F6] text-xs px-3.5 py-2.5 rounded-xl border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] text-[#1F1B1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1F1B1A] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FFF8F6] text-xs px-3.5 py-2.5 rounded-xl border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] text-[#1F1B1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1F1B1A] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FFF8F6] text-xs px-3.5 py-2.5 rounded-xl border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] text-[#1F1B1A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1F1B1A] mb-1">
                    Dietary Requirements &amp; Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Allergies (nut, dairy), anniversary champagne, high chair..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-[#FFF8F6] text-xs px-3.5 py-2 rounded-xl border border-[#DBC2B0] focus:outline-none focus:border-[#8D4B00] text-[#1F1B1A]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#8D4B00] hover:bg-[#6B1D2F] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200 cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
                <p className="text-[10px] text-center text-[#887364] mt-2">
                  No cancellation fee up to 2 hours prior to seating. Valet included.
                </p>
              </div>
            </form>
          ) : (
            /* Confirmation Success Screen */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#8D4B00]">
                  Table Confirmed
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1B1A] mt-1">
                  We Await Your Arrival, {fullName || 'Valued Guest'}
                </h3>
                <p className="text-xs text-[#554336] mt-2 max-w-sm mx-auto">
                  A reservation confirmation and calendar pass have been dispatched to{' '}
                  <span className="font-semibold text-[#1F1B1A]">{email || 'your email'}</span>.
                </p>
              </div>

              {/* Reservation Summary Card */}
              <div className="bg-[#FAF6EE] p-5 rounded-2xl border border-[#DBC2B0]/60 max-w-md mx-auto text-left space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#DBC2B0]/40">
                  <span className="text-[#887364]">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#8D4B00] text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#887364]">Date &amp; Time:</span>
                  <span className="font-semibold text-[#1F1B1A]">{date} at {time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#887364]">Party Size:</span>
                  <span className="font-semibold text-[#1F1B1A]">{guests} Guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#887364]">Sanctuary Area:</span>
                  <span className="font-semibold text-[#1F1B1A] capitalize">
                    {seatingArea.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#DBC2B0]/40 text-[11px] text-[#887364]">
                  <span>Location:</span>
                  <span>442 Amber Pavilion Way, NY</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="py-3 px-8 rounded-xl bg-[#8D4B00] text-white text-xs font-bold hover:bg-[#6B1D2F] transition-colors"
                >
                  Done &amp; Return to Dining
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
