import "./App.css";
import React from "react";
import Navbar from "./component/navbar";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Product from "./component/product";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import ProductDetail from "./component/productDetail";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/productDetail/:itemId" component={ProductDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
