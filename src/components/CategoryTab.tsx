"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  categories: string[];
}

function CategoryTab({ categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "all";

  const handleChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Tabs
      value={currentCategory}
      onValueChange={handleChange}
      className="w-full mt-8"
    >
      <TabsList className="flex justify-center gap-2 flex-wrap bg-muted rounded-xl">
        {categories.map((cat) => (
          <TabsTrigger key={cat} value={cat}>
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default CategoryTab;
