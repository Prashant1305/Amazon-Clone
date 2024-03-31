import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { MyLoginValues } from '../../Context/AuthContext';

function AdminAuthentication({ children }) {
    const navigate = useNavigate();
    const { clientData } = MyLoginValues();
    useEffect(() => {
        if (!clientData || !clientData.isAdmin) {
            navigate("/");
        }
    }, [clientData]);
    return (
        <>{children}</>
    )
}

export default AdminAuthentication