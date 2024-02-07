import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { MyLoginValues } from './AuthContext';

function reducer(cartData, action) {

    switch (action.task) {
        case "addInCart": // also whole product data
            let temp = [...cartData];
            if (temp.length > 0) {
                const addedItem = temp.find((item) => {
                    return item._id === action.productData._id;
                })
                if (addedItem) {
                    temp.map((item) => {
                        if (item._id === addedItem._id) {
                            item.quantity++;
                            alert(`${item.quantity} ${item.name.substr(0, 10)}... in cart`);
                        }
                    })
                    return temp;
                }
            }
            let { _id, url, name, discounted_price, stock_quantity } = action.productData;
            temp.push({ _id, url, name, discounted_price, quantity: 1, stock_quantity });
            return temp;

        case "remove":
            const remove_id = action._id;
            let finalRemoveCart = [];
            cartData.map((item) => {
                if (item._id !== remove_id) {
                    finalRemoveCart.push(item);
                }
            })
            return finalRemoveCart;
        case "decreaseQuantity":
            const decrease_id = action._id;
            let finalDecreaseCart = [];
            cartData.map((item) => {
                if (item._id === decrease_id) {
                    if (item.quantity !== 1) {
                        finalDecreaseCart.push({ ...item, ['quantity']: item.quantity - 1 });
                        console.log(finalDecreaseCart);
                    }
                    // else when item quantity ==1 removed
                }
            })
            return finalDecreaseCart;
        case "addQuantity":
            const addQuantity_id = action._id;
            let finalIncreaseCart = [];
            cartData.map((item) => {
                if (item._id === addQuantity_id) {
                    if (item.quantity === item.stock_quantity) {
                        alert(`only ${item.stock_quantity} availble`);
                        finalIncreaseCart.push(item);
                    }
                    else {
                        finalIncreaseCart.push({ ...item, ['quantity']: item.quantity + 1 });
                    }
                }
                else {

                    finalIncreaseCart.push(item);
                }
            })
            return finalIncreaseCart;

    }
    console.log("case with no matching task");
    return cartData;

}
const cartWalaContext = createContext();

function CartContext({ children }) {
    const [cartData, setCartData] = useReducer(reducer, []);
    const [cartNumber, setCartNumber] = useState("Loding")
    const { isLogin } = MyLoginValues();

    useEffect(() => {
        if (!isLogin) {
            setCartNumber("plz_signin");
        } else {
            setCartNumber(`${cartData.length}`);
        }

    }, [cartData, isLogin]);

    return (
        <cartWalaContext.Provider value={{ cartData, setCartData, cartNumber }}>{children}</cartWalaContext.Provider>
    )
}

export function CartValue() {
    return useContext(cartWalaContext);
}

export default CartContext;