import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminAuthentication from "./AdminAuthentication";

const AdminLayout = () => {
  return (
    <AdminAuthentication>
      <AdminNavbar />
      <Outlet />
    </AdminAuthentication>
  );
};

export default AdminLayout;
