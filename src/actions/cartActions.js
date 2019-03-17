"use strict";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export function addToCart({
  id,
  title,
  description,
  rent,
  image,
  refund,
  days,
  date
}) {
  return {
    type: ADD_TO_CART,
    payload: { id, title, description, rent, image, refund, days, date }
  };
}
export function deleteFromCart({ id }) {
  return {
    type: DELETE_FROM_CART,
    payload: { id }
  };
}
