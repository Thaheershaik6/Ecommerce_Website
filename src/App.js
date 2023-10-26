import React, {useState} from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Product/ProductList";
import { Button } from "react-bootstrap";
import CartList from "./components/Cart/CartList";

const App = () => {

  const [cartOpen, setCartOpen] = useState(false);

    const cartOpenHandler = () =>{
        setCartOpen(true);
    }
  return (
    <div className="App">
      <NavBar onClick={cartOpenHandler} ></NavBar>
      <ProductList />
      {cartOpen && <CartList/>}
      <Button className="text-info cartBtn" variant="secondary" onClick={cartOpenHandler}>
        See The Cart
      </Button>
      <Footer />
    </div>
  );
};

export default App;
