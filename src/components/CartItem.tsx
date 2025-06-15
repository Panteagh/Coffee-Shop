import React from "react";
import DivMotionWrapper from "./DivMotionWrapper";
import Image from "next/image";
import SimpleButton from "./SimpleButton";

type CartItemProps = {
  price: string;
  name: string;
  image: string;
  qty: number;
};

function CartItem({ name, price, image, qty }: CartItemProps) {
  return (
    <div>
      <DivMotionWrapper>
        <div className="container mx-auto w-[80%] h-auto border rounded-4xl p-5 flex flex-row-reverse max-sm:flex-col-reverse mt-16 gap-6 shadow">
          <div className="w-9/12 max-sm:w-full flex flex-col justify-around gap-2.5">
            <h2 className="font-extrabold text-amber-950 text-4xl max-md:text-2xl max-sm:text-lg">
              {name}
            </h2>
            <div className="flex gap-7 justify-between">
              <h4 className="text-amber-950 text-2xl max-md:text-sm font-extrabold">
                ${price}
              </h4>
              <div className="flex gap-6 justify-center items-center">
                <SimpleButton lable={"+"} />
                <span className="text-amber-950 text-xl max-md:text-sm font-bold">
                  {qty}
                </span>
                <SimpleButton lable={"-"} />
              </div>
            </div>
          </div>

          <div className="w-1/3 max-sm:w-full relative h-40 max-sm:h-52">
            <Image
              className="rounded-2xl object-cover"
              alt={name}
              src={image}
              fill
            />
          </div>
        </div>
      </DivMotionWrapper>
    </div>
  );
}

export default CartItem;
