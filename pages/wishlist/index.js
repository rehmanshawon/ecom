import WishLists from "@/components/Wishlist/WishLists";
import HomeLayout from "@/layouts/HomeLayout";
import React from "react";

const WishlistPage = () => {
  return (
    <HomeLayout showBreadCrumb={true} title="Wishlist">
      <WishLists />
    </HomeLayout>
  );
};

export default WishlistPage;
