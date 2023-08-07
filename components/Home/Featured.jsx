import React from "react";

const Featured = () => {
  return (
    <section className="featured section-padding position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div className="banner-features wow fadeIn animated hover-up">
              <img
                src="assets/frontend/imgs/theme/icons/feature-1.png"
                alt=""
              />
              <h4 className="bg-1">Free Shipping</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div className="banner-features wow fadeIn animated hover-up">
              <img
                src="assets/frontend/imgs/theme/icons/feature-2.png"
                alt=""
              />
              <h4 className="bg-3">Online Order</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div className="banner-features wow fadeIn animated hover-up">
              <img
                src="assets/frontend/imgs/theme/icons/feature-3.png"
                alt=""
              />
              <h4 className="bg-2">Save Money</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div className="banner-features wow fadeIn animated hover-up">
              <img
                src="assets/frontend/imgs/theme/icons/feature-4.png"
                alt=""
              />
              <h4 className="bg-4">Promotions</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div className="banner-features wow fadeIn animated hover-up">
              <img
                src="assets/frontend/imgs/theme/icons/feature-5.png"
                alt=""
              />
              <h4 className="bg-5">Happy Sell</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div className="banner-features wow fadeIn animated hover-up">
              <img
                src="assets/frontend/imgs/theme/icons/feature-6.png"
                alt=""
              />
              <h4 className="bg-6">24/7 Support</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
