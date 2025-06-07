"use client";
import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

function CategorySection() {
  const categorys = [
    {
      imgurl:
        "https://balancewithjess.com/wp-content/uploads/2022/11/Turkey-Alfredo-Feat.jpg",
      title: "Food",
    },
    {
      imgurl:
        "https://prettysweetblog.com/wp-content/uploads/2021/01/No-bake-chocolate-hazelnut-dessert-in-a-glass-1-2.jpg",
      title: "Dessert ",
    },
    {
      imgurl:
        "https://tastyc.bslthemes.com/coffee/wp-content/webp-express/webp-images/uploads/sites/3/2021/07/st-menu2-700x456.jpg.webp",
      title: "Drink",
    },
  ];
  return (
    <motion.div
      className="container mx-auto my-6 flex flex-col justify-center items-center p-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <h1 className="text-amber-950 font-bold text-4xl max-md:text-2xl mb-11">
        Quick categorization
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {
            categorys.map((item)=>(

                <CategoryCard key={item.title} imgurl={item.imgurl} title={item.title}/>
            ))
        }
        
      </div>
    </motion.div>
  );
}

export default CategorySection;
