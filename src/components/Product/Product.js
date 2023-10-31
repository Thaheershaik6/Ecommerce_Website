import React from "react";

import { Card } from "react-bootstrap";
// import CartContext from "../../store/CartContext";

const Product = (props) => {

  // const cartCtx = useContext(CartContext);

  // const addToCart = (id) =>{
  //   cartCtx.addItem({
  //     id: id,
  //     title: props.title,
  //     price: props.price,
  //   })
  //   console.log(props, props.title)
  // }
  const imageUrl = props.imageUrl;
  return (
    <>
      <h3>{props.title}</h3>
      <Card style={{ width: "18rem", border: 'none' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Text>
           <span style={{fontSize: '20px'}}> ${props.price} </span>
            <button type="submit" variant="primary" style={{marginLeft: '5rem', fontSize: '15px', backgroundColor: 'darkkhaki'}} onClick={props.addToCart}>ADD TO CART</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
