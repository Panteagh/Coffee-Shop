"use client";
import React from "react";
import DivMotionWrapper from "./DivMotionWrapper";
import Link from "next/link";
import Container from "./Container";
import dynamic from "next/dynamic";
import Skeleton from "./Skeleton";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/Types";
import Spinner from "./Spinner";
import ErrorFallback from "./ErrorFallback";

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <Skeleton />,
});

function TopItemsSection() {
  const {
    data: products = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center ">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <ErrorFallback />;
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
