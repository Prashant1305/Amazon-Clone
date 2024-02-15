import React, { createContext, useContext, useState } from 'react'


const itemContext = createContext();
function ProductItemContext({ children }) {
    const [detailsData, setDetailsData] = useState();
    return (
        <itemContext.Provider value={{ detailsData, setDetailsData }}>{children}</itemContext.Provider>
    )
}

export function MyProduct() {
    return useContext(itemContext);
}

export default ProductItemContext