import { ShoppingCart } from "lucide-react";
import React from "react";

function AddToCartButton() {
  return (
    <div className="flex items-center justify-center">
      <button className="w-2/3 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-amber-800 before:to-amber-100 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 text-center">
        <h2 className="flex justify-center items-center">
          <ShoppingCart />
        </h2>
      </button>
    </div>
  );
}

export default AddToCartButton;
