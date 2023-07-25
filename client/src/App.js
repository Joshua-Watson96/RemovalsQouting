import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { LandingPage } from "./pages/landing/landingPage"
import  { Login } from "./pages/login/login"
import { Signup } from "./pages/login/signup"


export default function App() {
    return(

        // <Router basename="RemovalsQuoting">
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
            </Routes>
        </Router>
    )
}