import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { cartService } from "@/services";
import { set } from "react-hook-form";

const HomeLayout = ({ title = "", showBreadCrumb = false, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {showBreadCrumb && (
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow">
                Home
              </a>
              <span></span> Shop
              <span></span> Wishlist
            </div>
          </div>
        </div>
      )}

      <main className="main">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
