import React, { useEffect, useState } from "react";
import "./scroll.css";

const Scroll = ({ url }) => {
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getURL) {
    const response = await fetch(getURL);
    const data = await response.json();
    if (data && data.products && data.products.length > 0) {
      setData(data.products);
      //   console.log(data.products);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScroll = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const currentScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((currentScroll / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  return (
    <>
      <div className="container-scroll">
        <h1>Scroll Indicator</h1>

        <div className="scroll-bar-container">
          <div
            className="current-scroll"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
          : null}
      </div>
    </>
  );
};

export default Scroll;
