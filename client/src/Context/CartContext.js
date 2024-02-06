import React, { createContext, useContext, useReducer } from 'react'
import { singleProductDetails } from '../utils/ApiUtils';

const cartWalaContext = createContext();
function cartReducer(cartData, action) {
    let temp = [...cartData];
    if (action.task == "add") {
        if (temp.length > 0) {
            const addedItem = temp.find((item) => {
                return item._id === action._id;
            })
            if (addedItem) {
                temp.map((item) => {
                    if (item._id === addedItem._id) {
                        item.quantity++;
                        alert(`item already in cart with quantity${item.quantity}`);
                    }
                })
                return temp;
            }
        }
        singleProductDetails(action._id)
            .then((res) => {
                // {_id,url,}=res.data.msg[0];
                // return [...temp, { _id: product._id, quantity: 1, ur }]
            })

        // return [...temp,]

    }

}
function CartContext({ children }) {
    const [cartData, dispatch] = useReducer(cartReducer, []);
    return (
        <cartWalaContext.Provider value={{ cartData, dispatch }}>{children}</cartWalaContext.Provider>
    )
}

export function CartValue() {
    return useContext(cartWalaContext);
}

export default CartContext;