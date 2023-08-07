import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
};

const PopularCategory = () => {
  return (
    <section className="popular-categories section-padding mt-15 mb-25">
      <div className="container wow fadeIn animated">
        <h3 className="section-title mb-20">
          <span>Popular</span> Categories
        </h3>

        <Slider {...settings}>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">Tiles</a>
            </h5>
          </div>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                {" "}
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">Cement</a>
            </h5>
          </div>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">Steel</a>
            </h5>
          </div>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">Bathroom Fitings</a>
            </h5>
          </div>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">Doors</a>
            </h5>
          </div>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">GI Pipes</a>
            </h5>
          </div>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">PVC Pipe</a>
            </h5>
          </div>
          <div className="card-1">
            <figure className=" img-hover-scale overflow-hidden">
              <a href="shop-grid-right.html">
                <img
                  src="/assets/bg-image.png"
                  alt=""
                  style={{ height: "180px" }}
                />
              </a>
            </figure>
            <h5>
              <a href="shop-grid-right.html">Water Pump</a>
            </h5>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PopularCategory;
