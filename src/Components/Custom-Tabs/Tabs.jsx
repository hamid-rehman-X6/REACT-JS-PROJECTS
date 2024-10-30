import React from "react";
import TabsItem from "./TabsItem";
import "./tab.css";

const RandomCompo = () => {
  return <h3>Random Component Content</h3>;
};
const Tabs = () => {
  const tabs = [
    {
      labels: "Tab 1",
      contents: <h1>Tab 1 content Here</h1>,
    },
    {
      labels: "Tab 2",
      contents: <h2>Tab 2 content Here</h2>,
    },
    {
      labels: "Tab 3",
      contents: <RandomCompo />,
    },
  ];

  const handleChange = (currentIndex) => {
    console.log(currentIndex);
  };

  return <TabsItem tabContent={tabs} onchange={handleChange} />;
};

export default Tabs;
