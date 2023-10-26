import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CartList from "./CartList";

const Cart = (props) => {
    const [cartOpen, setCartOpen] = useState(false);

    const cartOpenHandler = () =>{
        setCartOpen(true);
    }
    return<>
    <Button variant="outline-info" onClick={cartOpenHandler}>Cart {0}</Button>
    {cartOpen && <CartList />}
    </>
}

export default Cart;