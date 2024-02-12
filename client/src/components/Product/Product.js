import React from "react";

const Product = (props) => {
  return (
    <>
      <div>
        <div>
          <img src={props.details.url} alt="failed to load" />
          <label>{props.details.name}</label>
        </div>
      </div>{" "}
    </>
  );
};

export default Product;
