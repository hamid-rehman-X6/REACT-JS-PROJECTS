import React from "react";
import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <>
      <ul className="list-menu">
        {list && list.length
          ? list.map((listItem, index) => (
              <MenuItem key={index} item={listItem} />
            ))
          : null}
      </ul>
    </>
  );
};

export default MenuList;
