import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
};

const FeaturedBrands = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h3 className="section-title mb-20 wow fadeIn animated">
          <span>Featured</span> Brands
        </h3>
        <Slider {...settings}>
          <div className="brand-logo">
            <img
              className="img-grey-hover"
              src="assets/frontend/imgs/banner/brand-1.png"
              alt=""
            />
          </div>
          <div className="brand-logo">
            <img
              className="img-grey-hover"
              src="assets/frontend/imgs/banner/brand-2.png"
              alt=""
            />
          </div>
          <div className="brand-logo">
            <img
              className="img-grey-hover"
              src="assets/frontend/imgs/banner/brand-3.png"
              alt=""
            />
          </div>
          <div className="brand-logo">
            <img
              className="img-grey-hover"
              src="assets/frontend/imgs/banner/brand-4.png"
              alt=""
            />
          </div>
          <div className="brand-logo">
            <img
              className="img-grey-hover"
              src="assets/frontend/imgs/banner/brand-5.png"
              alt=""
            />
          </div>
          <div className="brand-logo">
            <img
              className="img-grey-hover"
              src="assets/frontend/imgs/banner/brand-6.png"
              alt=""
            />
          </div>
          <div className="brand-logo">
            <img
              className="img-grey-hover"
              src="assets/frontend/imgs/banner/brand-3.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedBrands;
