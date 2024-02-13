import React, { useEffect, useState } from "react";
import Product from "./Product";

export const ProductRender = ({ productsArray }) => {
  const [productRow, setProductRow] = useState([]);
  useEffect(() => {
    const row = [];
    productsArray.forEach((product) => {
      row.push(<Product details={product} />);
    });
    setProductRow(row);
  }, [productsArray]);

  return <>{productRow}</>;
};
