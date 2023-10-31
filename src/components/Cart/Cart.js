import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const itemsAdded = cartCtx.items.length;
    
    return<>
    <Button variant="outline-info" style={{width: '7rem', marginTop: 'auto', backgroundColor: 'black', borderRadius: '15px' }} onClick={props.onClick}>Cart {itemsAdded}</Button>
    </>
}

export default Cart;