import React from 'react'
import "./ProductItems.css"
import Item from "../components/Product/Item"
import { MyProduct } from '../Context/ProductItemContext';
function ProductItems() {
    const { detailsData } = MyProduct();

    if (!detailsData) {
        return (
            <div id='product_section'><h1>Loading products</h1></div>
        )
    }
    else if (detailsData.length === 0) {
        return (
            <div id='product_section'><h1>No result found</h1></div>
        )
    }
    return (
        <div id='product_section'>{detailsData.length > 0 && detailsData.map((item) => {
            return (<Item key={item._id} details={item} />)
        })}</div>
    )
}

export default ProductItems