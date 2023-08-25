import React from "react";
import { NavLink } from 'react-router-dom';
import Login from "./buttons/login";
import SignUp from "./buttons/signUp";
import CartBtn from "./buttons/cartBtn";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-ight bg-light">
        <div className="container-fluid">
           
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink> 
              </li>
            </ul>
            <NavLink className="navbar-brand  mx-auto fw-bold fs-3" to="/">
            APPLE MART
          </NavLink>
          </div>
          <Login/>
          <SignUp/>
          <CartBtn/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
