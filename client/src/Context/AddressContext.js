import React, { createContext, useContext, useEffect, useState } from 'react'
import { MyLoginValues } from './AuthContext';
import { allAddresses } from '../utils/ApiUtils';
import { toast } from 'react-toastify';


const deliveryAddressContext = createContext();
function AddressContext({ children }) {

    const [allAddress, setAllAddress] = useState([]);
    const { clientData, token, setClientData } = MyLoginValues();

    const getAllAddress = async () => {
        try {
            const temp = await allAddresses(token);
            // console.log(temp.data.addressList);
            if (temp.data.addressList.length > 0) {
                toast.success("Address fetched succesfully")
            } else {
                toast.info("No Saved address Found")
            }
            setAllAddress(temp.data.addressList);
        } catch (error) {
            toast.error("Failed to fetch address");
            console.log(error);
        }
    }

    useEffect(() => {
        if (token) {
            getAllAddress();
        } else {
            setAllAddress([]);
        }
    }, [token]);
    useEffect(() => {
        if (allAddress.length > 0) {

            for (let i of allAddress) {
                if (i.defaultAddress) {
                    setClientData({ ...clientData, address: i })
                    break;
                }
            }
        }

    }, [allAddress]);

    return (
        <deliveryAddressContext.Provider value={{ allAddress, setAllAddress, getAllAddress }}>{children}</deliveryAddressContext.Provider>
    )
}

export function MyAddresses() {
    return useContext(deliveryAddressContext);
}
export default AddressContext