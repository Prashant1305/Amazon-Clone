import React, { createContext, useContext, useState } from 'react'

const clientContext = createContext();
function AuthContext({ children }) {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token") ? true : false);
    const [clientData, setClientData] = useState();


    return (
        <clientContext.Provider value={{ isLogin, setIsLogin }}>{children}</clientContext.Provider>
    )
}
export function MyLoginValues() {
    return useContext(clientContext);
}
export default AuthContext;