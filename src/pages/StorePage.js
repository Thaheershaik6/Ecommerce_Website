import React, { useState } from "react";

import '../App.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/Product/ProductList";
import { Button } from "react-bootstrap";
import CartList from "../components/Cart/CartList";
import CartProvider from "../store/CartProvider";

const StorePage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartOpenHandler = () => {
    setCartOpen(true);
  };
  const cartCloseHandler = () => {
    setCartOpen(false);
  };
  return (
    <div className="App">
      {/* <p>Go to <a href="/about">the about page</a></p> */}
      <CartProvider>
        <NavBar onClick={cartOpenHandler}></NavBar>
        <ProductList />
        {cartOpen && <CartList onClose={cartCloseHandler} />}
        <Button
          className="text-info cartBtn"
          variant="secondary"
          onClick={cartOpenHandler}
        >
          See The Cart
        </Button>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default StorePage;
