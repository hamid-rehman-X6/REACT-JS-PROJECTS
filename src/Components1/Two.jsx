import React, { useEffect, useState } from "react";

const Two = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  });

  console.log(time);
  return (
    <>
      <div>Time : {time}</div>
    </>
  );
};

export default Two;
