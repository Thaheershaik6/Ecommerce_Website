import React from "react";

import Product from "./Product";
import classes from "./ProductList.module.css";
import { Col, Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    category: "music",
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    category: "music",
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    category: "music",
  },
  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    category: "music",
  },
  {
    title: "Coffee Cup ",
    price: 20,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    category: "merchandise",
  },
  {
    title: "T-Shirt",
    price: 8,
    imageUrl: "https://source.unsplash.com/WWesmHEgXDs",
    category: "merchandise",
  },
];

const ProductList = (props) => {
  return (
    <>
      <h2 className={classes.product_type}>Music</h2>
      <Container className="w-75 productBody p-5 rounded mt-0">
        <Row className="d-flex justify-content-center align-item-center">
          {productsArr.map((product) => {
            return product.category === "music" ? (
              <Col xs={3} className="m-5" key={product.title}>
                <Product
                  title={product.title}
                  price={product.price}
                  url={product.imageUrl}
                />
              </Col>
            ) : null;
          })}
        </Row>
      </Container>
      <h2 className={classes.product_type}>MERCH</h2>
      <Container className="w-100 productBody p-5 rounded mt-0">
        <Row className="d-flex justify-content-center align-item-center">
          {productsArr.map((product) => {
            return product.category === "merchandise" ? (
              <Col xs={3} className="m-5" key={product.title}>
                <Product
                  title={product.title}
                  price={product.price}
                  url={product.imageUrl}
                />
              </Col>
            ) : null;
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
