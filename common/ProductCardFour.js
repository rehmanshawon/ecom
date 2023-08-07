import Link from "next/link";
import React from "react";

const ProductCardFour = () => {
  return (
    <article className="row align-items-center">
      <figure className="col-md-4 mb-0">
        <Link href="/products/shop-product">
          <img src="/assets/bg-image.png" alt="" style={{ height: "70px" }} />
        </Link>
      </figure>
      <div className="col-md-8 mb-0">
        <h4 className="title-small">
          <Link href="/products/shop-product">
            Lorem Ipsum is simply dummy text
          </Link>
        </h4>
        <div className="product-price">
          <span>৳ 238.85 </span>
          <span className="old-price">৳ 245.8</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCardFour;
