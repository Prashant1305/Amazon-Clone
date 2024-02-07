import React from 'react'
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { CartValue } from '../Context/CartContext';


function CartItem({ _id, url, name, discounted_price, quantity, stock_quantity }) {
    // console.log(props);
    const { cartData, setCartData } = CartValue();
    return (
        <div className={styles.cartItem}>
            {/* left */}
            <div className={styles.imgAndTitle}>
                <div className={styles.imgContainer}><img src={url} alt="failed to load" className={styles.cartImage} /></div>
                <h3>{name.substr(0, 200)}</h3>
            </div>
            {/* right */}
            <div className={styles.otherControls}>
                <div className={styles.qtyInput}>
                    <button onClick={() => { setCartData({ task: "addQuantity", _id }) }}><AiOutlinePlus /></button>
                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button onClick={() => { setCartData({ task: "decreaseQuantity", _id }) }}><AiOutlineMinus /></button>
                </div>
                <p>&#8377; {discounted_price * quantity}</p>
                <button className={styles.removeItemBtn} onClick={() => { setCartData({ task: "remove", _id }) }}><ImCross /></button>
            </div>
        </div>
    )
}

export default CartItem