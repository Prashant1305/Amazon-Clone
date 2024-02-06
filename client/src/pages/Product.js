import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleProductDetails } from '../utils/ApiUtils';
import { Divider } from '@mui/material';
import "./Product.css";

function Product() {
    const _id = useParams();
    const [productData, setProductData] = useState();

    const fetchSingleProductDetails = () => {
        // console.log(_id);
        singleProductDetails(_id)
            .then((res) => {
                // console.log(res.data.msg[0]);
                setProductData(res.data.msg[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchSingleProductDetails();
    }, []);
    // console.log(id);
    return (<>
        {!productData && <h1 className='cart_section'>Loading</h1>}
        {productData &&
            (<div className='cart_section'>
                <div className='cart_container'>
                    <div className='left_cart'>
                        <img src={`${productData.url}`} alt='failed to load' />
                        <div className='cart_btn'>
                            <button className='cart_btn1'>Add to Cart</button>
                            <button className='cart_btn2'>Buy Now</button>
                        </div>
                    </div>
                    <div className='right_cart'>
                        <h3>{productData.name}</h3>
                        <Divider />
                        <p className="mrp">M.R.P. : <del>₹{productData.actual_price}</del></p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{productData.discounted_price}.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ₹{productData.actual_price - productData.discounted_price} ({productData.discount_percentage}%) </span></p>

                        <div className="discount_box">
                            {productData.discount_percentage > 10 && <h5 >Discount : <span style={{ color: "#111" }}>Extra 10% off</span> </h5>}
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{productData.about.replace('|', 'NEXT')}</span></p>
                    </div>
                </div>
            </div>
            )
        }
    </>
    )
}

export default Product