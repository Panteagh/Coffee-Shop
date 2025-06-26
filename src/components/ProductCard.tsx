"use client";
import { useCartStore } from "@/Store/CartStore";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductProps {
  id: string;
  price: number;
  name: string;
  image: string;
}

function ProductCard({ name, image, price, id }: ProductProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ id, name, price: Number(price), image });
  };

  return (
    <div className="rounded-3xl flex flex-col p-3 border shadow w-[246px]">
      <div className="w-full h-40 relative">
        <Image className="rounded-2xl" src={image} alt={name} fill />
      </div>
      <div className="mt-2">
        <h2 className="text-center font-bold text-amber-950 h-12 flex justify-center items-center">{name}</h2>
        <div className="flex justify-between mt-2">
          <h4 className="text-amber-950 font-extrabold">${price}</h4>
          <button className="cursor-pointer" onClick={handleAddToCart}>
            <CirclePlus size={22} color="#461901" />
          </button>
        </div>
      </div>
    </div>
  );
} 

export default ProductCard;
