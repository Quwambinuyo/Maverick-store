import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type CartState } from "../types/cartTypes";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (!existing) {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      increment: (id) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decrement: (id) => {
        set({
          cart: get()
            .cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
