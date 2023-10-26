import React from "react";
import CartItems from "./CartItem";
import { Col, Container, Row, Button } from "react-bootstrap";
import classes from "./CartList.module.css";
import Modal from "../UI/Modal";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartList = (props) => {
  return (
    <>
      <Modal>
        <Row>
          <p>Cart</p>
          <div className="fw-bold fs-5 mb-4">
            <span className="px-5">
              <u>Item</u>
            </span>
            <span className=" px-5 mx-3">
              <u>Price</u>
            </span>
            <span className="px-1">
              <u>Quantity</u>
            </span>
          </div>
          <Container className={classes.cart_view}>
            <Col xs={8}>
              {cartElements.map((item) => (
                <CartItems
                  key={item.title}
                  img={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </Col>
          </Container>
          <h3 className={classes.tmt}>Total amount $</h3>
          <Col xs={12}>
            <Button className={classes.btn}>Purchase</Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CartList;
