import React, { useState } from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { MyLoginValues } from '../../Context/AuthContext';
import { CartValue } from '../../Context/CartContext';
import { getSearchResult } from '../../utils/ApiUtils';

function Navbar() {
    const { isLogin } = MyLoginValues();
    const { cartNumber } = CartValue()
    const [searchInput, setSearchInput] = useState("");
    const fetchSearchResult = async (e) => {
        try {
            const res = await getSearchResult({ "input": searchInput });
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    const handlechange = (e) => {
        setSearchInput(e.target.value);
    }
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <NavLink to='/'><img src="../amazon_PNG25.png" alt="failed to load" /></NavLink>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type="text" name="searchInput" id="searchInput" onChange={(e) => {
                            handlechange(e)
                        }} value={searchInput} />
                        <div className='search_icon'>
                            <SearchIcon id="search" onClick={(e) => {
                                fetchSearchResult(e);
                            }} />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className="nav_btn">
                        {!isLogin && <NavLink to="/signin">Sign in</NavLink>}{isLogin && <NavLink to="/signout">Sign out</NavLink>}
                    </div>
                    <div className="nav_btn">
                        {/* <a href='/'></a> */}
                    </div>
                    <NavLink to='./cart'>
                        <div className="cart_btn">
                            <Badge badgeContent={cartNumber} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </div>
                    </NavLink>
                    <NavLink to="/"><div className='avatar'><Avatar /></div></NavLink>

                </div>
            </nav>
        </header>
    )
}

export default Navbar