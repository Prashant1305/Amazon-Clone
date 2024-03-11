import React, { useState } from 'react'
import './Checkout.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Addresses from '../components/addresses/Addresses';

function Checkout() {
    const [toggleDelivery, setToggleDelivery] = useState(false);
    const [togglePayment, setTogglePayment] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const handleToggle = (e, currState, setstate) => {
        setstate(!currState);
        console.dir(e.currentTarget);
    }

    return (
        <div className='checkout_container'>
            <div className='checkout_items'>
                <div className='checkout_items_headers'>
                    <span className='header_heading'>1 {"   "} Delivery address</span>

                    {!toggleDelivery && <FaChevronDown onClick={(e) => {
                        handleToggle(e, toggleDelivery, setToggleDelivery);
                    }} />}
                    {toggleDelivery && <span>
                        <FaChevronUp onClick={(e) => {
                            handleToggle(e, toggleDelivery, setToggleDelivery);
                        }} />
                    </span>}
                </div>
                {toggleDelivery && <div>Address</div>}
            </div>
            <div className='item_line'></div>
            <div className='checkout_items'>
                <div className='checkout_items_headers'>
                    <span className='header_heading'>2 {"   "} payment options</span>
                    {!togglePayment && <FaChevronDown onClick={(e) => {
                        handleToggle(e, togglePayment, setTogglePayment);
                    }} />}

                    {togglePayment && <span><FaChevronUp onClick={(e) => {
                        handleToggle(e, togglePayment, setTogglePayment);
                    }} /></span>}
                </div>
                {togglePayment && <div>paytm</div>}
            </div>
            <div className='item_line'></div>
            <div className='checkout_items'>
                <div className='checkout_items_headers'>
                    <span className='header_heading'>3 {"   "} Review orders</span>
                    {!toggleOrders && <FaChevronDown onClick={(e) => {
                        handleToggle(e, toggleOrders, setToggleOrders)
                    }} />}
                    {toggleOrders && <span><FaChevronUp onClick={(e) => {
                        handleToggle(e, toggleOrders, setToggleOrders)
                    }} /></span>}
                </div>
                {toggleOrders && <div>order1</div>}
            </div>

        </div>
    )
}

export default Checkout