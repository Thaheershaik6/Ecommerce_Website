import React from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css'

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={props.modal}>
      <div className={props.content}>{props.children}</div>
    </div>
  );
};

const portalId = document.getElementById("overlays");

const Modal = (props) => {
  <>
    {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalId)}
    {ReactDOM.createPortal(
      <ModalOverLay>{props.children}</ModalOverLay>,
      portalId
    )}
  </>;
};

export default Modal;
