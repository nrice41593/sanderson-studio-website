import React from "react";
import {Link} from "react-router-dom";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'ContactUs',
        path: '/contactus'
    },
    {
        title: 'Store',
        path: '/store'
    },
    {
        title: 'Login',
        path: '/login'
    },
]

export default function Navigation ()  {
    return (
        <nav className="site-nav">
            <span className="menu-title">Ecommerce Store</span>
            <div className="menu-content-contain">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}