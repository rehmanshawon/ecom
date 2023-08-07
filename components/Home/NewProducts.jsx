import ProductCardTwo from "@/common/ProductCardTwo";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

const NewProducts = () => {
  return (
    <section className="section-padding">
      <div className="container wow fadeIn animated">
        <h3 className="section-title mb-20">
          <span>New</span> Arrivals
        </h3>
        <Slider {...settings}>
          {Array(10)
            .fill()
            .map((item, i) => (
              <ProductCardTwo key={i} />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewProducts;
