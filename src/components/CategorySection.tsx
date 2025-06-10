import React from "react";
import CategoryCard from "./CategoryCard";
import DivMotionWrapper from "./DivMotionWrapper";
import Container from "./Container";

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
    <DivMotionWrapper>
      <Container>
        <h1 className="text-amber-950 font-bold text-4xl max-md:text-2xl mb-11">
          Quick categorization
        </h1>

        <div className="grid grid-cols-3 gap-6 ">
          {categorys.map((item) => (
            <CategoryCard
              key={item.title}
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
