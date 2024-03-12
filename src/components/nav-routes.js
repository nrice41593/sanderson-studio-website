import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from "./navigation";

import Home from "../pages/home"
import AboutTheArtist from "../pages/about-the-artist";
import Commission from "../pages/commission";
import InTheStudio from "../pages/in-the-studio";
import Vision from "../pages/vision";
import Footer from "./footer";

export default function NavRoutes () {
    return (
        <Router>
            <div>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/abouttheartist" element={<AboutTheArtist/>} />
                    <Route path="/commission" element={<Commission/>} />
                    <Route path="/inthestudio" element={<InTheStudio/>} />
                    <Route path="/vision" element={<Vision/>} />
                    <Route element={() => 404} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}