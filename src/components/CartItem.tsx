import React from "react";
import DivMotionWrapper from "./DivMotionWrapper";
import Image from "next/image";
import SimpleButton from "./SimpleButton";
import { Trash } from "lucide-react";
import { useCartStore } from "@/Store/CartStore";

type CartItemProps = {
  name: string;
  id: string;
  price: number;
  image: string;
  qty: number;
};

function CartItem({ name, price, image, qty, id }: CartItemProps) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  console.log(`CartItem: ${name}, ID: ${id}, Qty: ${qty}`);

  return (
    <DivMotionWrapper>
      <div className="container mx-auto w-[80%] h-auto border rounded-4xl p-5 flex flex-row-reverse max-sm:flex-col-reverse mt-16 gap-6 shadow">
        <div className="w-9/12 max-sm:w-full flex flex-col justify-around gap-2.5">
          <h2 className="font-extrabold text-amber-950 text-4xl max-md:text-2xl max-sm:text-lg">
            {name}
          </h2>
          <div className="flex gap-7 justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
            <h4 className="text-amber-950 text-2xl max-md:text-sm font-extrabold">
              ${price.toFixed(2)}
            </h4>
            <div className="flex gap-6 justify-center items-center">
              <SimpleButton icon={"+"} onClick={() => increaseQty(id)} />
              <span className="text-amber-950 text-xl max-md:text-sm font-bold">
                {qty}
              </span>
              <SimpleButton icon={"-"} onClick={() => decreaseQty(id)} />
            </div>
            <SimpleButton icon={<Trash size={20} className="my-2"/>} onClick={() => removeFromCart(id)} />
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
  );
}

export default CartItem;
