import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  imgurl: string;
  title: string;
}

function CategoryCard({ imgurl, title }: CategoryCardProps) {
  return (
    <div >
      <Image
        className=" -z-10 rounded-br-lg rounded-tl-lg border shadow"
        src={imgurl}
        alt={title}
        width={250}
        height={250}
      />
      <h2 className="text-amber-950 font-bold text-center">{title}</h2>
    </div>
  );
}

export default CategoryCard;
