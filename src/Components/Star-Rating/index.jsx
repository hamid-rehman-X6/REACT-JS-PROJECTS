import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (getID) => {
    setRating(getID);
  };
  const handleMouseMove = (getID) => {
    setHover(getID);
  };
  const handleMouseLeave = (getID) => {
    setHover(rating);
  };
  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleOnClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={50}
            />
          );
        })}
      </div>
    </>
  );
}
