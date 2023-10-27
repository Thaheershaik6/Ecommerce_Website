import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalId = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalId)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalId
      )}
    </>
  );
};

export default Modal;
