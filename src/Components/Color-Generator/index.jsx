import React, { useEffect, useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorFunc = (length) => {
    return Math.floor(Math.random() * length);
  };

  // for hex color
  const hanldeRandomHexColor = () => {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += hexArray[randomColorFunc(hexArray.length)];
    }
    setColor(hex);
  };

  // for rgb color
  const hanldeRandomRgbColor = () => {
    const r = randomColorFunc(256);
    const g = randomColorFunc(256);
    const b = randomColorFunc(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      hanldeRandomRgbColor();
    } else {
      hanldeRandomHexColor();
    }
  }, [typeOfColor]);
  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex" ? hanldeRandomHexColor : hanldeRandomRgbColor
          }
        >
          Generate Random Color
        </button>

        <div>
          <h4>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h4>
          <h3>{color}</h3>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
