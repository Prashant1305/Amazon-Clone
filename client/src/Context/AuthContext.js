import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllClientData } from "../utils/ApiUtils";

const clientContext = createContext();

function AuthContext({ children }) {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [clientData, setClientData] = useState();
  const [token, setToken] = useState();

  const fetchClientData = () => {
    if (isLogin) {
      // localStorage.setItem("token", JSON.stringify(res.data.token));
      const temp = JSON.parse(localStorage.getItem("token"));
      // console.log(temp)
      setToken(temp);
      getAllClientData(temp)
        .then((res) => {
          console.log(res.data.msg);
          setClientData(res.data.msg);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setToken();
      setClientData();
      localStorage.removeItem("token");
    }
    // console.log("clientData fetched");
  };
  useEffect(() => {
    fetchClientData();
  }, [isLogin]);

  return (
    <clientContext.Provider value={{ isLogin, setIsLogin, clientData, token }}>
      {children}
    </clientContext.Provider>
  );
}
export function MyLoginValues() {
  return useContext(clientContext);
}
export default AuthContext;
