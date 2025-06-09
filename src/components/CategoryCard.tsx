import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  imgurl: string;
  title: string;
}

function CategoryCard({ imgurl, title }: CategoryCardProps) {
  return (
    <div>
      <div  className="relative h-[200px] w-[230px] max-md:h-[150px] max-md:w-[150px] max-sm:w-[100px]">
        <Image
          className=" -z-10 rounded-br-lg rounded-tl-lg border shadow"
          src={imgurl}
          alt={title}
          fill
        />
      </div>
      <h2 className="text-amber-950 font-bold text-center">{title}</h2>
    </div>
  );
}

export default CategoryCard;
