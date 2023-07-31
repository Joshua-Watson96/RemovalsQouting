import React from "react";
import { Link } from "react-router-dom"
import "./landingPage.css"
import { Headermain } from "../heading/heading";

export const LandingPage = () => {
    return(
        
        <header className="header">
            <Headermain />
            
            <body className="landingBody">
            
            <div>
                <h1> DISCLAIMER:</h1>
        <p>
          Please use this quote as a rough estimate/guide only. <br/>
          There are a lot of different variables that could <br/>
          make the job quicker, or slower. If you would like <br/>
          to continue, please click 'Start free quote'.
        </p>
            <Link to='questionOne'><button type="submit" className="startBtn"> Start Free Quote </button></Link>
                <Link to="/"><button type="submit"  className="loginBtn"> Log out here</button></Link>
                
                </div>
        </body>
        </header>
        
        
    )
}

