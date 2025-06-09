"use client";
import Titlepage from "@/components/Titlepage";
import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/Types";
import DivMotionWrapper from "@/components/DivMotionWrapper";
import CategoryTab from "@/components/CategoryTab";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/Spinner";

function MenuPage() {
  const searchParams = useSearchParams();
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <p className="text-lg text-red-500 font-semibold">
          Error
        </p>
      </div>
    );
  }

  const selectedCategory = searchParams.get("category") || "all";

  const categories = [
    "all",
    ...(Array.from(
      new Set(products.map((p: Product) => p.category))
    ) as string[]),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item: Product) => item.category === selectedCategory);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div className="border-b-2">
        <Titlepage title="Menu" />
      </div>
      <div>
        <CategoryTab categories={categories} />
      </div>
      <DivMotionWrapper>
        <div className="mt-12 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3.5">
          {filteredProducts.map((item: Product) => (
            <ProductCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </DivMotionWrapper>
    </div>
  );
}

export default MenuPage;
