import React, { useEffect, useState } from "react";
import { CartValue } from "../Context/CartContext";
import styles from "./Cart.module.css";
import CartItem from "../components/CartItem";
import { MyLoginValues } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartData } = CartValue();
  const [total, setTotal] = useState(0);
  const { isLogin } = MyLoginValues();
  const navigate = useNavigate();

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
        <h1>Total Amount - &#8377; {total}</h1>
      </div>
    </>
  );
}

export default Cart;
