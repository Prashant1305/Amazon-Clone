import React, { createContext, useContext, useEffect, useState } from 'react'
import { MyLoginValues } from './AuthContext';
import { allAddresses } from '../utils/ApiUtils';

const deliveryAddressContext = createContext();
function AddressContext({ children }) {

    const [allAddress, setAllAddress] = useState([]);
    const { token } = MyLoginValues();

    const getAllAddress = async () => {
        try {
            const temp = await allAddresses(token);
            // console.log(temp.data.msg.deliveryAddress);
            setAllAddress(temp.data.msg.deliveryAddress);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (token) {
            getAllAddress();
        }
    }, [token]);

    return (
        <deliveryAddressContext.Provider value={{ allAddress, setAllAddress, getAllAddress }}>{children}</deliveryAddressContext.Provider>
    )
}

export function MyAddresses() {
    return useContext(deliveryAddressContext);
}
export default AddressContext