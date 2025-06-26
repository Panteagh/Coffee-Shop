"use client"
import CartItem from "@/components/CartItem";
import { useCartStore } from "@/Store/CartStore";
import React from "react";

function CartPage() {
  const cart = useCartStore((state) => state.items);
  return (
    <>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.name}
            id={item.id}
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
