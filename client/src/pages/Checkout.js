import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Addresses from '../components/checkout/addresses/Addresses';
import { MyLoginValues } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import PaymentOptions from '../components/checkout/payment/PaymentOptions';
import ReviewOrders from '../components/checkout/reviewOrders/ReviewOrders';

function Checkout() {
    const [toggleDelivery, setToggleDelivery] = useState(false);
    const [togglePayment, setTogglePayment] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { token, isLogin, clientData } = MyLoginValues();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin === false) {
            navigate("/");
        }
    }, [isLogin]);

    const handlePlaceOrder = () => {
        // write place order code using client data
    }
    const handleToggle = (e, currState, setstate) => {
        setstate(!currState);
        // console.dir(e.currentTarget.classList);
    }

    return (
        <div className='checkout_contianer'>
            <div className='checkout_options'>

                <div className='checkout_items' >
                    <div className='checkout_items_headers' onClick={(e) => {
                        handleToggle(e, toggleDelivery, setToggleDelivery);
                    }}>
                        <span className='header_heading' >1 {"   "} Delivery address</span>
                        {!toggleDelivery && <FaChevronDown />}
                        {toggleDelivery && <FaChevronUp />}
                    </div>
                    {toggleDelivery && <Addresses />}
                </div>

                <div className='item_line'></div>
                <div className='checkout_items' >
                    <div className='checkout_items_headers' onClick={(e) => {
                        handleToggle(e, togglePayment, setTogglePayment);
                    }}>
                        <span className='header_heading'>2 {"   "} Payment options</span>
                        {!togglePayment && <FaChevronDown />}
                        {togglePayment && <FaChevronUp />}
                    </div>
                    {togglePayment && <PaymentOptions />}
                </div>
                <div className='item_line'></div>

                <div className='checkout_items' >
                    <div className='checkout_items_headers' onClick={(e) => {
                        handleToggle(e, toggleOrders, setToggleOrders)
                    }} >
                        <span className='header_heading'>3 {"   "} Review orders</span>
                        {!toggleOrders && <FaChevronDown />}
                        {toggleOrders && <FaChevronUp />}
                    </div>
                    {toggleOrders && <div><ReviewOrders /></div>}
                </div>
            </div>
            <button className='place_order' onClick={handlePlaceOrder}>Place Order</button>
        </div>
    )
}

export default Checkout