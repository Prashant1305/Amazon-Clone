import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../../utils/ApiUtils";
import { ProductRender } from "./ProductsRender";

const ProductTest = () => {
  const [productData, setProductData] = useState();
  useEffect(() => {
    getProductsByCategory("Mobile")
      .then((res) => {
        console.log(res.data.msg);
        setProductData(res.data.msg);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {productData ? <ProductRender productsArray={productData} /> : <></>}
    </div>
  );
};

export default ProductTest;
