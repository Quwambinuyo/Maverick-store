import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type CartState } from "../types/cartTypes";
import { toast } from "react-toastify";

const ADD_TO_CART_TOAST_ID = "add-to-cart-toast";
const REMOVE_FROM_CART_TOAST_ID = "remove-from-cart-toast";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      logisticPrice: 0,

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);

        toast.success("Item added to cart", {
          toastId: ADD_TO_CART_TOAST_ID,
          className: "custom-toast border-l-4 border-primary-color",
        });

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
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decrement: (id) => {
        const cart = get().cart;
        const item = cart.find((i) => i.id === id);

        if (!item) return;

        if (item.quantity === 1) {
          toast.success("Item removed from cart", {
            className: "custom-toast border-l-4 border-primary-color",
            toastId: REMOVE_FROM_CART_TOAST_ID,
          });
          set({
            cart: cart.filter((i) => i.id !== id),
          });
        } else {
          set({
            cart: cart.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        }
      },

      removeFromCart: (id) => {
        toast.success("Item removed from cart", {
          toastId: REMOVE_FROM_CART_TOAST_ID,
          className: "custom-toast border-l-4 border-secondary-color",
        });
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      clearFromCart: () => {
        set({ cart: [], logisticPrice: 0 });
      },

      setLogisticPrice: (price: number) => {
        set({ logisticPrice: price });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
