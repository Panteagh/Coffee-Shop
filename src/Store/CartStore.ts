import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  price: number;
  name: string;
  image: string;
  qty: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const cart = get().cart;
        const existing = cart.find((product) => product.id === item.id);

        if (existing) {
          set({
            cart: cart.map((i) =>
              i.id === item.id ? { ...i, qty: i.qty + 1 } : i
            ),
          });
          toast.success("Item quantity increased");
          console.log(cart);
          
        } else {
          set({
            cart: [...cart, { ...item, qty: 1 }],
          });
          toast.success("Item successfully added to cart.");
        }
      },
      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },
      increaseQty: (id) => {
        set({
          cart: get().cart.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        });
      },
      decreaseQty: (id) => {
        set({
          cart: get()
            .cart.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
            .filter((i) => i.qty > 0),
        });
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "coffee-cart",
    }
  )
);
