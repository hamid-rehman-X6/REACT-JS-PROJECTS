import React, { useState } from "react";
import ModalPop from "./ModalPOP";
import "./modal.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <button onClick={handleOpen}>Open Modal</button>
        {showModal && <ModalPop onclose={handleClose} />}
      </div>
    </>
  );
};

export default Modal;
