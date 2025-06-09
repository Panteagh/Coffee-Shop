import ProductDetails from "@/components/ProductDetails";
import { getProduct } from "@/lib/api";
import React from "react";

interface ProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Product({ params }: ProductProps) {
  const { id } = await params;

  const data = await getProduct(id);

  return (
    <div>
      <h1>
      <ProductDetails key={data.id} name={data.name} price={data.price} description={data.description} image={data.image}/>
      </h1>
    </div>
  );
}

export default Product;
