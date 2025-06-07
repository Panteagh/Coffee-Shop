"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Titlepage from "@/components/Titlepage";
import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";

interface Product{
  price: string
  name: string
  image: string
  description: string
  category: string
  id: string
}

function page() {

  const {data , isLoading , error} = useQuery({
    queryKey:["product"],
    queryFn: getProducts,
  })

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div className="border-b-2">
      <Titlepage title="Menu" />
      </div>
      <div>
        {/* tab */}
      </div>

      <div className="mt-20 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">

      {
        data?.map((item : Product)=>(
          <ProductCard key={item.id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
    
     
      </div>
    </div>
  );
}

export default page;
