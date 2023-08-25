import React, { useContext } from "react";
import { CartContext } from "../../cartContext";

const CartBtn = () => {
  const { cartCount, cartItems,removeFromCart } = useContext(CartContext);
  const handleDelete=(itemId)=>{
    removeFromCart(itemId);

  }
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-outline-dark ms-2 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span className="fa fa-shopping-cart me-2"></span>
        Cart({cartCount})
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Your Cart Bucket
              </h5>
              <hr />
            </div>
            <div className="modal-body">
              {/* Iterate over cartItems */}
              {cartItems.map((item) => (
                <div className="row border p-2 align-items-center mb-2" key={item.id}>
                <div className="col-6">
                  <h6 className="mb-0">{item.title}</h6>
                </div>
                <div className="col-3">
                  <p className="mb-0">${item.price}</p>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-danger "
                    onClick={()=>handleDelete(item.id)}
                  >
                    <span className="fa fa-trash me-2" ></span>
                    Delete
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBtn;
