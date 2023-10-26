import React from "react";
import { Button } from "react-bootstrap";
import classes from "./CartItem.module.css";
import { Row, Col } from "react-bootstrap";

const CartItems = (props) => {
  const removeItemHandler = () => {};

  // let quantity = props.quantity;
  return (
    <div className="fs-5 mb-4">
      <Row>
        <Col xs={3}>
          <img
            src={props.img}
            alt="cart_added_items"
            className={classes.item_img}
          />
        </Col>
        <Col xs={3}>
          <span className={classes.item_title}>{props.title}</span>
        </Col>
        <Col xs={3}>
          <span className={classes.item}>{props.price}</span>
          <span className={classes.item_qnty}>{props.quantity} </span>
          {/* <input className={classes.item_input} defaultValue={quantity}/> */}
        </Col>
        <Col xs={3}>
          <Button onClick={removeItemHandler} className={classes.rmBtn}>
            Remove
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItems;
