import React from "react";
import { Router } from "react-router-dom";
import LandingPage from "../pages/landing/landingPage"


export default function App() {
    return(
        
        <Router basename="removalsQuoting">
            <LandingPage />
        </Router>
    )
}
