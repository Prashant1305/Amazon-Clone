import React from "react";

const AdminNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/admin/addproduct"
              >
                AddProduct
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DeleteProduct
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;