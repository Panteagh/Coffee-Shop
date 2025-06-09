import { Product } from "@/types/Types";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import DivMotionWrapper from "./DivMotionWrapper";

function ProductDetails({ description, image, name, price }: Product) {
  return (
    <DivMotionWrapper>
    <div className="container mx-auto w-[80%] h-[400px] max-md:h-[300px] border rounded-4xl p-5 flex mt-16 gap-2.5 shadow">
      <div className="w-[50%] flex flex-col justify-between gap-2.5">
        <h2 className="font-extrabold text-amber-950 text-4xl max-md:font-bold max-md:text-2xl max-sm:text-lg">
          {name}
        </h2>
        <p className="text-amber-950 max-md:text-sm">{description}</p>
        <h4 className="text-amber-950 text-2xl max-md:text-sm font-extrabold">
          ${price}
        </h4>
        <AddToCartButton />
      </div>

      <div className="w-[50%] relative">
        <Image className="rounded-2xl" alt={name} src={image} fill />
      </div>
    </div>
    </DivMotionWrapper>
  );
}

export default ProductDetails;
