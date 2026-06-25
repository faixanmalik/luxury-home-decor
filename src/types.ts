export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  features: string[];
  specs: { [key: string]: string };
  materials: string[];
  colors: { name: string; hex: string }[];
}

export interface CartItem {
  id: string; // Unique instance ID (product.id + material + color)
  product: Product;
  quantity: number;
  selectedMaterial: string;
  selectedColor: { name: string; hex: string };
}

export interface ConsultationBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  stylePreference: string;
  notes?: string;
}
