import React from "react";
import CartItems from "./CartItem";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./CartList.module.css";

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
      {/* <Modal> */}
      <Row className={classes.cart_view}>
        <p>Cart</p>
        <Container>
          <Row>
            <Col xs={8}>
              <div className="fw-bold fs-5 d-flex mb-4">
                <span className="px-5">Item</span>
                <span className=" px-4">Price</span>
                <span>Quantity</span>
              </div>
              {cartElements.map((item) => (
                <CartItems
                  img={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </Row>
      {/* </Modal> */}
    </>
  );
};

export default CartList;
