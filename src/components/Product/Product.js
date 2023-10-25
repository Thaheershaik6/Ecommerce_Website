import React from "react";

import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <Card style={{ width: "18rem", border: 'none' }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Text>
            ${props.price}
            <Button variant="primary" style={{marginLeft: '5rem'}}>ADD TO CART</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
