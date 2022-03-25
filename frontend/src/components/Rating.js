import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// getting state from parent component
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {/* //just using the index in the map here so unign _ */}
      {[...Array(5)].map((_, i) => (
        // onclick is comiming from the parent send i to it and get style from parent (filters.js)
        <span key={i} onClick={() => onClick(i)} style={style}>
          {/* with each iteration check rating if greater than index, if greater than index AiFillStart */}
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15ps" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
