import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type CartState } from "../types/cartTypes";
import { toast } from "react-toastify";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        toast.success("Item added to cart");
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    price: product.price,
                  }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      increment: (id) => {
        toast.success("item increased");
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decrement: (id) => {
        toast.success("item increased");
        set({
          cart: get()
            .cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      removeFromCart: (id) => {
        toast.success("Item removed from cart");
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
