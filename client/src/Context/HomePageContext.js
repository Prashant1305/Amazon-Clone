import React, { createContext, useContext, useEffect, useState } from 'react'
import { topTendiscountedProducts, topTwentyRatedProducts } from '../utils/ApiUtils';

const homeContext = createContext();
export default function HomePageContext({ children }) {
    const [todaysDealData, setTodaysDealData] = useState([]);
    const [itemInStoreData, setItemInStoreData] = useState([]);
    const fetchTodaysDeal = () => {
        topTendiscountedProducts()
            .then((res) => {
                // console.log(res.data.msg);
                setTodaysDealData(res.data.msg);
            })
            .catch((error) => {
                console.log(error)
            });
    };
    const itemInStore = () => {
        topTwentyRatedProducts()
            .then((res) => {
                // console.log(res.data.msg);
                setItemInStoreData(res.data.msg);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    useEffect(() => {
        fetchTodaysDeal();
        itemInStore();
    }, []);

    return (
        <homeContext.Provider value={{ todaysDealData, itemInStoreData }}>{children}</homeContext.Provider>
    )
}
export function HomepageValue() {
    return useContext(homeContext);
}
