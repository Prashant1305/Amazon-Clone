import React from 'react'
import "./Item.css"
import { useNavigate } from 'react-router-dom';

function Item({ details }) {
    // console.log(details)

    const navigate = useNavigate();
    return (
        <>
            <div id='item_section' >
                <div id="item_image" onClick={(e) => {
                    navigate(`../product/${details._id}`)
                }}>
                    <img src={`${details.url[0]}`} alt="failed to load" className='image_tag' />
                </div>
                <div id='middle_section' onClick={(e) => {
                    navigate(`../product/${details._id}`)
                }}>
                    <div id='item_name_section'>{details.name}</div>
                    <div id='item_price_section'>
                        <span id="feild_of_discount" > ₹-</span>
                        <span id='item_price_value_section'>{details.discounted_price}</span>
                        <span id="feild_of_mrp" > M.R.P: <span id="strike_section">₹-{details.actual_price}</span>&nbsp;&nbsp;&nbsp;&nbsp;({details.discount_percentage}%off)</span>
                    </div>

                    <div>Free Delivery</div>

                </div>

                <div id='right_section'>
                    <div className='product_right_section_btn' onClick={() => {
                        console.log("wishlist button got clicked");
                    }}>Add to wishList
                    </div>
                    <div className='product_right_section_btn' onClick={() => {
                        console.log("Add to cart button got clicked");
                    }}>
                        Add to cart
                    </div>
                    <div className='product_right_section_btn' onClick={() => {
                        console.log("buy now button got clicked");
                    }}> Buynow</div>
                </div>
            </div>
        </>
    )
}

export default Item