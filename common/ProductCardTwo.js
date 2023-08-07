import Link from "next/link";
import React from "react";

const ProductCardTwo = () => {
  return (
    <div className="product-cart-wrap small hover-up">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <Link href="/products/shop-product">
            <img
              className="default-img"
              src="/assets/bg-image.png"
              alt=""
              style={{ height: "250px" }}
            />
            <img
              className="hover-img"
              src="/assets/bg-image.png"
              alt=""
              style={{ height: "250px" }}
            />
          </Link>
        </div>
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn small hover-up"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fi-rs-eye"></i>
          </a>
          <a
            aria-label="Add To Wishlist"
            className="action-btn small hover-up"
            href="shop-wishlist.html"
            tabIndex="0"
          >
            <i className="fi-rs-heart"></i>
          </a>
          <a
            aria-label="Compare"
            className="action-btn small hover-up"
            href="shop-compare.html"
            tabIndex="0"
          >
            <i className="fi-rs-shuffle"></i>
          </a>
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="hot">Hot</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <h2>
          <Link href="/products/shop-product">Lorem ipsum dolor</Link>
        </h2>
        <div className="rating-result" title="90%">
          <span></span>
        </div>
        <div className="product-price">
          <span>৳ 238.85 </span>
          <span className="old-price">৳ 245.8</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
