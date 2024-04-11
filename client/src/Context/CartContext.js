import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { MyLoginValues } from './AuthContext';
import { getCartDataFromServer, postCartData } from '../utils/ApiUtils';
import { toast } from 'react-toastify';

function reducer(cartData, action) {
    // console.log(action);

    switch (action.task) {
        case "restoreCart":
            return action.newCartData;

        case "addInCart": // also whole product data
            let temp = [...cartData];
            if (action.productData.stock_quantity === 0) {
                toast.error("Item out stock");
                return temp;
            }
            if (temp.length > 0) {
                const addedItem = temp.find((item) => {
                    return item._id === action.productData._id;
                })
                // console.log(addedItem)
                if (addedItem) {
                    if (addedItem.quantity === addedItem.stock_quantity) {
                        toast.info("you have reached stock limit");
                    }
                    else {
                        temp.forEach((item) => {
                            if (item._id === addedItem._id) {
                                item.quantity++;
                                toast.info(`${item.quantity} ${item.name.substr(0, 10)}... in cart`);
                            }
                        })
                    }
                    return temp;
                }
            }
            let { _id, id, url, name, discounted_price, stock_quantity } = action.productData;
            temp.push({ _id, id, url, name, discounted_price, quantity: 1, stock_quantity });
            return temp;

        case "remove":
            const remove_id = action._id;
            let finalRemoveCart = [];
            cartData.forEach((item) => {
                if (item._id !== remove_id) {
                    finalRemoveCart.push(item);
                }
            })
            // console.log(finalRemoveCart)
            return finalRemoveCart;

        case "decreaseQuantity":
            const decrease_id = action._id;
            let finalDecreaseCart = [];
            cartData.map((item) => {
                if (item._id === decrease_id) {
                    if (item.quantity > 1) {
                        finalDecreaseCart.push({ ...item, 'quantity': item.quantity - 1 });
                    }
                    // else when item quantity ==1 removed
                } else {
                    finalDecreaseCart.push({ ...item });
                }

                return 0;
            })
            return finalDecreaseCart;

        case "addQuantity":
            const addQuantity_id = action._id;
            let finalIncreaseCart = [];
            cartData.forEach((item) => {
                if (item._id === addQuantity_id) {
                    if (item.quantity >= item.stock_quantity) {
                        toast.info(`only ${item.stock_quantity} availble`);
                        finalIncreaseCart.push(item);
                    }
                    else {
                        finalIncreaseCart.push({ ...item, 'quantity': item.quantity + 1 });
                    }
                }
                else {
                    finalIncreaseCart.push(item);
                }
            })
            return finalIncreaseCart;

        default: console.log("case with no matching task");
            return cartData;
    }
}
const cartWalaContext = createContext();

function CartContext({ children }) {
    const [cartData, setCartData] = useReducer(reducer, []);
    const [cartNumber, setCartNumber] = useState("Loding")
    const { isLogin, token } = MyLoginValues();
    useEffect(() => {
        if (!isLogin) {
            setCartData({ task: "restoreCart", newCartData: [] });
            setCartNumber("plz_signin");

        } else {
            let rawToken = localStorage.getItem("token");
            let len = (rawToken.length) - 2;
            let new_token = rawToken.substr(1, len);

            setCartNumber("Loading...");
            getCartDataFromServer(new_token)
                .then((res) => {
                    if (res.status === 200) {
                        setCartData({ task: "restoreCart", newCartData: res.data.msg });
                    }
                    else if (res.status === 202) {
                        setCartNumber(0);
                        toast.success(res.data.msg);
                    }

                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [isLogin]);

    const updateCartDataToServer = () => {
        // if (cartData.length > 0) {
        const items = [];
        for (let i of cartData) {
            items.push({ "object_id": i._id, "quantity": i.quantity });
        }
        if (token) {
            console.log(token);
            postCartData({ items }, token)
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("cart data posted");
                    }
                })
                .catch((error) => {
                    toast.error("failed to upload");
                    console.log("error from updateCartDataToServer", error);
                })
        }
    }
    useEffect(() => {

        if (isLogin) {
            updateCartDataToServer();
            setCartNumber(`${cartData.length}`);
        }
    }, [cartData]);

    return (
        <cartWalaContext.Provider value={{ cartData, setCartData, cartNumber, setCartNumber }}>{children}</cartWalaContext.Provider>
    )
}

export function CartValue() {
    return useContext(cartWalaContext);
}

export default CartContext;