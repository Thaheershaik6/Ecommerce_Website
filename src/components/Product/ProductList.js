import React, { useContext } from "react";

import Product from "./Product";
import classes from "./ProductList.module.css";
import { Col, Container, Row } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const productsArr = [
  {
    id: '1',
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    category: "music",
    quantity: '1'
  },
  {
    id: '2',
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    category: "music",
    quantity: '1'
  },
  {
    id: '3',
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    category: "music",
    quantity: '1'
  },
  {
    id: '4',
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    category: "music",
    quantity: '1'
  },
  {
    id: '5',
    title: "Coffee Cup ",
    price: 20,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    category: "merchandise",
    quantity: '1'
  },
  {
    id: '6',
    title: "T-Shirt",
    price: 8,
    imageUrl: "https://source.unsplash.com/WWesmHEgXDs",
    category: "merchandise",
    quantity: '1'
  },
];

const ProductList = (props) => {

  const cartCtx = useContext(CartContext);

  const addItemToCart = (product) => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: product.quantity
    }) 
    console.log(product, 'abc', product.imageUrl, product.quantity, cartCtx.items.length);
  }

  return (
    <>
      <h2 className={classes.product_type}>Music</h2>
      <Container className="w-75 productBody p-5 rounded mt-0 px-4">
        <Row className="d-flex justify-content-center align-item-center">
          {productsArr.map((product) => {
            return product.category === "music" ? (
              <Col xs={3} className="m-5" key={product.title}>
                <Product addToCart={addItemToCart.bind(null, product)}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
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
                <Product addToCart={addItemToCart.bind(null, product)}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
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
