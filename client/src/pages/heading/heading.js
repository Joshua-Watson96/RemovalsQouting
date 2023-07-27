import React from "react"
import { Link } from "react-router-dom"
import "./heading.css"

export const Headermain = () => {
    return(
        <header>
            <div className="fixed-Header">
                <h1 className="companyName"> Company Name Here </h1>
                <button className="logOut"> <Link to="/"> Log Out </Link>
                </button>
                

            </div>
        </header>
    )

}
