import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetAllProducts() {
  const [prodataData, setproductData] = useState({
    id: "",
    productname: "",
  });
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="get-product-container">
          <div className="form_Data">
            <label htmlFor="ID">
              <input type="text" name="id" id="id" />
            </label>
          </div>
          <div className="form_data">
            <label htmlFor="productname">
              <input type="text" name="productname" id="productname" />
            </label>
          </div>
          <div className="submit_btn">
            <button
              onClick={() => {
                Navigate("/showproduct");
              }}
            >
              Get Product
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetAllProducts;
