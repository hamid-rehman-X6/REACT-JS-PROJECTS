import React from "react";

const ModalPop = ({ onclose }) => {
  return (
    <>
      <div className="modal">
        <span className="cross-icon" onClick={onclose}>
          &times;
        </span>

        <h1 className="pop-up-content">Hello World! Modal Pop-up</h1>
      </div>
    </>
  );
};

export default ModalPop;
