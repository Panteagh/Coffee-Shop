"use client"
import { Product } from "@/types/Types";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import DivMotionWrapper from "./DivMotionWrapper";
import { useCartStore } from "@/Store/CartStore";

function ProductDetails({ description, image, name, price , id }: Product) {
  const addToCart = useCartStore((state)=> state.addToCart)

  const handleAddToCart = (e:React.MouseEvent) => {
    e.stopPropagation()
    addToCart({ id:id!, name, price: Number(price), image });
  };

  return (
    <DivMotionWrapper>
      <div className="container mx-auto w-[80%] h-auto border rounded-4xl p-5 flex flex-row max-sm:flex-col-reverse mt-16 gap-2.5 shadow">
        <div className="w-1/2 max-sm:w-full flex flex-col justify-between gap-2.5">
          <h2 className="font-extrabold text-amber-950 text-4xl max-md:text-2xl max-sm:text-lg">
            {name}
          </h2>
          <p className="text-amber-950 max-md:text-sm">{description}</p>
          <h4 className="text-amber-950 text-2xl max-md:text-sm font-extrabold">
            ${price}
          </h4>
          <AddToCartButton onClick={handleAddToCart}/>
        </div>

        <div className="w-1/2 max-sm:w-full relative h-64 max-sm:h-52">
          <Image
            className="rounded-2xl object-cover"
            alt={name}
            src={image}
            fill
          />
        </div>
      </div>
    </DivMotionWrapper>
  );
}

export default ProductDetails;
