import React, { useEffect, useState } from 'react';
import "./EditAddress.css";
import { useNavigate, useParams } from 'react-router-dom';
import { MyAddresses } from '../Context/AddressContext';


function EditAddress() {
    const navigate = useNavigate();
    const { allAddress } = MyAddresses();
    const params = useParams()
    console.log(params.number);
    const [editAddressInfo, setEditAddressInfo] = useState({ ...allAddress[params.number] });

    const handlesubmit = (e) => {
        e.preventDefault();
    };


    const handleChange = (e) => {
        // console.log(address);
        setEditAddressInfo({ ...editAddressInfo, [e.target.id]: e.target.value });
    };
    if (!editAddressInfo) {
        return (<div className="edit_address_container"><h1>Loading...</h1></div>)
    }
    else if (Object.keys(editAddressInfo).length === 0) {
        return (<div className="edit_address_container"><h1>you are  not authorised </h1></div>)
    }
    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="../blacklogodigitalstore.png" alt="blacklogodigitalstore" />
                    </div>
                    <div className="sign_form">
                        <form onSubmit={handlesubmit}>
                            <h1>Add new address</h1>
                            <div className="form_data">
                                <label htmlFor="Fullname">Full Name</label>
                                <input
                                    type="text"
                                    name="Fullname"
                                    id="fullname"
                                    placeholder="Atleast 3 characters "
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={editAddressInfo.fullname}
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
                                    value={editAddressInfo.phone}
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
                                    value={editAddressInfo.pincode}
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
                                    value={editAddressInfo.flat}
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
                                    value={editAddressInfo.area}
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
                                    value={editAddressInfo.landmark}
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
                                    value={editAddressInfo.town}
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
                                    value={editAddressInfo.state}
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="deliveryAddress">Add as default address</label>
                                <input
                                    type="text"
                                    name="deliveryAddress"
                                    id="deliveryAddress"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={editAddressInfo.defaultAddress}
                                />
                            </div>
                            <button className="signin_btn">Update Address</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditAddress