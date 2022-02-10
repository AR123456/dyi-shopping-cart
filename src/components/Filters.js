import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
  const [rate, setRate] = useState(2);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => {}}
          //   checked ={}
        ></Form.Check>
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => {}}
          //   checked ={}
        ></Form.Check>
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => {}}
          //   checked ={}
        ></Form.Check>
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only "
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => {}}
          //   checked ={}
        ></Form.Check>
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        {/* sending this to Rating.js , need to get the rating (i) from the on click and set it to state*/}
        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        ></Rating>
      </span>
      <Button variant="light" onClick={() => {}}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
