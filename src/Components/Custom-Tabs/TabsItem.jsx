import React, { useState } from "react";

const TabsItem = ({ tabContent, onchange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onchange(getCurrentIndex);
  };
  return (
    <>
      <div className="wrapper">
        <div className="heading">
          {tabContent.map((tabItem, index) => (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              } `}
              onClick={() => handleClick(index)}
              key={index}
            >
              <span>{tabItem.labels}</span>
            </div>
          ))}
        </div>

        <div className="content" style={{ color: "red" }}>
          {tabContent[currentTabIndex] && tabContent[currentTabIndex].contents}
        </div>
      </div>
    </>
  );
};

export default TabsItem;
