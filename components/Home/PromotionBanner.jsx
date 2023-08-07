import ProductCardFour from "@/common/ProductCardFour";
import React from "react";

const PromotionBanner = () => {
  return (
    <section className="mb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <div className="banner-img wow fadeIn animated mb-md-4 mb-lg-0">
              <img
                src="/assets/bg-image.png"
                alt=""
                style={{ height: "325px" }}
              />
              <div className="banner-text">
                <span>Shoes Zone</span>
                <h4>
                  Save 17% on <br />
                  All Items
                </h4>
                <a href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">
              Deals & Outlet
            </h4>
            <div className="product-list-small wow fadeIn animated">
              {Array(3)
                .fill()
                .map((_, i) => (
                  <ProductCardFour key={i} />
                ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">
              Top Selling
            </h4>
            <div className="product-list-small wow fadeIn animated">
              {Array(3)
                .fill()
                .map((_, i) => (
                  <ProductCardFour key={i} />
                ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">
              Hot Releases
            </h4>
            <div className="product-list-small wow fadeIn animated">
              {Array(3)
                .fill()
                .map((_, i) => (
                  <ProductCardFour key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
