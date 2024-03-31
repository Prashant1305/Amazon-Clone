import React, { useState } from "react";
import "./AddProduct.css";
import { addproduct } from "../../utils/ApiUtils";
import { MyLoginValues } from "../../Context/AuthContext";
import AddProductImageInputHandle from "../../components/adminComponents/addProduct/AddProductImageInputHandle";

const AddProduct = () => {
  const [ProductData, setProductData] = useState({
    id: "",
    name: "",
    stock_quantity: "",
    category: "",
    actual_price: "",
    discounted_price: "",
    discount_percentage: "",
    about: "",
    url: [],
    rating: "",
    rating_count: "",
  });
  const { token } = MyLoginValues();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const numericProductData = {
        ...ProductData,
        stock_quantity: parseInt(ProductData.stock_quantity),
        actual_price: parseFloat(ProductData.actual_price),
        discounted_price: parseFloat(ProductData.discounted_price),
        discount_percentage: parseInt(ProductData.discount_percentage),
        rating: parseFloat(ProductData.rating),
        rating_count: parseInt(ProductData.rating_count),
      };
      console.log(numericProductData);
      await addproduct(numericProductData, token);
      alert("Product added successfully!");
      setProductData({
        id: "",
        name: "",
        stock_quantity: 0,
        category: "",
        actual_price: 0,
        discounted_price: 0,
        discount_percentage: 0,
        about: "",
        url: [],
        rating: 0,
        rating_count: 0,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again later.");
    }
  };

  const handlechange = (e) => {
    console.log("handle change kr rha work");
    if (Array.isArray(e.target)) {
      setProductData({ ...ProductData, [e.target.name]: e.target.value });

    }
    else {
      setProductData({ ...ProductData, [e.target.name]: e.target.value });

    }
  };

  return (
    <>
      <section>
        <div className="product_container">
          <div className='sign_header'>
            <img src='../../blacklogodigitalstore.png' alt='digitalStorelogo' />
          </div>
          <div className="product_details_form">
            <h1>Product Details</h1>
            <form onSubmit={handlesubmit}>
              <div className="form_data">
                <label htmlFor="id">Product ID</label>
                <input className="input_feild"
                  type="text"
                  name="id"
                  id="id"
                  placeholder="Enter Product ID"
                  onChange={handlechange}
                  value={ProductData.id}
                />
              </div>
              <div className="form_data">
                <label htmlFor="name">Product Name</label>
                <input className="input_feild"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Product Name"
                  onChange={handlechange}
                  value={ProductData.name}
                />
              </div>
              <div className="form_data">
                <label htmlFor="stock_quantity">Stock Quantity</label>
                <input className="input_feild"
                  type="number"
                  name="stock_quantity"
                  id="stock_quantity"
                  placeholder="0 for out of stock"
                  onChange={handlechange}
                  value={ProductData.stock_quantity}
                />
              </div>
              <div className="form_data">
                <label htmlFor="category">Category</label>
                <input className="input_feild"
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Mobile|electronics"
                  onChange={handlechange}
                  value={ProductData.category}
                />
              </div>
              <div className="form_data">
                <label htmlFor="actual_price">Actual Price</label>
                <input className="input_feild"
                  type="number"
                  name="actual_price"
                  id="actual_price"
                  placeholder="Price in rs"
                  onChange={handlechange}
                  value={ProductData.actual_price}
                />
              </div>
              <div className="form_data">
                <label htmlFor="discounted_price">Discounted Price</label>
                <input className="input_feild"
                  type="number"
                  name="discounted_price"
                  id="discounted_price"
                  placeholder="Price in rs"
                  onChange={handlechange}
                  value={ProductData.discounted_price}
                />
              </div>
              <div className="form_data">
                <label htmlFor="discount_percentage">Discount Percentage</label>
                <input className="input_feild"
                  type="number"
                  name="discount_percentage"
                  id="discount_percentage"
                  placeholder="enter in numbers only"
                  onChange={handlechange}
                  value={ProductData.discount_percentage}
                />
              </div>
              <div className="form_data">
                <label htmlFor="about">About</label>
                <input className="input_feild"
                  type="text"
                  name="about"
                  id="about"
                  placeholder="Enter product Description"
                  onChange={handlechange}
                  value={ProductData.about}
                />
              </div>
              <div className="form_data">
                <AddProductImageInputHandle ProductData={ProductData} setProductData={setProductData} />
              </div>
              <div className="form_data">
                <label htmlFor="rating">Product Rating</label>
                <input className="input_feild"
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="Enter product Rating from 0 to 5"
                  onChange={handlechange}
                  value={ProductData.rating}
                />
              </div>
              <div className="form_data">
                <label htmlFor="rating_count">Rating count</label>
                <input className="input_feild"
                  type="number"
                  name="rating_count"
                  id="rating_count"
                  placeholder=""
                  onChange={handlechange}
                  value={ProductData.rating_count}
                />
              </div>
              <div className="form_data">
                <button className="add_product_btn" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
