import React from "react"
import { Link } from "react-router-dom"
import "./heading.css"

export const Headermain = () => {
    return(
        <header>
            <div className="fixed-Header">
                <h1 className="companyName"> Company Name Here </h1>
                <Link to="/"> <button type="submit"  className="logOut">  Log Out 
                </button></Link>
                

            </div>
        </header>
    )

}
