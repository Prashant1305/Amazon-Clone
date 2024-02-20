import React, { useRef } from "react";
import { NavLink, useNavigate, Link } from 'react-router-dom';
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const myElementRef = useRef(null);

  return (
    <nav class="admin_navbar">
      <Link to="#" class="toggle-button" onClick={() => {
        const myElement = myElementRef.current;
        myElement.classList.toggle('active')
      }}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </Link>
      <div class="admin_navbar-links" ref={myElementRef}>
        <ul>
          <li><NavLink to="/admin">Home</NavLink></li>
          <li><NavLink to="/clients">Clients</NavLink></li>
          <li><NavLink to="/addproduct">Products</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
