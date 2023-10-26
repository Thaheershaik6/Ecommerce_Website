import React from "react";
import { Button } from "react-bootstrap";
// import CartList from "./CartList";

const Cart = (props) => {
    
    return<>
    <Button variant="outline-info" onClick={props.onClick}>Cart {0}</Button>
    {/* {cartOpen && <CartList />} */}
    </>
}

export default Cart;