import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { addAddress } from "../utils/ApiUtils";
import { toast } from 'react-toastify';
import { MyLoginValues } from "../Context/AuthContext";
import { MyAddresses } from "../Context/AddressContext";

function AddAddress() {
    const [address, setAddress] = useState({
        fullname: "",
        phone: "",
        pincode: "",
        flat: "",
        area: "",
        landmark: "",
        town: "",
        state: "",
        defaultAddress: true
    });
    const { token } = MyLoginValues();
    const { allAddress, setAllAddress } = MyAddresses();
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addAddress(token, address);

            if (res.status === 200) {
                toast.success("address added succesfully");
                const newAllAddress = allAddress.map((address) => {
                    address.defaultAddress = false;
                    return address;
                })
                setAllAddress([...newAllAddress, { ...address, _id: res.data._id }])
            } else {
                toast.error("failed to update address");

            }
            navigate("/checkout");
        } catch (error) {
            console.log(error);
            toast.error("failed to update address");
        }

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
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    placeholder="Atleast 3 characters "
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={address.fullname}
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