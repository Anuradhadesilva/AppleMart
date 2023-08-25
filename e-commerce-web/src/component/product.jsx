import React from "react";
import DATA from "../data";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="container-pd text-center mt-4">
        <div className="col-12 mb-5">
          <h2>Product</h2>
          <hr />
        </div>
        <div className="row">
          {DATA.map((item) => (
            <div key={item.id} className="col">
              <div className="card m-auto mb-4" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h2>${item.price}</h2>

                  <NavLink
                    to={`/productDetail/${item.id}`}
                    className="btn btn-outline-dark "
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
