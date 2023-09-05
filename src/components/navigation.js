import React from "react";
import {Link} from "react-router-dom";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Store',
        path: '/store'
    },
    {
        title: 'Cart',
        path: '/cart'
    },
    {
        title: 'ContactUs',
        path: '/contactus'
    }
]



export default function Navigation ()  {
    return (
        <nav className="site-nav">
            <span className="menu-title">Ecommerce Store</span>
            <div className="menu-content-container">
                <ul className="dropdown">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                        ))
                    }
                    <li>
                        <Link to="/account" className="dropbtn">Account</Link>
                        <div class="dropdown-content">
                            <Link to="/login">Login</Link>
                            <Link to="/login">Manage Account</Link>
                            <Link to="/login"></Link>
                            <Link to="/login"></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}