import React from "react";
import ReactDOM from "react-dom";
import { ModalBackground } from "../Styles/elements/modal";


function Modal({ children, initAnimation = true }) {
  return ReactDOM.createPortal(
    <ModalBackground className={!initAnimation ? "openModal" : ""}>
      {children}
    </ModalBackground>,

    document.getElementById("modal")
  );
}

export default Modal;
