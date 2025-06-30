import React from "react";
import CategoryCard from "./CategoryCard";
import DivMotionWrapper from "./DivMotionWrapper";
import Container from "./Container";

function CategorySection() {
  const categories = [
    {
      imgurl:
        "https://balancewithjess.com/wp-content/uploads/2022/11/Turkey-Alfredo-Feat.jpg",
      title: "Food",
      href: "/menu?category=food",
    },
    {
      imgurl:
        "https://prettysweetblog.com/wp-content/uploads/2021/01/No-bake-chocolate-hazelnut-dessert-in-a-glass-1-2.jpg",
      title: "Dessert ",
      href: "/menu?category=dessert",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozsVYVUyHoVj-NXRdqLeUkGwJbG8TXh3jyQ&s",
      title: "Drink",
      href: "/menu?category=drink",
    },
  ];

  return (
    <DivMotionWrapper>
      <Container>
        <h1 className="text-amber-950 font-bold text-4xl max-md:text-2xl mb-11">
          Quick categorization
        </h1>

        <div className="grid grid-cols-3 gap-6 ">
          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              href={item.href}
              imgurl={item.imgurl}
              title={item.title}
            />
          ))}
        </div>
      </Container>
    </DivMotionWrapper>
  );
}

export default CategorySection;
