import React from "react";
import { Link } from "react-router-dom"
// import { bedroomQuestion } from "../questions/questionOne";
import { Headermain } from "../heading/heading";

export const LandingPage = () => {
    return(
        
        <header className="header">
            <Headermain />
            <h1 className="headingTitle"> Welcome to my Quoting app.</h1>
            <div>
                <button className="startBtn"> <Link to='questionOne'>Start Free Quote</Link> </button>
                <button className="loginBtn"> <Link to="/">Log out here</Link></button>
                
                </div>

        </header>
        
    )
}

