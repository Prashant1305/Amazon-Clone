import React, { useEffect, useState } from 'react'
import './reviewOrder.css'
import { CartValue } from '../../../Context/CartContext'
import ReviewItems from './ReviewItems';
function ReviewOrders() {
    const { cartData } = CartValue();
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let temp = 0;
        cartData.forEach(element => {
            temp += element.discounted_price;
        });
        setTotalPrice(temp);
    }, [cartData]);

    return (
        <div className='review_order_container'>
            <div className='review_order_header_conaitner'>
                <div id='review_item_header_image'>Image</div>
                <div id='review_item_header_name'>Name</div>
                <div id='review_item_header_qunatity'>Quantity</div><div id='review_item_discounted_price'>Final price</div>
            </div>
            {cartData.map((item) => {
                return <ReviewItems name={item.name} quantity={item.quantity} url={item.url} stock_quantity={item.stock_quantity} discounted_price={item.discounted_price} />
            })}

            <div id='total_price'>{totalPrice}</div>
        </div>
    )
}

export default ReviewOrders