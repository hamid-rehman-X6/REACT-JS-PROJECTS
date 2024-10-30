import React from "react";

const Options = ({ data, onclick }) => {
  return (
    <>
      <div>
        {data && data.length
          ? data.map((item, index) => (
              <li onClick={onclick} key={index}>
                {item}
              </li>
            ))
          : null}
      </div>
    </>
  );
};

export default Options;
