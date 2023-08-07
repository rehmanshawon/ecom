import React from "react";

const BlogProducts = () => {
  return (
    <section className="section-padding">
      <div className="container pt-25 pb-20">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="section-title mb-20">
              <span>From</span> blog
            </h3>
            <div className="post-list mb-4 mb-lg-0">
              <article className="wow fadeIn animated">
                <div className="d-md-flex d-block">
                  <div className="post-thumb d-flex mr-15">
                    <a className="color-white" href="blog-post-fullwidth.html">
                      <img
                        src="/assets/bg-image.png"
                        alt=""
                        style={{ height: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="entry-meta mb-10 mt-10">
                      <a
                        className="entry-meta meta-2"
                        href="blog-category-fullwidth.html"
                      >
                        <span className="post-in font-x-small">Fashion</span>
                      </a>
                    </div>
                    <h4 className="post-title mb-25 text-limit-2-row">
                      <a href="blog-post-fullwidth.html">
                        Qualcomm is developing a Nintendo Switch-like console,
                        report says
                      </a>
                    </h4>
                    <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                      <div>
                        <span className="post-on">14 April 2021</span>
                        <span className="hit-count has-dot">12M Views</span>
                      </div>
                      <a href="blog-post-right.html">Read More</a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="wow fadeIn animated">
                <div className="d-md-flex d-block">
                  <div className="post-thumb d-flex mr-15">
                    <a className="color-white" href="blog-post-fullwidth.html">
                      <img
                        src="/assets/bg-image.png"
                        alt=""
                        style={{ height: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="entry-meta mb-10 mt-10">
                      <a
                        className="entry-meta meta-2"
                        href="blog-category-fullwidth.html"
                      >
                        <span className="post-in font-x-small">Healthy</span>
                      </a>
                    </div>
                    <h4 className="post-title mb-25 text-limit-2-row">
                      <a href="blog-post-fullwidth.html">
                        Not even the coronavirus can derail 5G's global momentum
                      </a>
                    </h4>
                    <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                      <div>
                        <span className="post-on">14 April 2021</span>
                        <span className="hit-count has-dot">12M Views</span>
                      </div>
                      <a href="blog-post-right.html">Read More</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-img banner-1 wow fadeIn animated">
                  <img
                    src="/assets/bg-image.png"
                    alt=""
                    style={{ height: "400px" }}
                  />
                  <div className="banner-text">
                    <span>Accessories</span>
                    <h4>
                      Save 17% on <br />
                      Autumn Hat
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-img mb-15 wow fadeIn animated">
                  <img
                    src="/assets/bg-image.png"
                    alt=""
                    style={{ height: "100%" }}
                  />
                  <div className="banner-text">
                    <span>Big Offer</span>
                    <h4>
                      Save 20% on <br />
                      Women's socks
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="banner-img banner-2 wow fadeIn animated">
                  <img
                    src="/assets/bg-image.png"
                    alt=""
                    style={{ height: "100%" }}
                  />
                  <div className="banner-text">
                    <span>Smart Offer</span>
                    <h4>
                      Save 20% on <br />
                      Eardrop
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogProducts;
