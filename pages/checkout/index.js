import Checkout from "@/components/Checkout/Checkout";
import HomeLayout from "@/layouts/HomeLayout";
import React from "react";

const CheckoutPage = () => {
  return (
    <HomeLayout showBreadCrumb={true}>
      <Checkout />
    </HomeLayout>
  );
};

export default CheckoutPage;
