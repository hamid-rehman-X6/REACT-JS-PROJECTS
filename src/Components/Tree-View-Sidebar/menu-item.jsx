import React, { useState } from "react";
import MenuList from "./menu-list";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggle = (currentLabel) => {
    console.log(currentLabel);
    setDisplayCurrentChildren((prevStat) => ({
      ...prevStat,
      [currentLabel]: !prevStat[currentLabel],
    }));
    console.log(displayCurrentChildren);
  };
  return (
    <>
      <li>
        <div className="item-menu">
          <p> {item.label} </p>

          {item && item.children && item.children.length ? (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleToggle(item.label)}
            >
              {displayCurrentChildren[item.label] ? "-" : "+"}
            </span>
          ) : null}
        </div>

        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
};

export default MenuItem;
