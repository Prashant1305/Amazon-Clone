import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "../utils/ApiUtils";
import { toast } from 'react-toastify';

function AddAddress() {
    const [address, setAddress] = useState({
        fullName: "",
        phone: "",
        pincode: "",
        flat: "",
        area: "",
        landmark: "",
        town: "",
        state: ""
    });
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        // console.log(address);
        setAddress({ ...address, [e.target.id]: e.target.value });
    };
    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="./blacklogodigitalstore.png" alt="blacklogodigitalstore" />
                    </div>
                    <div className="sign_form">
                        <form onSubmit={handlesubmit}>
                            <h1>Add new address</h1>
                            <div className="form_data">
                                <label htmlFor="FullName">Full Name</label>
                                <input
                                    type="text"
                                    name="FullName"
                                    id="fullName"
                                    placeholder="Atleast 3 characters "
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.fullName}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="Phone">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.phone}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="Pincode">Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    id="pincode"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.pincode}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="flat">House no.</label>
                                <input
                                    type="text"
                                    name="flat"
                                    id="flat"
                                    placeholder="Flat, House no., Building, Apartment"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.flat}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="area">Area, Street, Sector, Village</label>
                                <input
                                    type="text"
                                    name="area"
                                    id="area"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.area}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="landmark">Landmark</label>
                                <input
                                    type="text"
                                    name="landmark"
                                    id="landmark"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.landmark}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="town">Town/City</label>
                                <input
                                    type="text"
                                    name="town"
                                    id="town"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.town}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.state}
                                />
                            </div>
                            <button className="signin_btn">Add address</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddAddress