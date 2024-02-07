import React, { useEffect, useState } from 'react'
import { CartValue } from '../Context/CartContext'
import styles from "./Cart.module.css";
import CartItem from '../components/CartItem';

function Cart() {
    const { cartData, setCartData } = CartValue();
    const [total, setTotal] = useState(0);
    const calculateTotal = () => {
        let totalVal = 0;
        cartData.map((item) => {
            totalVal += item.discounted_price * item.quantity;
        })
        setTotal(totalVal);
    }
    useEffect(() => {
        calculateTotal();
    }, [cartData]);
    return (
        <div className={styles.cart}>
            <h2 className={styles.cartHeading}>Shopping Cart</h2>
            <div>
                {cartData.map((item) => <CartItem {...item} key={item._id} />)}
            </div>
            <h1>Total Amount - {' '} &#8377; {total}</h1>
        </div>
    )
}

export default Cart