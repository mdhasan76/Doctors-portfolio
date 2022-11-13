import React from 'react';
import Header from '../pages/shared/Header'
import Footer from '../pages/shared/Footer'
import { Outlet } from "react-router-dom"

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;