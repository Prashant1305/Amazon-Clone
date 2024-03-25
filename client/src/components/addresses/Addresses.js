import React from 'react'
import "./Addresses.css";
import { v4 as uuid } from 'uuid';
import { MyAddresses } from '../../Context/AddressContext';
import { useNavigate } from 'react-router-dom';

function Addresses() {
    const navigate = useNavigate();
    const { allAddress } = MyAddresses();

    return (
        <div className='address_container' >
            <div className='address_box add_address' onClick={() => {
                navigate("/addaddress")
            }}>
                <p>Add Address</p>
            </div>
            {allAddress && allAddress.map((address) => {
                return (<div key={uuid()}>
                    <div className='address_box' >
                        {address.defaultAddress && <div className='default_container'>Default Address</div>}

                        <div className='full_address_info'>
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
                            }}>Edit</span> | <span>Remove</span>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Addresses