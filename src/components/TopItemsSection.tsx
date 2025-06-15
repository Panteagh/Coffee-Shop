"use client";
import React from "react";
import DivMotionWrapper from "./DivMotionWrapper";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/Types";
import Link from "next/link";
import Container from "./Container";
import dynamic from "next/dynamic";
import Skeleton from "./Skeleton";

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <Skeleton />,
});

function TopItemsSection() {
  const { data: products = [], isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isError) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <p className="text-lg text-red-500 font-semibold">Error</p>
      </div>
    );
  }

  const TopItem = products.slice(0, 3);

  return (
    <div>
      <DivMotionWrapper>
        <Container>
          <h1 className="text-amber-950 font-bold text-4xl max-md:text-2xl mb-11">
            Top Items
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TopItem.map((item: Product) => (
              <Link key={item.id} href={`/menu/${item.id}`}>
                <ProductCard
                  key={item.id}
                  id={item.id as string}
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
