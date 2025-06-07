import Image from "next/image";
import React from "react";

interface ProductProps {
  price: string;
  name: string;
  image: string;
}

function ProductCard({ name, image, price }: ProductProps) {
  return (
    <div className="rounded flex flex-col p-1.5 border shadow  ">
      <div className="w-full h-40 relative">
        <Image className="rounded" src={image} alt={name} fill />
      </div>
      <div>
        <h2>{name}</h2>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default ProductCard;
