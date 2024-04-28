import React, { useRef } from "react";
import { NavLink, Link } from 'react-router-dom';
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const myElementRef = useRef(null);

  return (
    <nav className="admin_navbar">
      <Link to="#" className="toggle-button" onClick={() => {
        const myElement = myElementRef.current;
        myElement.classList.toggle('active')
      }}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      <div className="admin_navbar-links" ref={myElementRef}>
        <ul>
          <li><NavLink to="../admin">Home</NavLink></li>
          <li><NavLink to="../admin/clients">Clients</NavLink></li>
          <li><NavLink to="../admin/addproduct">Products</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
