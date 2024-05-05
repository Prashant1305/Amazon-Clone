import React from 'react'
import "./Addresses.css";
import { v4 as uuid } from 'uuid';
import { MyAddresses } from '../../../Context/AddressContext';
import { useNavigate } from 'react-router-dom';
import { removeAddress_api } from '../../../utils/ApiUtils';
import { toast } from 'react-toastify';
import { MyLoginValues } from '../../../Context/AuthContext';

function Addresses() {
    const navigate = useNavigate();
    const { allAddress, setAllAddress } = MyAddresses();
    const { token, clientData, setClientData } = MyLoginValues();

    const removeAddress = async (_id) => {
        try {
            const res = await removeAddress_api(token, { _id });
            if (res.status === 200) {
                toast.success("Address removed succesfully");
                setAllAddress(
                    allAddress.filter((element) => {
                        return element._id !== _id
                    })
                )
            }
            else {
                toast.error("failed to remove address");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const selectThisAddress = (e, address) => {
        console.log(address);
        // e.currentTarget.classList.toggle("selected_address");
        console.dir(e.currentTarget);
        setClientData({ ...clientData, address: address })
    }

    return (
        <div className='address_container' >
            <div className='address_box add_address' onClick={() => {
                navigate("/addaddress")
            }}>
                <p>Add Address</p>
            </div>
            {allAddress && allAddress.map((address) => {
                // console.log(address);
                return (<div key={uuid()}>
                    <div className={`address_box ${(clientData.address === address) ? 'selected_address' : ''}`} onClick={(e) => {
                        selectThisAddress(e, address);
                    }}>
                        {address?.defaultAddress && <div className='default_container'>Default Address</div>}

                        <div className='full_address_info' >
                            <div className='basic_info_container'>
                                <p id='address_name'>{address.fullname}</p>
                                <p className='address_feild'>{address.flat}</p>
                                <p className='address_feild'>{address.area}</p>
                                {address.landmark !== "" && <p className='address_feild'>{address.landmark}</p>}
                                <p className='address_feild'>
                                    {address.town !== "" && <span >{address.town},{" "}</span>}
                                    <span >{address.state}{" "}</span>
                                    {address.pincode}
                                </p>
                                <p className='address_feild'>Mobile number: {address.phone}</p>
                            </div>
                        </div>

                        <div className='address_delete_edit'>
                            <span onClick={() => {
                                navigate(`/editaddress/${address._id}`);
                            }}>Edit</span> | <span onClick={() => {
                                removeAddress(address._id);
                            }}>Remove</span>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Addresses