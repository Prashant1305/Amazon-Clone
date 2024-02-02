import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "./header/Navbar";
import Footer from './footer/Footer';

function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

        </>
    )
}

export default RootLayout;