import React, { useState } from "react";
import { MyLoginValues } from "../../Context/AuthContext";
import { deleteproduct } from "../../utils/ApiUtils";

const DeleteProduct = () => {
  const [id, setid] = useState("");
  const { token } = MyLoginValues();
  console.log("ye andar aa gya hai ");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteproduct(id, token);
      alert("poduct delete succsessfully");
    } catch (error) {
      console.error("Error Deleting product:", error);
      alert("Failed to delete product. Please try again later.");
    }
  };

  const handlechange = (e) => {
    setid(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="container">
          <label htmlFor="delete">Product ID</label>
          <div className="form_Data">
            <input
              type="text"
              name="id"
              id="id"
              value={id}
              onChange={handlechange}
            />
          </div>
          <div className="btn-submit">
            <button>Press to Delete product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteProduct;
