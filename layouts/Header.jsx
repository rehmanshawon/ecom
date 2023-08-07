import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { userService, cartService } from "services";
import { set } from "react-hook-form";

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems]=useState([]);
  const [cartSubtotal, setCartSubtotal]=useState(0);

  useEffect(() => {
    cartService.cart.subscribe({
      next(x) {
        if (x !== null) {
          setCartItems(x.items);
          setCartSubtotal(x.cartSubtotal)
          setCartItemCount(x.items.length);
        }
        else setCartItemCount(0);
      },
      error(err) {
        console.error("something wrong occurred: " + err);
      },
      complete() {
        console.log("done");
      },
    });
  }, []);

  return (
    <Fragment>
      <header className="header-area header-style-1 header-height-2">
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    <li>
                      <i className="fi-rs-smartphone"></i>{" "}
                      <a href="#">(+880) 1763 - 851107</a>
                    </li>
                    <li>
                      <i className="fi-rs-marker"></i>
                      <a href="page-contact.html">Our location</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4"></div>
              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    <li>
                      <a className="language-dropdown-active" href="#">
                        {" "}
                        <i className="fi-rs-world"></i> English{" "}
                        <i className="fi-rs-angle-small-down"></i>
                      </a>
                      <ul className="language-dropdown">
                        <li>
                          <a href="#">
                            <img
                              src="/assets/frontend/imgs/theme/flag-fr.png"
                              alt=""
                            />
                            Français
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="/assets/frontend/imgs/theme/flag-dt.png"
                              alt=""
                            />
                            Deutsch
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="/assets/frontend/imgs/theme/flag-ru.png"
                              alt=""
                            />
                            Pусский
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <i className="fi-rs-user">
                        {userService.userValue?.firstName}
                      </i>
                      {!userService.userValue && (
                        <Link href={"/login-register"}>Log In / Sign Up</Link>
                      )}{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link href="/">
                  <img src="/imgs/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <form action="#">
                    <select className="select-active">
                      <option>All Categories</option>
                      <option>Engineering</option>
                      <option>Construction</option>
                      <option>Home Decoration</option>
                      <option>Bathroom Fittings</option>
                      <option>Floor Tiles</option>
                      <option>Doors and Windows</option>
                      <option>Kitchen Items</option>
                      <option>Electric Apparels</option>
                      <option>Gardening</option>
                      <option>Pipes</option>
                    </select>
                    <input type="text" placeholder="Search for items..." />
                  </form>
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <a href="shop-wishlist.html">
                        <img
                          className="svgInject"
                          alt="Evara"
                          src="/assets/frontend/imgs/theme/icons/heart.svg"
                        />
                        <span className="pro-count blue">4</span>
                      </a>
                    </div>
                    <div className="header-action-icon-2">
                      <a className="mini-cart-icon" href="shop-cart.html">
                        <img
                          alt="Evara"
                          src="/assets/frontend/imgs/theme/icons/cart.svg"
                        />
                        <span className="pro-count blue">{cartItemCount}</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        
                        <ul>
                          {cartItems.length && cartItems.map((item,i)=> (
                          <li key={i}>
                            <div className="shopping-cart-img">
                              <a href="shop-product-right.html">
                                <img
                                  alt="Product Image"
                                  src={item.imageThumb}
                                  style={{ height: "80px" }}
                                />
                              </a>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <a href="shop-product-right.html">
                                  {item.title}
                                </a>
                              </h4>
                              <h4>
                                <span>{item.quantity} × </span>৳ {item.unit_price-item.discount_amount}
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </div>
                          </li>
                          ))}
                      
                         
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              Total <span>৳ {cartSubtotal}</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <Link href="/cart" className="outline">
                              View cart
                            </Link>
                            <Link href="/checkout">Checkout</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <a href="index-2.html">
                  <img src="/assets/frontend/imgs/theme/logo.svg" alt="logo" />
                </a>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <a className="categori-button-active" href="#">
                    <span className="fi-rs-apps"></span> Browse Categories
                  </a>
                  <div className="categori-dropdown-wrap categori-dropdown-active-large">
                    <ul>
                      <li className="has-children">
                        <a href="shop-grid-right.html">
                          <i className="evara-font-dress"></i>Building &
                          Construction
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li>
                                      <span className="submenu-title">
                                        Hot & Trending
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Dresses
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Blouses & Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Hoodies & Sweatshirts
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Women's Sets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Suits & Blazers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Bodysuits
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Tanks & Camis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Coats & Jackets
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li>
                                      <span className="submenu-title">
                                        Bottoms
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Leggings
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Skirts
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Shorts
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Jeans
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Pants & Capris
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Bikini Sets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Cover-Ups
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Swimwear
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <img
                                  src="/assets/frontend/imgs/banner/menu-banner-2.jpg"
                                  alt="menu_banner1"
                                />
                                <div className="banne_info">
                                  <h6>10% Off</h6>
                                  <h4>New Arrival</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                              <div className="header-banner2">
                                <img
                                  src="/assets/frontend/imgs/banner/menu-banner-3.jpg"
                                  alt="menu_banner2"
                                />
                                <div className="banne_info">
                                  <h6>15% Off</h6>
                                  <h4>Hot Deals</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-children">
                        <a href="shop-grid-right.html">
                          <i className="evara-font-tshirt"></i>Interior Design
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li>
                                      <span className="submenu-title">
                                        Jackets & Coats
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Down Jackets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Jackets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Parkas
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Faux Leather Coats
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Trench
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Wool & Blends
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vests & Waistcoats
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Leather Coats
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li>
                                      <span className="submenu-title">
                                        Suits & Blazers
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Blazers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Suit Jackets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Suit Pants
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Suits
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vests
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Tailor-made Suits
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Cover-Ups
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <img
                                  src="/assets/frontend/imgs/banner/menu-banner-4.jpg"
                                  alt="menu_banner1"
                                />
                                <div className="banne_info">
                                  <h6>10% Off</h6>
                                  <h4>New Arrival</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-children">
                        <a href="shop-grid-right.html">
                          <i className="evara-font-smartphone"></i> Cellphones
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li>
                                      <span className="submenu-title">
                                        Hot & Trending
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Cellphones
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        iPhones
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Refurbished Phones
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Mobile Phone
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Mobile Phone Parts
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Phone Bags & Cases
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Communication Equipments
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Walkie Talkie
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li>
                                      <span className="submenu-title">
                                        Accessories
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Screen Protectors
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Wire Chargers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Wireless Chargers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Car Chargers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Power Bank
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Armbands
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Dust Plug
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Signal Boosters
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <img
                                  src="/assets/frontend/imgs/banner/menu-banner-5.jpg"
                                  alt="menu_banner1"
                                />
                                <div className="banne_info">
                                  <h6>10% Off</h6>
                                  <h4>New Arrival</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                              <div className="header-banner2">
                                <img
                                  src="/assets/frontend/imgs/banner/menu-banner-6.jpg"
                                  alt="menu_banner2"
                                />
                                <div className="banne_info">
                                  <h6>15% Off</h6>
                                  <h4>Hot Deals</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-desktop"></i>Computer &
                          Office
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-cpu"></i>Consumer Electronics
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-diamond"></i>Jewelry &
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-home"></i>Home & Garden
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-high-heels"></i>Shoes
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-teddy-bear"></i>Mother & Kids
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-kite"></i>Outdoor fun
                        </a>
                      </li>
                      <li>
                        <ul
                          className="more_slide_open"
                          style={{ display: "none" }}
                        >
                          <li>
                            <a href="shop-grid-right.html">
                              <i className="evara-font-desktop"></i>Beauty,
                              Health
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <i className="evara-font-cpu"></i>Bags and Shoes
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <i className="evara-font-diamond"></i>Consumer
                              Electronics
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <i className="evara-font-home"></i>Automobiles &
                              Motorcycles
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="more_categories">Show more...</div>
                  </div>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                  <nav>
                    <ul>
                      <li>
                        <a className="active" href="index-2.html">
                          Home <i className="fi-rs-angle-down"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index-2.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 4</a>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <a href="page-about.html">About</a>
                      </li> */}
                      <li>
                        <a href="shop-grid-right.html">
                          Shop <i className="fi-rs-angle-down"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="shop-grid-right.html">
                              Shop Grid – Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              Shop Grid – Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right.html">
                              Shop List – Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left.html">
                              Shop List – Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth.html">Shop - Wide</a>
                          </li>
                          <li>
                            <a href="#">
                              Single Product{" "}
                              <i className="fi-rs-angle-right"></i>
                            </a>
                            <ul className="level-menu">
                              <li>
                                <a href="shop-product-right.html">
                                  Product – Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-left.html">
                                  Product – Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-full.html">
                                  Product – No sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop-filter.html">Shop – Filter</a>
                          </li>
                          <li>
                            <a href="shop-wishlist.html">Shop – Wishlist</a>
                          </li>
                          <li>
                            <a href="shop-cart.html">Shop – Cart</a>
                          </li>
                          <li>
                            <a href="shop-checkout.html">Shop – Checkout</a>
                          </li>
                          <li>
                            <a href="shop-compare.html">Shop – Compare</a>
                          </li>
                        </ul>
                      </li>
                      <li className="position-static">
                        <a href="#">
                          Categories <i className="fi-rs-angle-down"></i>
                        </a>
                        <ul className="mega-menu">
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title" href="#">
                              Building & Construction
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop-product-right.html">GI Pipe</a>
                              </li>
                              <li onMouseOver={(e) => console.log(e.target)}>
                                <a href="shop-product-right.html">Rod</a>
                                <ul className="level-menu">
                                  <li>1</li>
                                  <li>2</li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Cement</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Brick</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">RC</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Wood</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title" href="#">
                              Interior Design
                            </a>
                            <ul>
                              <li>
                                <a href="shop-product-right.html">
                                  Floor Tiles
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Wooden Blocks
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Bathroom Fittings
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Glasses</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Sweatpants</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Paintings</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title" href="#">
                              Services
                            </a>
                            <ul>
                              <li>
                                <a href="shop-product-right.html">
                                  Interior Design
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  3D Rendering
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Tablets</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">AutoCAD</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Construction Consultation
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-34">
                            <div className="menu-banner-wrap">
                              <a href="shop-product-right.html">
                                <img
                                  src="/assets/frontend/imgs/banner/menu-banner.jpg"
                                  alt="Evara"
                                />
                              </a>
                              <div className="menu-banner-content">
                                <h4>Hot deals</h4>
                                <h3>
                                  Don't miss
                                  <br /> Trending
                                </h3>
                                <div className="menu-banner-price">
                                  <span className="new-price text-success">
                                    Save to 50%
                                  </span>
                                </div>
                                <div className="menu-banner-btn">
                                  <a href="shop-product-right.html">Shop now</a>
                                </div>
                              </div>
                              <div className="menu-banner-discount">
                                <h3>
                                  <span>35%</span>
                                  off
                                </h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <a href="blog-category-grid.html">
                          Blog <i className="fi-rs-angle-down"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-category-grid.html">
                              Blog Category Grid
                            </a>
                          </li>
                          <li>
                            <a href="blog-category-list.html">
                              Blog Category List
                            </a>
                          </li>
                          <li>
                            <a href="blog-category-big.html">
                              Blog Category Big
                            </a>
                          </li>
                          <li>
                            <a href="blog-category-fullwidth.html">
                              Blog Category Wide
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Single Post <i className="fi-rs-angle-right"></i>
                            </a>
                            <ul className="level-menu level-menu-modify">
                              <li>
                                <a href="blog-post-left.html">Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-post-right.html">Right Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-post-fullwidth.html">
                                  No Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <a href="#">
                          Borna Engineering <i className="fi-rs-angle-down"></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="page-about.html">About Us</a>
                          </li>
                          <li>
                            <a href="page-contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="page-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="page-login-register.html">
                              login/register
                            </a>
                          </li>
                          <li>
                            <a href="page-purchase-guide.html">
                              Purchase Guide
                            </a>
                          </li>
                          <li>
                            <a href="page-privacy-policy.html">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="page-terms.html">Terms of Service</a>
                          </li>
                          <li>
                            <a href="page-404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <a href="page-contact.html">Contact</a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-block">
                <p>
                  <i className="fi-rs-headset"></i>
                  <span>Hotline</span> (+880) 1763 - 851107
                </p>
              </div>

              <p className="mobile-promotion">
                Happy <span className="text-brand">Mother's Day</span>. Big Sale
                Up to 40%
              </p>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img
                        alt="Evara"
                        src="/assets/frontend/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count white">4</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="shop-cart.html">
                      <img
                        alt="Evara"
                        src="/assets/frontend/imgs/theme/icons/icon-cart.svg"
                      />
                      <span className="pro-count white">2</span>
                    </a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Evara"
                                src="/assets/frontend/imgs/shop/thumbnail-3.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Plain Striola Shirts
                              </a>
                            </h4>
                            <h3>
                              <span>1 × </span>$800.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Evara"
                                src="/assets/frontend/imgs/shop/thumbnail-4.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Macbook Pro 2022
                              </a>
                            </h4>
                            <h3>
                              <span>1 × </span>$3500.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total <span>$383.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link href="/cart">View cart</Link>
                          <Link href="/checkout">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2 d-block d-lg-none">
                    <div className="burger-icon burger-icon-white">
                      <span className="burger-icon-top"></span>
                      <span className="burger-icon-mid"></span>
                      <span className="burger-icon-bottom"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-area">
          <a href="/" className="logo">
            Logo
          </a>
          <Navbar />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
