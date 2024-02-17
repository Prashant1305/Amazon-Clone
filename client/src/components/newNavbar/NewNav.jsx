import React from 'react';
import "./NewNav.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyProduct } from '../../Context/ProductItemContext';
import { getProductsByCategory } from '../../utils/ApiUtils';

function NewNav() {
    const Navigate = useNavigate();
    const { setDetailsData } = MyProduct();
    const handleClick = async (category) => {
        setDetailsData();
        getProductsByCategory(category)
            .then((res) => {
                // console.log(res.data.msg);
                setDetailsData(res.data.msg);
                Navigate('productpage')
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <Button onClick={(e) => {
                        handleClick(e.target.textContent);
                        // console.dir(e.target.textContent);
                    }}><p>All</p></Button>
                    <Button onClick={(e) => {
                        handleClick(e.target.textContent);
                        // console.dir(e.target.textContent);
                    }}><p>Mobile</p></Button>
                    <Button onClick={(e) => {
                        handleClick(e.target.textContent);
                        // console.dir(e.target.textContent);
                    }}><p>Bestseller</p></Button>
                    <Button onClick={(e) => {
                        handleClick(e.target.textContent);
                        // console.dir(e.target.textContent);
                    }}><p>Fashion</p></Button>
                    <Button onClick={(e) => {
                        handleClick(e.target.textContent);
                        // console.dir(e.target.textContent);
                    }}><p>Electronics</p></Button>
                    <Button onClick={(e) => {
                        handleClick(e.target.textContent);
                        // console.dir(e.target.textContent);
                    }}><p>Prime</p></Button>
                    <Button onClick={(e) => {
                        handleClick(e.target.textContent);
                        // console.dir(e.target.textContent);
                    }}><p>Amazon Pay</p></Button>
                </div>
                <div className="right_data">
                    <img src="../../../../../../nav.jpg" alt="failed to load" />
                </div>
            </div>
        </div>
    )
}

export default NewNav