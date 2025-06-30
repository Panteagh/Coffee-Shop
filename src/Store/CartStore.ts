import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, "qty">, quantityToAdd?: number) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product, quantityToAdd = 1) => {
        let message = "";
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );
          let newItems: CartItem[];

          if (existingItem) {
            newItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, qty: item.qty + quantityToAdd }
                : item
            );
            message = `The number of  "${product.name}" increased`;
          } else {
            newItems = [...state.items, { ...product, qty: quantityToAdd }];
            message = `"${product.name}" Added successfully`;
          }
          return { items: newItems };
        });
        toast.success(message);
      },

      removeFromCart: (id) => {
        let removedItemName = "";
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === id);
          if (itemToRemove) {
            removedItemName = itemToRemove.name;
          }
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
        toast.error(`"${removedItemName}" Removed from cart`);
      },

      increaseQty: (id) => {
        set((state) => {
          const newItems = state.items.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          );
          return { items: newItems };
        });
        toast.success("The number increased");
      },

      decreaseQty: (id) => {
        set((state) => {
          const newItems = state.items
            .map((item) =>
              item.id === id ? { ...item, qty: item.qty - 1 } : item
            )
            .filter((item) => item.qty > 0);

          return { items: newItems };
        });
        toast.success("The number decreased");
      },

      clearCart: () => {
        set({ items: [] });
        toast.error("Shopping cart is empty.");
      },

      getTotalItems: () => get().items.reduce((sum, item) => sum + item.qty, 0),
      getTotalPrice: () =>
        get().items.reduce((sum, item) => sum + item.price * item.qty, 0),
    }),
    {
      name: "coffee-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
