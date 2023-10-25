import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Product/ProductList";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ProductList/>
      <Button className="text-info cartBtn" variant="secondary" >See The Cart</Button>
      <Footer/>
    </div>
  );
}

export default App;
