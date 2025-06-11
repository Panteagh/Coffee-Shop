import { ShoppingCart } from "lucide-react";
import React from "react";

function AddToCartButton() {
  return (
    <button className=" cursor-pointer bg-gradient-to-b from-amber-600 to-amber-800 shadow-[#9f4e13] px-6 py-3 rounded-xl border-[1px] border-amber-600 text-white font-medium group">
      <div className="flex justify-center items-center overflow-hidden">
        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-center">
          <ShoppingCart />
        </p>
        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          <ShoppingCart />
        </p>
      </div>
    </button>
  );
}

export default AddToCartButton;
