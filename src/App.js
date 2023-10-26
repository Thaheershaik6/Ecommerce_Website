import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Product/ProductList";
import { Button } from "react-bootstrap";
import CartList from "./components/Cart/CartList";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ProductList />
      <Button className="text-info cartBtn" variant="secondary">
        See The Cart
      </Button>
      <CartList />
      <Footer />
    </div>
  );
};

export default App;
