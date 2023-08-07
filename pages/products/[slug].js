import ProductDetails from "@/components/Products/ProductDetails/ProductDetails";
import HomeLayout from "@/layouts/HomeLayout";
import React from "react";

const ProductDetailsPage = () => {
  return (
    <HomeLayout showBreadCrumb={true}>
      <ProductDetails />
    </HomeLayout>
  );
};

export default ProductDetailsPage;
