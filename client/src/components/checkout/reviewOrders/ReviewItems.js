import React from 'react'
import "./reviewItem.css";
function ReviewItems({ name, quantity, url, discounted_price }) {
    return (
        <div className='review_item'>
            <div className='review_item_img'><img src={url} /></div>
            <div className='review_item_name'>{name}</div>
            <div className='review_item_qunatity'>{quantity}</div><div className='review_item_discounted_price'>{discounted_price}</div>
        </div>
    )
}

export default ReviewItems