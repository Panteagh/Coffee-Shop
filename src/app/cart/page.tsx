"use client"
import CartItem from "@/components/CartItem";
import { useCartStore } from "@/Store/CartStore";
import React from "react";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.name}
            name={item.name}
            price={item.price}
            qty={item.qty}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default CartPage;
