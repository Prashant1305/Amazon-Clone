import React from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { MyLoginValues } from '../../Context/AuthContext';

function Navbar() {
    const { isLogin } = MyLoginValues();
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <img src="./amazon_PNG25.png" alt="failed to load" />
                    </div>
                    <div className='nav_searchbaar'>
                        <input type="text" name="" id="" />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
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
                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className='avatar' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar