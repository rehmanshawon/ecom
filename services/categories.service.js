import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
//import Router from "next/router";

import { fetchWrapper } from "helpers";
//import { alertService } from "./alert.service";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/categories`;
const categoriesSubject = new BehaviorSubject(
  typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("categories"))
);

export const categoriesService = {
  categories: categoriesSubject.asObservable(),
  get categoryValue() {
    return categoriesSubject.value;
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
  const categories = await fetchWrapper.get(baseUrl);
  categoriesSubject.next(categories);
  localStorage.setItem("categories", JSON.stringify(categories));
  return categories;
}

async function getById(id) {
  return await fetchWrapper.get(`${baseUrl}/${id}`);
}
