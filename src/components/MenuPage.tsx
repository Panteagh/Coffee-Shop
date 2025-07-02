"use client";
import Titlepage from "@/components/Titlepage";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/Types";
import DivMotionWrapper from "@/components/DivMotionWrapper";
import CategoryTab from "@/components/CategoryTab";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton";
import ErrorMessage from "@/components/ErrorMessage";
import { useRouter } from "next/router";

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <Skeleton />,
});

function MenuPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
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
    return <ErrorMessage message="Failed to fetch products from the server." />;
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
             <div
             key={item.id}
             className="cursor-pointer"
             onClick={() => router.push(`/menu/${item.id}`)} // 👈 navigation دستی فقط وقتی کل کارت کلیک شد
           >
             <ProductCard
               id={item.id as string}
               image={item.image}
               name={item.name}
               price={item.price}
             />
           </div>
         
          ))}
        </div>
      </DivMotionWrapper>
    </div>
  );
}

export default MenuPage;
