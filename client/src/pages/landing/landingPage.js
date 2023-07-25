import React from "react";
import { Link } from "react-router-dom"

export const LandingPage = () => {
    return(
        <header className="header">
            <h1 className="headingTitle"> Welcome to my Quoting app.</h1>
            <div>
                <button className="startBtn"> Start Free Quote </button>
                <button className="loginBtn"> <Link to="/"></Link> Log out here</button>
                </div>

        </header>
        
    )
}

