import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductCardOne = ({ product, tab }) => {
  if (!product) return null;

  function calculateRating(ratingArray) {
    const ratings = ratingArray.map((rating) => rating.Rating_value);
    const sum = ratings?.reduce((partialSum, a) => partialSum + a, 0);
    const totalRating = ratings?.length * 5;
    return (sum / totalRating) * 100;
  }
  console.log("new", tab, product);
  return (
    <div className="product-cart-wrap mb-30">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <Link href={`/products/${product.sku}`}>
            <Image
              src={product?.thumbnail}
              width={300}
              height={300}
              alt="Picture of the product"
              className="hover-img"
            />
            <Image
              src={product?.thumbnail}
              width={300}
              height={300}
              alt="Picture of the product"
              className="default-img"
            />
            {/* <img
              className="hover-img"
              src="/assets/bg-image.png"
              alt=""
              style={{ height: "300px" }}
            /> */}
            {/* <img
              className="default-img"
              src="/assets/bg-image.png"
              alt=""
              style={{ height: "300px" }}
            /> */}
          </Link>
        </div>
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn hover-up"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fi-rs-eye"></i>
          </a>
          <a
            aria-label="Add To Wishlist"
            className="action-btn hover-up"
            href="shop-wishlist.html"
          >
            <i className="fi-rs-heart"></i>
          </a>
          <a
            aria-label="Compare"
            className="action-btn hover-up"
            href="shop-compare.html"
          >
            <i className="fi-rs-shuffle"></i>
          </a>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">{product.Category.category_name} </a>
        </div>
        <h2>
          <Link href={`/products/${product.sku}`}>{product.title}</Link>
        </h2>
        <div className="rating-result" title="90%">
          <span>
            <span>{calculateRating(product.Ratings).toFixed(2) + "%"}</span>
          </span>
        </div>
        <div className="product-price">
          <span>৳ {product.unit_price} </span>
          <span className="old-price">
            ৳ {Number(product.unit_price) + Number(product.discount_amount)}
          </span>
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

export default ProductCardOne;
