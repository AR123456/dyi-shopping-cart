import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// getting state from parent component
const Rating = ({ rating, onClick, style }) => {
  //just using the index in the map here
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        //with each itteration check rating if greater than index, if greater than index AiFillStart
        <span>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15ps" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
// 32:31 resume  https://www.youtube.com/watch?v=HptuMAUaNGk
