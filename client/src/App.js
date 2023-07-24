import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing/landingPage"


export default function App() {
    return(

        // <Router basename="RemovalsQuoting">
        <Router>
            <Routes>
            <Route
            path="/"
            element={
            <LandingPage />}
            />
            </Routes>
        </Router>
    )
}