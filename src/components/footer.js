import React from "react";

import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'

export default function Footer () {
    return (
        <div className="main-footer-style">
            <div className="footer-icons">
                <img src={facebook} className="icons"/>
                <img src={instagram} className="icons"/>
            </div>
            <div className="copyright">
                © 2024 Sanderson Studio
            </div>
        </div>
    )
}