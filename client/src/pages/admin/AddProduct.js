import React, { useState } from "react";
import "./Admincss/product.css";

const AddProduct = () => {
  const [ProductData, setProductData] = useState({
    Productname: "",
    stockquan: "",
    Category: "",
    Actual_price: "",
    Discounted_price: "",
    Discounted_percentage: "",
    About: "",
    Url: "",
    Rating: "",
    Rating_count: "",
  });

  const handlechange = (e) => {
    setProductData({ ...ProductData, [e.target.id]: e.target.value });
  };
  console.log({ ...ProductData });
  return (
    <div>
      <section>
        <div className="product_container">
          <div className="product_header">
            <h1>Product Deatils</h1>
          </div>
          <div className="details_form">
            <form>
              <div className="form_data">
                <label htmlFor="ProductName">Product Name</label>
                <input
                  type="text"
                  name="productname"
                  id="productname"
                  placeholder="Product Name"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.productname}
                />
              </div>
              <div className="form_data">
                <label htmlFor="stock_qua">Stock Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="Enter stock quantity"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.quantity}
                />
              </div>
              <div className="form_data">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Enter category"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.category}
                />
              </div>
              <div className="form_data">
                <label htmlFor="actual_price">Actual Price</label>
                <input
                  type="number"
                  name="actual_price"
                  id="actual_price"
                  placeholder="Enter Actual Price"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.actual_price}
                />
              </div>
              <div className="form_data">
                <label htmlFor="discouted_price">Dicounted Price</label>
                <input
                  type="number"
                  name="dicounted_price"
                  id="dicounted_price"
                  placeholder="Enter Discounted Price"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.dicounted_price}
                />
              </div>
              <div className="form_data">
                <label htmlFor="discounted_percentage">
                  Discounted Percentage
                </label>
                <input
                  type="number"
                  name="discounted_percentage"
                  id="discounted_percentage"
                  placeholder="Enter Discounted percentage"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.discounted_percentage}
                />
              </div>
              <div className="form_data">
                <label htmlFor="About">About</label>
                <input
                  type="text"
                  name="About"
                  id="About"
                  placeholder="Enter product Description"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.About}
                />
              </div>
              <div className="form_data">
                <label htmlFor="Url">Product URL</label>
                <input
                  type="text"
                  name="Url"
                  id="Url"
                  placeholder="Enter product URL"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.Url}
                />
              </div>
              <div className="form_data">
                <label htmlFor="Rating">Product Rating</label>
                <input
                  type="number"
                  name="Rating"
                  id="Rating"
                  placeholder="Enter product Rating"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.Rating}
                />
              </div>
              <div className="form_data">
                <label htmlFor="Rating_count">Rating count</label>
                <input
                  type="number"
                  name="Rating_count"
                  id="Rating_count"
                  placeholder="Enter Rating of product"
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  value={ProductData.Rating_count}
                />
              </div>
              <div className="form_data">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
