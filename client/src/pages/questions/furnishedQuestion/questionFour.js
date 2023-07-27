import React from "react"
import { Link } from "react-router-dom"
import { Headermain } from "../../heading/heading"

export const FurnishedQuestion = () =>
{
    return(
        <div>
            <Headermain />
            <h1> How furnished is your house?</h1>
            <button className="nextQ">
                <Link to="/landing/questionFive">Next question</Link>
            </button>
        </div>
    )
}