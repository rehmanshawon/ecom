import ProductCardThree from "@/common/ProductCardThree";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

const BestSells = () => {
  return (
    <section className="bg-grey-9 section-padding">
      <div className="container pt-25 pb-25">
        <div className="heading-tab d-flex">
          <div className="heading-tab-left wow fadeIn animated">
            <h3 className="section-title mb-20">
              <span>Monthly</span> Best Sell
            </h3>
          </div>
          <div className="heading-tab-right wow fadeIn animated">
            <ul
              className="nav nav-tabs right no-border"
              id="myTab-1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="nav-tab-one-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="true"
                >
                  Featured
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-two-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="false"
                >
                  Popular
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-three-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  New added
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex">
            <div className="banner-img style-2 wow fadeIn animated">
              <img
                src="/assets/bg-image.png"
                alt=""
                style={{ height: "100%" }}
              />
              <div className="banner-text">
                <span>Woman Area</span>
                <h4 className="mt-5">
                  Save 17% on <br />
                  Clothing
                </h4>
                <a href="shop-grid-right.html" className="text-white">
                  Shop Now <i className="fi-rs-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div
              className="tab-content wow fadeIn animated"
              id="myTabContent-1"
            >
              <div
                className="tab-pane fade show active"
                id="tab-one-1"
                role="tabpanel"
                aria-labelledby="tab-one-1"
              >
                <Slider {...settings}>
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <ProductCardThree key={i} />
                    ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="tab-two-1"
                role="tabpanel"
                aria-labelledby="tab-two-1"
              >
                <Slider {...settings}>
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <ProductCardThree key={i} />
                    ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="tab-three-1"
                role="tabpanel"
                aria-labelledby="tab-three-1"
              >
                <Slider {...settings}>
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <ProductCardThree key={i} />
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSells;
