import React, { useEffect, useState } from 'react';
import "./EditAddress.css";
import { useNavigate, useParams } from 'react-router-dom';
import { MyAddresses } from '../Context/AddressContext';
import { updateAddress } from '../utils/ApiUtils';
import { MyLoginValues } from '../Context/AuthContext';
import { toast } from 'react-toastify';

function EditAddress() {
    const navigate = useNavigate();
    const { allAddress, getAllAddress } = MyAddresses();
    const [fillDetails, setFillDetails] = useState();
    const [editAddressInfo, setEditAddressInfo] = useState({
        _id: "",
        fullname: "",
        phone: "",
        pincode: "",
        flat: "",
        area: "",
        state: "",
        defaultAddress: false
    });

    const { token } = MyLoginValues();
    const params = useParams();

    useEffect(() => {
        const loadDetails = () => {
            allAddress.forEach((address) => {
                if (address._id === params._id) {
                    setEditAddressInfo({ ...address });
                    setFillDetails(address);
                }
            })
        };
        loadDetails();

    }, []);

    const [enableSubmitbutton, setEnableSubmitbutton] = useState(false);

    useEffect(() => {

        if (editAddressInfo && fillDetails && (fillDetails.fullname !== editAddressInfo.fullname || fillDetails.phone !== editAddressInfo.phone || fillDetails.pincode !== editAddressInfo.pincode || fillDetails.flat !== editAddressInfo.flat || fillDetails.area !== editAddressInfo.area || fillDetails.landmark !== editAddressInfo.landmark || fillDetails.town !== editAddressInfo.town || fillDetails.state !== editAddressInfo.state || fillDetails.defaultAddress !== editAddressInfo.defaultAddress)) {
            setEnableSubmitbutton(true);
        } else {
            setEnableSubmitbutton(false);
        }
    }, [editAddressInfo]);

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { "deliveryAddress": [{ ...editAddressInfo }] };
            const res = await updateAddress(token, data);
            toast.success(res.data.msg);
            navigate('/checkout');
            getAllAddress();
        } catch (error) {
            console.log(error);
            toast.error("failed to update address");
        }
    };


    const handleChange = (e) => {
        setEditAddressInfo({ ...editAddressInfo, [e.target.id]: e.target.value });
    };

    return (<>
        {
            editAddressInfo._id === "" && <div className="edit_address_container"><h1>you are not authorised! </h1></div>
        }
        {
            editAddressInfo._id !== "" &&
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="../blacklogodigitalstore.png" alt="blacklogodigitalstore" />
                    </div>
                    <div className="sign_form">
                        <form >
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
                                <label htmlFor="defaultAddress">Add as default address</label>
                                <input
                                    type="text"
                                    name="defaultAddress"
                                    id="defaultAddress"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={editAddressInfo.defaultAddress}
                                />
                            </div>
                            {enableSubmitbutton && <button className="signin_btn" onClick={(e) => {
                                handlesubmit(e);
                            }}>Update Address</button>}
                        </form>
                    </div>
                </div>
            </section>

        }
    </>
    )
}

export default EditAddress