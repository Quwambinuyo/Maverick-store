import type { Product } from "../types/types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeFromCart: (id: number) => void;
}
