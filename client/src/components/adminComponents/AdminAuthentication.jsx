import React from 'react'
import { useNavigate } from "react-router-dom";
import { MyLoginValues } from '../../Context/AuthContext';

function AdminAuthentication({ children }) {
    const navigate = useNavigate();
    const { clientData } = MyLoginValues();
    if (!clientData || !clientData.isAdmin) {
        navigate("/");
    }
    return (
        <>{children}</>
    )
}

export default AdminAuthentication