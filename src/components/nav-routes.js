import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../pages/home"
import ContactUs from "../pages/contact-us"
import Login from "../pages/login"
import Store from "../pages/store"
import Navigation from "../components/navigation";
import Cart from '../pages/cart';

export default function NavRoutes () {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/store" component={Store} />
                    <Route path="/login" component={Login} />
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/cart" component={Cart} />
                    <Route component={() => 404} />
                </Routes>
            </div>
        </Router>
    )
}