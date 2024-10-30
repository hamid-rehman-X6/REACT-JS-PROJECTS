import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  // ============================== (METHOD 1 START ) ==================================

  //   const [selected, setSelected] = useState([]);

  //   const hanldeSelect = (getId) => {
  //     if (selected.includes(getId)) {
  //       // if the current id is already present, then remove it only when again click on item
  //       setSelected(selected.filter((id) => id !== getId));
  //     } else {
  //       // if id is not present then add the item into the selected array
  //       setSelected([...selected, getId]);
  //     }
  //   };
  // ============================== (METHOD 1 END ) ==================================

  // ============================== (METHOD 2 START ) ================================

  const [selected, setSelected] = useState(null);
  const [enableMultiSelec, setEnableMultiSelec] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleItem = (getId) => {
    setSelected(getId === selected ? null : getId);
  };

  const handleMultipleItem = (getId) => {
    // here we get the id = 1
    // console.log(getId);
    let multi = [...multiple];
    // here we get the array which is empty, so their length is 0
    // console.log(multi);
    let findIndex = multi.indexOf(getId);
    // as we get empty array so ,the index of empty array is -1
    // console.log(findIndex);

    if (findIndex === -1) {
      multi.push(getId);
    } else {
      multi.splice(findIndex, 1);
    }

    setMultiple(multi);
  };

  //   console.log(multiple);

  // ============================== (METHOD 2 END ) ==================================

  return (
    <>
      {/*=========================== METHOD 1 JSX START ========================== */}

      {/* <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem, index) => (
              <div
                onClick={() => hanldeSelect(dataItem.id)}
                className="item"
                key={index}
              >
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>{selected.includes(dataItem.id) ? "-" : "+"}</span>
                </div>

                {selected.includes(dataItem.id) && <div>{dataItem.answer}</div>}
              </div>
            ))
          ) : (
            <p>No data here</p>
          )}
        </div>
      </div> */}

      {/* ======================== (METHOD 1 JSX END ) ============================== */}

      {/*=========================== METHOD 2 JSX START ========================== */}

      <div className="wrapper">
        <button
          onClick={() => setEnableMultiSelec(!enableMultiSelec)}
          className="enable-btn"
        >
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem, index) => (
              <div
                onClick={
                  enableMultiSelec
                    ? () => handleMultipleItem(dataItem.id)
                    : () => handleSingleItem(dataItem.id)
                }
                className="item"
                key={index}
              >
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>

                {enableMultiSelec
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div>{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && <div>{dataItem.answer}</div>}
                {/* {selected === dataItem.id && multiple === dataItem.id ? (
                  <div>{dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>

      {/* ======================== (METHOD 2 JSX END ) ============================== */}
    </>
  );
};

export default Accordian;
