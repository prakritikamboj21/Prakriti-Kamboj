export type DietaryType = 'all' | 'veg' | 'non-veg';

export type SpiceLevel = 'mild' | 'medium' | 'fiery';

export type MenuCategory =
  | 'all'
  | 'north-indian'
  | 'south-indian'
  | 'indo-chinese'
  | 'tandoor-breads'
  | 'desserts-cellar';

export interface MenuItem {
  id: string;
  name: string;
  category: 'north-indian' | 'south-indian' | 'indo-chinese' | 'tandoor-breads' | 'desserts-cellar';
  price: number;
  isVeg: boolean;
  specialtyBadge?: string;
  description: string;
  spiceLevel: SpiceLevel;
  spiceLabel: string;
  image: string;
  originRegion?: string;
  cookingMethod?: string;
  prepTimeMinutes?: number;
  ingredients?: string[];
  allergens?: string[];
  calories?: number;
  chefNote?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customSpice?: SpiceLevel;
  specialInstructions?: string;
}

export interface ReservationDetails {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'main-dining' | 'tandoor-counter' | 'wok-alcove' | 'terrace';
  occasion?: string;
  specialRequests?: string;
}
