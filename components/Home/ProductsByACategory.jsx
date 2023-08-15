import ProductCardGeneric from "@/common/ProductCardGeneric";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { productsService, alertService, categoriesService } from "services";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

const ProductsByACategory = ({ category }) => {
  const [products, setProducts] = useState();

  const getProductsByTheCategory = async () => {
    const data = await productsService.getAll();
    //console.log("products", data);
    setFeaturedProducts(data.filter((product) => product.featured === true));
  };

  function getNestedChildren(arr, parent_id) {
    var children = [];
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i].parent_id == parent_id) {
        var grandChildren = getNestedChildren(arr, arr[i].id);
        if (grandChildren.length) {
          arr[i].submenu = grandChildren;
        }
        children.push(arr[i]);
      }
    }
    return children;
  }
  return (
    <section className="section-padding">
      <div className="container wow fadeIn animated">
        <h3 className="section-title mb-20">
          <span>{category.category_name}</span>
        </h3>
        <Slider {...settings}>
          {Array(10)
            .fill()
            .map((item, i) => (
              <ProductCardGeneric category_id={category.id} key={i} />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsByACategory;
