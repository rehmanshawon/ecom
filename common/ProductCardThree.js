import Link from "next/link";
import React from "react";

const ProductCardThree = () => {
  return (
    <div className="product-cart-wrap">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <Link href="/products/shop-product">
            <img
              className="default-img"
              src="/assets/bg-image.png"
              alt=""
              style={{ height: "200px" }}
            />
            <img
              className="hover-img"
              src="/assets/bg-image.png"
              alt=""
              style={{ height: "200px" }}
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
          >
            <i className="fi-rs-heart"></i>
          </a>
          <a
            aria-label="Compare"
            className="action-btn small hover-up"
            href="shop-compare.html"
          >
            <i className="fi-rs-shuffle"></i>
          </a>
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="hot">Hot</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">Nulla</a>
        </div>
        <h2>
          <Link href="/products/shop-product">
            Lorem Ipsum is simply dummy text
          </Link>
        </h2>
        <div className="rating-result" title="90%">
          <span>
            <span>70%</span>
          </span>
        </div>
        <div className="product-price">
          <span>৳ 238.85 </span>
          <span className="old-price">৳ 245.8</span>
        </div>
        <div className="product-action-1 show">
          <a
            aria-label="Add To Cart"
            className="action-btn hover-up"
            href="shop-cart.html"
          >
            <i className="fi-rs-shopping-bag-add"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCardThree;
