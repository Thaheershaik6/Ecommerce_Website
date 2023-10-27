import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import classes from "./CartItem.module.css";

const CartItems = (props) => {
  const removeItemHandler = () => {};

  let quantity = props.quantity;
  let img = props.imageUrl;
  return (
    <div className="fs-5 mb-4">
      <Row>
        <Col xs={3}>
          <img
            src={img}
            alt="cart_added_items"
            className={classes.item_img}
          />
        </Col>
        <Col xs={3}>
          <span className={classes.item_title}>{props.title}</span>
        </Col>
        <Col xs={3}>
          <span className={classes.item_price}>${props.price}</span>
        </Col>
        <Col xs={3}>
          <input className={classes.item_input} defaultValue={quantity} />
          <Button
            onClick={removeItemHandler}
            className={classes.rmBtn}
            variant="danger"
          >
            Remove
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default CartItems;
