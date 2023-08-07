import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
//import Router from "next/router";

import { fetchWrapper } from "helpers";
//import { alertService } from "./alert.service";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/products`;
const productSubject = new BehaviorSubject(
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("products"))
);

export const productsService = {
  products: productSubject.asObservable(),
  get productValue() {
    return productSubject.value;
  },
  getAll,
  getById,
};

// async function login(username, password) {
//   const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
//     username,
//     password,
//   });

// publish user to subscribers and store in local storage to stay logged in between page refreshes
// userSubject.next(user);
// localStorage.setItem("user", JSON.stringify(user));
//}

// function logout() {
//   alertService.clear();
//   // remove user from local storage, publish null to user subscribers and redirect to login page
//   localStorage.removeItem("user");
//   userSubject.next(null);
//   Router.push("/account/login");
// }

async function getAll() {
  const products = await fetchWrapper.get(baseUrl);

  productSubject.next(products);
  localStorage.setItem("products", JSON.stringify(products));
  return products;
}

async function getById(id) {
  const product = await fetchWrapper.get(`${baseUrl}/${id}`);
  //console.log(id, product);
  const productAttributes = await fetchWrapper.get(
    `${publicRuntimeConfig.apiUrl}/product-attributes/${product.id}`
  );
  const rearranged = productAttributes.reduce(function (acc, attr) {
    acc[attr.Attribute.attribute_name] =
      acc[attr.Attribute.attribute_name] || [];
    acc[attr.Attribute.attribute_name].push(attr);
    return acc;
  }, Object.create(null));
  console.log("rearranged", rearranged);
  // return {
  //   ...product,
  //   attributes: productAttributes.map((item) => ({
  //     ...item,
  //     attribute_name: item.Attribute.attribute_name,
  //   })),
  // };
  return {
    ...product,
    attributes: rearranged,
  };
}
