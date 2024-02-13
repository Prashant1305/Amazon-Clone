import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../../utils/ApiUtils";
import { ProductRender } from "./ProductsRender";
import { useParams } from "react-router-dom";

const ProductTest = ({ categori }) => {
  const [productData, setProductData] = useState();
  const cat = useParams();
  const category = cat ? cat : categori;
  useEffect(() => {
    getProductsByCategory(category)
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
