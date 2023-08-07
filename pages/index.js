import Banner from "@/components/Home/Banner";
import BestSells from "@/components/Home/BestSells";
import BlogProducts from "@/components/Home/BlogProducts";
import Featured from "@/components/Home/Featured";
import FeaturedBrands from "@/components/Home/FeaturedBrands";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import NewProducts from "@/components/Home/NewProducts";
import PopularCategory from "@/components/Home/PopularCategory";
import PromotionBanner from "@/components/Home/PromotionBanner";
import HomeLayout from "@/layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout title={"Borna Enginering"}>
      <Banner />
      <Featured />
      <FeaturedProducts />
      <section className="banner-2 section-padding pb-0">
        <div className="container">
          <div className="banner-img banner-big wow fadeIn animated f-none">
            <img
              src="/assets/bg-image.png"
              alt=""
              style={{ width: "100%", height: "300px" }}
            />
            <div className="banner-text d-md-block d-none">
              <h4 className="mb-15 mt-40 text-brand">Get Best Quality Steel</h4>
              <h1 className="fw-600 mb-20">
                We're a BSRM <br />
                Authorised Service Provider
              </h1>
              <a href="shop-grid-right.html" className="btn">
                Learn More <i className="fi-rs-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <PopularCategory />
      <NewProducts />
      <FeaturedBrands />
      <BestSells />
      <BlogProducts />
      <section className="mb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="banner-bg wow fadeIn animated"
                style={{
                  backgroundImage: "url('assets/bg-image.png')",
                }}
              >
                <div className="banner-content">
                  <h5 className="text-grey-4 mb-15">Shop Today’s Deals</h5>
                  <h2 className="fw-600">
                    <span className="text-brand">Eid Mubarak</span>. Big Sale Up
                    to 40%
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromotionBanner />
    </HomeLayout>
  );
}
