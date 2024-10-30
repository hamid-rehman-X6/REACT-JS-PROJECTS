import React, { useState } from "react";

const One = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <input type="checkbox" onChange={handleToggle} />

      <p>{toggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default One;
