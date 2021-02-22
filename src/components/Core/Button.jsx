import React from "react";
import addCart from "../../assets/icons/add-cart.svg";

export default function Button(props) {
  return (
    <button className="btn custom-button btn-block">
      {props.type && <img src={addCart} alt="cart" />}
      {props.text}
    </button>
  );
}
