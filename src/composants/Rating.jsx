import React, { useState } from "react";
import "../Styles/rating.scss"

const StarRating = () => {
  const [rating, setRating] = useState(3);
  // affiche les étoilles //
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
           type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">★{star}</span>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;


