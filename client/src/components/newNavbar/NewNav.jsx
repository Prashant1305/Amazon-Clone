import React from 'react';
import "./NewNav.css";

function NewNav() {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p>All</p>
                    <p>Mobile</p>
                    <p>BestSeller</p>
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