import ProductsByACategory from "@/components/Home/ProductsByACategory";
import HomeLayout from "@/layouts/HomeLayout";
import React, { useEffect, useState } from "react";
import { alertService, categoriesService } from "services";

const ProductByCategories = () => {
  const [categories, setCategories] = useState();

  const getCategories = async () => {
    const data = await categoriesService.getAll();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);
  return (
    <HomeLayout showBreadCrumb={true}>
      {categories?.length > 0 &&
        categories.map((category, i) => (
          <ProductsByACategory category={category} key={i} />
        ))}
    </HomeLayout>
  );
};

export default ProductByCategories;
