import React, { useState } from 'react'
import './paymentOption.css'

function PaymentOptions() {
    const [paymentMethod, setPaymentMethod] = useState({
        "upi": false,
        "net_banking": false,
        "credit_or_debit_card": false,
        "emi": false,
        "cash_on_delivery": false,
    })
    const handleClick = (e) => {
        let temp = {};
        for (let i in paymentMethod) {

            if (i === e.currentTarget.children[0].id) {
                temp[i] = !paymentMethod[i];
            } else {
                temp[i] = false;
            }
        }
        setPaymentMethod({ ...temp });
    }
    return (
        <div className='payment_option_container'>
            <div className='payment_method' onClick={handleClick}>
                <input type="radio" id='upi' checked={paymentMethod.upi} readOnly />
                <span >UPI</span>
            </div>
            <div className='payment_method' onClick={(e) => {
                handleClick(e);
            }}>
                <input type='radio' id="net_banking" checked={paymentMethod.net_banking} readOnly />
                <span>Net Banking</span>
            </div>
            <div className='payment_method' onClick={(e) => {
                handleClick(e);
            }}>
                <input type='radio' id="credit_or_debit_card" checked={paymentMethod.credit_or_debit_card} readOnly />
                <span >Credit or Debit Card</span>
            </div>
            <div className='payment_method' onClick={(e) => {
                handleClick(e);
            }}>
                <input type='radio' id="emi" checked={paymentMethod.emi} readOnly />
                <span >EMI</span>
            </div>
            <div className='payment_method' onClick={(e) => {
                handleClick(e);
            }}>
                <input type='radio' id="cash_on_delivery" checked={paymentMethod.cash_on_delivery} readOnly />
                <span >Cash On Delivery</span>
            </div>

        </div >
    )
}

export default PaymentOptions