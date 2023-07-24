import React from "react";
import { Link } from "react-router-dom"

const landingPage = () => {
    return(
        <header className="header">
            <h1 className="headingTitle"> Welcome to my Quoting app.</h1>
            <div>
                <button className="startBtn"> Free Quote
                <Link to="/questions"></Link></button> 
                </div>

        </header>
        
    )
}

export default landingPage