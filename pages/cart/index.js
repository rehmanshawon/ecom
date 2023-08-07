import Cart from "@/components/Cart/Cart";
import HomeLayout from "@/layouts/HomeLayout";
import React from "react";

const CartPage = () => {
  return (
    <HomeLayout showBreadCrumb={true}>
      <Cart />
    </HomeLayout>
  );
};

export default CartPage;
