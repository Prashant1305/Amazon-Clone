import React, { useEffect, useState } from "react";
import { CartValue } from "../Context/CartContext";
import styles from "./Cart.module.css";
import CartItem from "../components/CartItem";
import { MyLoginValues } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../utils/ApiUtils";

function Cart() {
  const { cartData, setCartData } = CartValue();
  const [total, setTotal] = useState(0);
  const { isLogin, token } = MyLoginValues();
  const navigate = useNavigate();
  let orderData = { address: "xyz", items: [] };

  const handlePlaceOrder = () => {
    const today = new Date();
    var currentTime = today.toLocaleDateString();
    if (cartData) {
      const items = cartData.map((item) => {
        return { "object_id": item._id, id: item.id, "quantity": item.stock_quantity }
      });
      const timeOfOrder = {
        "timestamp": currentTime,
        "date": "2023-05-13"
      }
      orderData = { ...orderData, timeOfOrder, items };
    }

    placeOrder(token, orderData)
      .then((res) => {
        alert(res.data.msg);
        setCartData({ task: "restoreCart", newCartData: [] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (isLogin === false) {
      navigate("/signin");
    }
    const calculateTotal = () => {
      let totalVal = 0;
      cartData.forEach((item) => {
        totalVal += item.discounted_price * item.quantity;
      });
      setTotal(totalVal);
    };
    calculateTotal();
  }, [cartData, isLogin]);

  if (cartData.length === 0) {
    return (
      <div className={styles.cart}>
        <h1 className={styles.cartHeading}>Cart Empty!</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles.cart}>
        <h2 className={styles.cartHeading}>Shopping Cart</h2>
        <div>
          {cartData.map((item) => (
            <CartItem {...item} key={item._id} />
          ))}
        </div>
        <div className={styles.bottom_part}>
          <h1>Total Amount - &#8377; {total}</h1>
          <button className={styles.order_btn} onClick={handlePlaceOrder}>Place order</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
