import ProductCardFour from "@/common/ProductCardFour";
import ProductCardThree from "@/common/ProductCardThree";
import ProductCardTwo from "@/common/ProductCardTwo";
import React from "react";
import { productsService, alertService, categoriesService } from "services";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ImageSlider from "@/components/ImageSlider";
import { cartService } from "@/services/cart.service";

const ProductDetails = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState();
  const [categories, setCategories] = useState();
  const [quantity, setQuantity] = useState(1);

  const getProductDetails = async () => {
    if (router.query.slug !== undefined) {
      const data = await productsService.getById(router.query.slug);
      console.log("product", data);
      setProductDetails(data);
    }
  };

  const getCategories = async () => {
    const data = await categoriesService.getAll();
    setCategories(data);
  };

  const addToCart = async () => {
    const cartItem = {
      id: productDetails.id,
      imageThumb: productDetails.thumbnail,
      title: productDetails.title,
      short_description: productDetails.short_description,
      unit_price: Number(productDetails.unit_price),
      quantity: Number(quantity),
      discount_amount: Number(productDetails.discount_amount),
      subtotal:
        (Number(productDetails.unit_price) -
          Number(productDetails.discount_amount)) *
        quantity,
    };
    console.log("cartItem", cartItem);
    await cartService.addItem(cartItem);
  };

  useEffect(() => {
    getProductDetails();
    getCategories();
  }, [router.query.slug]);

  return (
    <section className="mt-50 mb-50" style={{ transform: "none" }}>
      <div className="container" style={{ transform: "none" }}>
        <div className="row" style={{ transform: "none" }}>
          <div className="col-lg-9">
            <div className="product-detail accordion-detail">
              <div className="row mb-50">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-gallery">
                    <span className="zoom-icon">
                      <i className="fi-rs-search"></i>
                    </span>

                    <div>
                      {/* <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: "1",
                            width: "7065px",
                            transform: "translate3d(-471px, 0px, 0px)",
                          }}
                        >
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="-1"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-7.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-current slick-active"
                            data-slick-index="0"
                            aria-hidden="false"
                            style={{ width: "471px" }}
                            tabIndex="0"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-2.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide"
                            data-slick-index="1"
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-1.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide"
                            data-slick-index="2"
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-3.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide"
                            data-slick-index="3"
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-4.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide"
                            data-slick-index="4"
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-5.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide"
                            data-slick-index="5"
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-6.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide"
                            data-slick-index="6"
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-7.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="7"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-2.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="8"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-1.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="9"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-3.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="10"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-4.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="11"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-5.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="12"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-6.jpg"
                              alt="product image"
                            />
                          </figure>
                          <figure
                            className="border-radius-10 slick-slide slick-cloned"
                            data-slick-index="13"
                            id=""
                            aria-hidden="true"
                            style={{ width: "471px" }}
                            tabIndex="-1"
                          >
                            <img
                              src="/assets/frontend/imgs/shop/product-16-7.jpg"
                              alt="product image"
                            />
                          </figure>
                        </div>
                      </div> */}
                      <div>
                        <ImageSlider
                          images={
                            productDetails?.ProductImages.length > 0 &&
                            productDetails?.ProductImages.map(
                              (image) => image.image_path
                            )
                          }
                          title={"Image Gallery"}
                        />
                      </div>
                    </div>

                    {/* <div className="slider-nav-thumbnails pl-15 pr-15 slick-initialized slick-slider">
                      imgs
                      
                    </div> */}
                  </div>

                  <div className="social-icons single-share">
                    <ul className="text-grey-5 d-inline-block">
                      <li>
                        <strong className="mr-10">Share this:</strong>
                      </li>
                      <li className="social-facebook">
                        <a href="#">
                          <img
                            src="/assets/frontend/imgs/theme/icons/icon-facebook.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="social-twitter">
                        {" "}
                        <a href="#">
                          <img
                            src="/assets/frontend/imgs/theme/icons/icon-twitter.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="social-instagram">
                        <a href="#">
                          <img
                            src="/assets/frontend/imgs/theme/icons/icon-instagram.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="social-linkedin">
                        <a href="#">
                          <img
                            src="/assets/frontend/imgs/theme/icons/icon-pinterest.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-info">
                    <h2 className="title-detail">{productDetails?.title}</h2>
                    <p>Post: {router.query.slug}</p>
                    <div className="product-detail-rating">
                      <div className="pro-details-brand">
                        <span>
                          {" "}
                          Brands:{" "}
                          <a href="shop-grid-right.html">
                            {productDetails?.brand}
                          </a>
                        </span>
                      </div>
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          ({productDetails?.Ratings.length} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="clearfix product-price-cover">
                      <div className="product-price primary-color float-left">
                        <ins>
                          <span className="text-brand">
                            ৳ {productDetails?.unit_price}
                          </span>
                        </ins>
                        <ins>
                          <span className="old-price font-md ml-15">
                            ৳{" "}
                            {Number(productDetails?.unit_price) +
                              Number(productDetails?.discount_amount)}
                          </span>
                        </ins>
                        <span className="save-price  font-md color3 ml-15">
                          {productDetails?.discount_amount} Off
                        </span>
                      </div>
                    </div>
                    <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                    <div className="short-desc mb-30">
                      <p>{productDetails?.short_description}</p>
                    </div>
                    <div className="product_sort_info font-xs mb-30">
                      <ul>
                        <li className="mb-10">
                          <i className="fi-rs-crown mr-5"></i>{" "}
                          {productDetails?.warranty}
                        </li>
                        <li className="mb-10">
                          <i className="fi-rs-refresh mr-5"></i> 30 Day Return
                          Policy
                        </li>
                        <li>
                          <i className="fi-rs-credit-card mr-5"></i> Cash on
                          Delivery available
                        </li>
                      </ul>
                    </div>
                    {/* <div className="attr-detail attr-color mb-15">
                      <strong className="mr-10">Color</strong>
                      <ul className="list-filter color-filter">
                        <li>
                          <a href="#" data-color="Red">
                            <span className="product-color-red"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Yellow">
                            <span className="product-color-yellow"></span>
                          </a>
                        </li>
                        <li className="active">
                          <a href="#" data-color="White">
                            <span className="product-color-white"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Orange">
                            <span className="product-color-orange"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Cyan">
                            <span className="product-color-cyan"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Green">
                            <span className="product-color-green"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Purple">
                            <span className="product-color-purple"></span>
                          </a>
                        </li>
                      </ul>
                    </div> */}

                    {productDetails?.attributes &&
                      Object.keys(productDetails?.attributes).map(
                        (attribute, index) => (
                          <div
                            className="attr-detail attr-size mb-3"
                            key={index}
                          >
                            <strong className="mr-10">
                              {attribute}
                              <ul className="list-filter size-filter font-big">
                                {productDetails.attributes[attribute].map(
                                  (item, i) => (
                                    <li className="mx-1" key={i}>
                                      <a href="#">
                                        {item.attribute_value}{" "}
                                        {item.attribute_value_unit}
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </strong>
                          </div>
                        )
                      )}

                    <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                    <div className="detail-extralink">
                      <div className="detail-qty border radius">
                        <a
                          // href="#"
                          className="qty-down"
                          onClick={(e) => {
                            setQuantity((qty) => {
                              if (qty > 1) qty = qty - 1;
                              return qty;
                            });
                          }}
                        >
                          <i className="fi-rs-angle-small-down"></i>
                        </a>
                        <span className="qty-val">{quantity}</span>
                        <a
                          className="qty-up"
                          onClick={(e) => {
                            setQuantity((qty) => qty + 1);
                          }}
                        >
                          <i className="fi-rs-angle-small-up"></i>
                        </a>
                      </div>
                      <div className="product-extra-link2">
                        <button
                          //type="submit"
                          className="button button-add-to-cart"
                          onClick={addToCart}
                        >
                          Add to cart
                        </button>
                        <a
                          aria-label="Add To Wishlist"
                          className="action-btn hover-up"
                          href="shop-wishlist.html"
                        >
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a
                          aria-label="Compare"
                          className="action-btn hover-up"
                          href="shop-compare.html"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </a>
                      </div>
                    </div>
                    <ul className="product-meta font-xs color-grey mt-50">
                      <li className="mb-5">
                        SKU: <a href="#">{productDetails?.sku}</a>
                      </li>
                      <li className="mb-5">
                        Tags:{" "}
                        <a href="#" rel="tag">
                          {productDetails?.Category?.category_name}
                        </a>
                        ,{" "}
                        <a href="#" rel="tag">
                          {productDetails?.brand}
                        </a>
                      </li>
                      <li>
                        Availability:
                        <span className="in-stock text-success ml-5">
                          {productDetails?.qty_in_stock} items in stock
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="Description-tab"
                      data-bs-toggle="tab"
                      href="#Description"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="Additional-info-tab"
                      data-bs-toggle="tab"
                      href="#Additional-info"
                    >
                      Additional info
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="Reviews-tab"
                      data-bs-toggle="tab"
                      href="#Reviews"
                    >
                      Reviews (3)
                    </a>
                  </li>
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                  <div className="tab-pane fade active show" id="Description">
                    <div className="">
                      <p>{productDetails?.long_description}</p>
                      <p>
                        Spluttered narrowly yikes left moth in yikes bowed this
                        that grizzly much hello on spoon-fed that alas rethought
                        much decently richly and wow against the frequent
                        fluidly at formidable acceptably flapped besides and
                        much circa far over the bucolically hey precarious
                        goldfinch mastodon goodness gnashed a jellyfish and one
                        however because.
                      </p>
                      <ul className="product-more-infor mt-30">
                        <li>
                          <span>Type Of Packing</span> Bottle
                        </li>
                        <li>
                          <span>Color</span> Green, Pink, Powder Blue, Purple
                        </li>
                        <li>
                          <span>Quantity Per Case</span> 100ml
                        </li>
                        <li>
                          <span>Ethyl Alcohol</span> 70%
                        </li>
                        <li>
                          <span>Piece In One</span> Carton
                        </li>
                      </ul>
                      <hr className="wp-block-separator is-style-dots" />
                      <p>
                        Laconic overheard dear woodchuck wow this outrageously
                        taut beaver hey hello far meadowlark imitatively
                        egregiously hugged that yikes minimally unanimous pouted
                        flirtatiously as beaver beheld above forward energetic
                        across this jeepers beneficently cockily less a the
                        raucously that magic upheld far so the this where crud
                        then below after jeez enchanting drunkenly more much wow
                        callously irrespective limpet.
                      </p>
                      <h4 className="mt-30">Packaging &amp; Delivery</h4>
                      <hr className="wp-block-separator is-style-wide" />
                      <p>{productDetails?.packaging_delivery}</p>
                      <p>
                        Scallop or far crud plain remarkably far by thus far
                        iguana lewd precociously and and less rattlesnake
                        contrary caustic wow this near alas and next and pled
                        the yikes articulate about as less cackled dalmatian in
                        much less well jeering for the thanks blindly
                        sentimental whimpered less across objectively fanciful
                        grimaced wildly some wow and rose jeepers outgrew
                        lugubrious luridly irrationally attractively dachshund.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Additional-info">
                    <table className="font-md">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr className="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr className="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane fade" id="Reviews">
                    <div className="comments-area">
                      <div className="row">
                        <div className="col-lg-8">
                          <h4 className="mb-30">
                            Customer questions &amp; answers
                          </h4>
                          <div className="comment-list">
                            <div className="single-comment justify-content-between d-flex">
                              <div className="user justify-content-between d-flex">
                                <div className="thumb text-center">
                                  <img src="/assets/bg-image.png" alt="" />
                                  <h6>
                                    <a href="#">Jacky Chan</a>
                                  </h6>
                                  <p className="font-xxs">Since 2012</p>
                                </div>
                                <div className="desc">
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "90%" }}
                                    ></div>
                                  </div>
                                  <p>
                                    Thank you very fast shipping from Poland
                                    only 3days.
                                  </p>
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <p className="font-xs mr-30">
                                        December 4, 2020 at 3:12 pm{" "}
                                      </p>
                                      <a
                                        href="#"
                                        className="text-brand btn-reply"
                                      >
                                        Reply{" "}
                                        <i className="fi-rs-arrow-right"></i>{" "}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="single-comment justify-content-between d-flex">
                              <div className="user justify-content-between d-flex">
                                <div className="thumb text-center">
                                  <img src="/assets/bg-image.png" alt="" />
                                  <h6>
                                    <a href="#">Ana Rosie</a>
                                  </h6>
                                  <p className="font-xxs">Since 2008</p>
                                </div>
                                <div className="desc">
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "90%" }}
                                    ></div>
                                  </div>
                                  <p>Great low price and works well.</p>
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <p className="font-xs mr-30">
                                        December 4, 2020 at 3:12 pm{" "}
                                      </p>
                                      <a
                                        href="#"
                                        className="text-brand btn-reply"
                                      >
                                        Reply{" "}
                                        <i className="fi-rs-arrow-right"></i>{" "}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="single-comment justify-content-between d-flex">
                              <div className="user justify-content-between d-flex">
                                <div className="thumb text-center">
                                  <img src="/assets/bg-image.png" alt="" />
                                  <h6>
                                    <a href="#">Steven Keny</a>
                                  </h6>
                                  <p className="font-xxs">Since 2010</p>
                                </div>
                                <div className="desc">
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "90%" }}
                                    ></div>
                                  </div>
                                  <p>
                                    Authentic and Beautiful, Love these way more
                                    than ever expected They are Great earphones
                                  </p>
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <p className="font-xs mr-30">
                                        December 4, 2020 at 3:12 pm{" "}
                                      </p>
                                      <a
                                        href="#"
                                        className="text-brand btn-reply"
                                      >
                                        Reply{" "}
                                        <i className="fi-rs-arrow-right"></i>{" "}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <h4 className="mb-30">Customer reviews</h4>
                          <div className="d-flex mb-30">
                            <div className="product-rate d-inline-block mr-15">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                            <h6>4.8 out of 5</h6>
                          </div>
                          <div className="progress">
                            <span>5 star</span>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              50%
                            </div>
                          </div>
                          <div className="progress">
                            <span>4 star</span>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              25%
                            </div>
                          </div>
                          <div className="progress">
                            <span>3 star</span>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "45%" }}
                              aria-valuenow="45"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              45%
                            </div>
                          </div>
                          <div className="progress">
                            <span>2 star</span>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow="65"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              65%
                            </div>
                          </div>
                          <div className="progress mb-30">
                            <span>1 star</span>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              85%
                            </div>
                          </div>
                          <a href="#" className="font-xs text-muted">
                            How are ratings calculated?
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="comment-form">
                      <h4 className="mb-15">Add a review</h4>
                      <div className="product-rate d-inline-block mb-30"></div>
                      <div className="row">
                        <div className="col-lg-8 col-md-12">
                          <form
                            className="form-contact comment_form"
                            action="#"
                            id="commentForm"
                          >
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control w-100"
                                    name="comment"
                                    id="comment"
                                    cols="30"
                                    rows="9"
                                    placeholder="Write Comment"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    name="website"
                                    id="website"
                                    type="text"
                                    placeholder="Website"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="button button-contactForm"
                              >
                                Submit Review
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-12">
                  <h3 className="section-title style-1 mb-30">
                    Related products
                  </h3>
                </div>
                <div className="col-12">
                  <div className="row related-products">
                    {Array(4)
                      .fill()
                      .map((_, i) => (
                        <div
                          className="col-lg-3 col-md-4 col-12 col-sm-6"
                          key={i}
                        >
                          <ProductCardTwo />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 primary-sidebar sticky-sidebar"
            style={{
              position: "relative",
              overflow: "visible",
              boxSzing: "border-box",
              minHeight: "1px",
            }}
          >
            <div
              className="theiaStickySidebar"
              style={{
                paddingTop: "0px",
                paddingBottom: "1px",
                position: "static",
                transform: "none",
                top: "0px",
                left: "1293.5px",
              }}
            >
              <div className="widget-category mb-30">
                <h5
                  className="section-title style-1 mb-30 wow fadeIn animated animated animated"
                  style={{ visibility: "visible" }}
                >
                  Category
                </h5>
                <ul className="categories">
                  {categories?.length > 0 &&
                    categories.map((category, i) => (
                      <li key={i}>
                        <a href="shop-grid-right.html">
                          {category.category_name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="sidebar-widget price_range range mb-30">
                <div className="widget-header position-relative mb-20 pb-10">
                  <h5 className="widget-title mb-10">Fill by price</h5>
                  <div className="bt-1 border-color-1"></div>
                </div>
                <div className="price-filter">
                  <div className="price-filter-inner">
                    <div
                      id="slider-range"
                      className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    >
                      <div
                        className="ui-slider-range ui-corner-all ui-widget-header"
                        style={{ width: "73.9583%", left: "0%" }}
                      ></div>
                      <span
                        tabIndex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "0%" }}
                      ></span>
                      <span
                        tabIndex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "73.9583%" }}
                      ></span>
                    </div>
                    <div className="price_slider_amount">
                      <div className="label-input">
                        <span>Range:</span>
                        <input
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group">
                  <div className="list-group-item mb-10 mt-10">
                    <label className="fw-900">Color</label>
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox1"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox1"
                      >
                        <span>Red (56)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox2"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox2"
                      >
                        <span>Green (78)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox3"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox3"
                      >
                        <span>Blue (54)</span>
                      </label>
                    </div>
                    <label className="fw-900 mt-15">Item Condition</label>
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox11"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox11"
                      >
                        <span>New (1506)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox21"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox21"
                      >
                        <span>Refurbished (27)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox31"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox31"
                      >
                        <span>Used (45)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  href="shop-grid-right.html"
                  className="btn btn-sm btn-default"
                >
                  <i className="fi-rs-filter mr-5"></i> Fillter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
