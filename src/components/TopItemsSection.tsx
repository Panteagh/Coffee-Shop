"use client"
import React from "react";
import DivMotionWrapper from "./DivMotionWrapper";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import ProductCard from "./ProductCard";
import { Product } from "@/types/Types";
import Link from "next/link";
import Container from "./Container";

function TopItemsSection() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const TopItem = products.slice(0, 3);

  return (
    <div>
      <DivMotionWrapper>
        <Container>
          <h1 className="text-amber-950 font-bold text-4xl max-md:text-2xl mb-11">
            Top Items
          </h1>
          <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TopItem.map((item: Product) => ( 
              <Link key={item.id} href={`/menu/${item.id}`}>
                <ProductCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </Link>
            ))}
          </div>
        </Container>
      </DivMotionWrapper>
    </div>
  );
}

export default TopItemsSection;
