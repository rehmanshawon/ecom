import ProductCardOne from "@/common/ProductCardOne";
import { productsService, alertService, categoriesService } from "services";
import React, { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [featuredProducts, setFeaturedProducts] = useState();
  const [newProducts, setNewProducts] = useState();
  const [popularProducts, setPopularProducts] = useState();

  const getFeaturedProducts = async () => {
    const data = await productsService.getAll();
    console.log("products", data);
    setFeaturedProducts(data.filter((product) => product.featured === true));
  };

  const getNewProducts = async (arrivalDay) => {
    const data = await productsService.getAll();

    const startDay = getPreviousDaysDate(arrivalDay);
    const newData = filteredData(data, "createdAt", startDay, new Date());
    console.log("products", newData);
    setNewProducts(newData);
  };

  const filteredData = (data, key, startDate, endDate) => {
    startDate = new Date(startDate).getTime();
    endDate = new Date(endDate).getTime();

    return data.filter((d) => {
      let time = new Date(d[key]).getTime();
      return startDate < time && time < endDate;
    });
  };

  function getPreviousDaysDate(day) {
    const now = new Date();

    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - day);
  }

  useEffect(() => {
    getFeaturedProducts();
    getNewProducts(7);
  }, []);

  return (
    <section className="product-tabs section-padding position-relative wow fadeIn animated">
      <div className="container ">
        <div className="tab-header">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="nav-tab-one"
                data-bs-toggle="tab"
                data-bs-target="#tab-one"
                type="button"
                role="tab"
                aria-controls="tab-one"
                aria-selected="true"
                onClick={(e) => {
                  setActiveTab(1);
                }}
              >
                Featured
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-two"
                data-bs-toggle="tab"
                data-bs-target="#tab-two"
                type="button"
                role="tab"
                aria-controls="tab-two"
                aria-selected="false"
                onClick={(e) => {
                  setActiveTab(2);
                }}
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-three"
                data-bs-toggle="tab"
                data-bs-target="#tab-three"
                type="button"
                role="tab"
                aria-controls="tab-three"
                aria-selected="false"
                onClick={(e) => {
                  setActiveTab(3);
                  console.log("here");
                }}
              >
                New added
              </button>
            </li>
          </ul>
          <a href="#" className="view-more d-none d-md-flex">
            View More<i className="fi-rs-angle-double-small-right"></i>
          </a>
        </div>
        <div className="tab-content wow fadeIn animated" id="myTabContent">
          {activeTab === 1 && (
            <div
              className="tab-pane fade show active"
              id="tab-one"
              role="tabpanel"
              aria-labelledby="tab-one"
            >
              <div className="row product-grid-4">
                {featuredProducts?.length > 0 &&
                  featuredProducts.map((product, i) => (
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6" key={i}>
                      <ProductCardOne product={product} tab={activeTab} />
                    </div>
                  ))}
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div
              className="tab-pane fade show active"
              id="tab-two"
              role="tabpanel"
              aria-labelledby="tab-two"
            >
              <div className="row product-grid-4">
                {featuredProducts?.length > 0 &&
                  featuredProducts.map((product, i) => (
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6" key={i}>
                      <ProductCardOne product={product} tab={activeTab} />
                    </div>
                  ))}
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div
              className="tab-pane fade show active"
              id="tab-three"
              role="tabpanel"
              aria-labelledby="tab-three"
            >
              <div className="row product-grid-4">
                {newProducts?.length > 0 &&
                  newProducts.map((product, i) => (
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6" key={i}>
                      <ProductCardOne product={product} tab={activeTab} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
