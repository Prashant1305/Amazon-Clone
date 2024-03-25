import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Addresses from '../components/addresses/Addresses';
import { MyLoginValues } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import PaymentOptions from '../components/payment/PaymentOptions';

function Checkout() {
    const [toggleDelivery, setToggleDelivery] = useState(false);
    const [togglePayment, setTogglePayment] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { token, isLogin } = MyLoginValues();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin === false) {
            navigate("/");
        }
    }, [isLogin]);


    const handleToggle = (e, currState, setstate) => {
        setstate(!currState);
        // console.dir(e.currentTarget.classList);
    }

    return (
        <div className='checkout_container'>
            <div className='checkout_items' onClick={(e) => {
                handleToggle(e, toggleDelivery, setToggleDelivery);
            }}>
                <div className='checkout_items_headers'>
                    <span className='header_heading' >1 {"   "} Delivery address</span>
                    {!toggleDelivery && <FaChevronDown />}
                    {toggleDelivery && <FaChevronUp />}
                </div>
                {toggleDelivery && <Addresses />}
            </div>
            <div className='item_line'></div>
            <div className='checkout_items' onClick={(e) => {
                handleToggle(e, togglePayment, setTogglePayment);
            }}>
                <div className='checkout_items_headers'>
                    <span className='header_heading'>2 {"   "} Payment options</span>
                    {!togglePayment && <FaChevronDown />}
                    {togglePayment && <FaChevronUp />}
                </div>
                {togglePayment && <PaymentOptions />}
            </div>
            <div className='item_line'></div>
            <div className='checkout_items' onClick={(e) => {
                handleToggle(e, toggleOrders, setToggleOrders)
            }} >
                <div className='checkout_items_headers'>
                    <span className='header_heading'>3 {"   "} Review orders</span>
                    {!toggleOrders && <FaChevronDown />}
                    {toggleOrders && <FaChevronUp />}
                </div>
                {toggleOrders && <div>order1</div>}
            </div>

        </div>
    )
}

export default Checkout