import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;