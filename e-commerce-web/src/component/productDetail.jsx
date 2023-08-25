import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DATA from "../data";
import { CartContext } from "../cartContext";

const ProductDetail = () => {
  const { itemId } = useParams();
  const getItem = DATA.find((item) => item.id === parseInt(itemId));
  const [cartBtn, setCartBtn] = useState("Add to cart");
  const { addToCart, removeFromCart } = useContext(CartContext);
  const handleCart = () => {
    if (cartBtn === "Add to cart") {
      setCartBtn("Remove from cart");
      addToCart(getItem);
    } else if (cartBtn === "Remove from cart") {
      setCartBtn("Add to cart");
      removeFromCart();
    }
  };
  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto getItem">
            <img src={getItem.img} alt={getItem.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{getItem.title}</h1>
            <hr />
            <h2 className="my-4">${getItem.price}</h2>
            <p className="lead">{getItem.desc}</p>
            <button onClick={handleCart} className="btn btn-outline-dark my-5">
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
