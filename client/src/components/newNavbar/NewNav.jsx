import React from 'react';
import "./NewNav.css";
import { Button } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

function NewNav() {
    const Navigate = useNavigate();
    const handleClick = async (category) => {
        Navigate(`productCategory/${category}`, { replace: false });
      };
    
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p>All</p>
                    <Button onClick={()=>handleClick("mobile")}><p>Mobile</p></Button>
                    <p>Bestseller</p>
                    <p>Fashion</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Amazon Pay</p>
                </div>
                <div className="right_data">
                    <img src="../../../../../../nav.jpg" alt="failed to load" />
                </div>
            </div>
        </div>
    )
}

export default NewNav