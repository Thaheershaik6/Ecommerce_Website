import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const itemsAdded = cartCtx.items.length;
    
    return<>
    <Button variant="outline-info" onClick={props.onClick}>Cart {itemsAdded}</Button>
    </>
}

export default Cart;