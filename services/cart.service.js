import { BehaviorSubject } from "rxjs";
//import getConfig from "next/config";
import Router from "next/router";

//import { fetchWrapper } from "helpers";
import { alertService } from "./alert.service";

//const { publicRuntimeConfig } = getConfig();
//const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const cartSubject = new BehaviorSubject(
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))
);

export const cartService = {
  cart: cartSubject.asObservable(),
  get cartValue() {
    return cartSubject.value;
  },
  addItem,
  removeItem,
  clearCart,
  update,
};

async function addItem(item) {
  // get existing cart array
  const cart = { ...cartSubject.value };
  if (cart.items && cart.items.length > 0) {
    cart.items.push(item);
    cart.cartSubtotal = 0;
    for (let i = 0; i < cart.items.length; i++) {
      cart.cartSubtotal += cart.items[i].subtotal;
    }
  } else {
    cart.items = [item];
    cart.cartSubtotal = item.subtotal;
  }

  // update local storage
  localStorage.setItem("cart", JSON.stringify(cart));
  // publish updated cart to subscribers
  cartSubject.next(cart);
}

async function removeItem(id) {
  alertService.clear();
  const cart = { ...cartSubject.value };
  removeObjectWithId(cart.items, id);
  cart.cartSubtotal = 0;
  if (cart.items.length > 0) {
    for (let i = 0; i < cart.items.length; i++) {
      cart.cartSubtotal += cart.items[i].subtotal;
    }
  }

  // update local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  cartSubject.next(cart);
  if (cart.items.length === 0) Router.push("/");
}

async function update(cartArray) {
  // update local storage
  const cart = { ...cartSubject.value };
  cart.items = [...cartArray];
  cart.cartSubtotal = 0;
  if (cart.items.length > 0) {
    for (let i = 0; i < cart.items.length; i++) {
      cart.cartSubtotal += cart.items[i].subtotal;
    }
  }

  //console.log("cart", cart);
  localStorage.setItem("cart", JSON.stringify(cart));

  // publish updated cart to subscribers
  cartSubject.next(cart);
}

// prefixed with underscored because delete is a reserved word in javascript
async function clearCart() {
  // remove item from local storage
  localStorage.removeItem("cart");
  // auto logout if the logged in user deleted their own record
  // publish updated cart to subscribers
  cartSubject.next(null);
}

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}
