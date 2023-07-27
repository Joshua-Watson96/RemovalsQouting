import React from "react"
import { Headermain } from "../../heading/heading"
import { TimePicker } from "./timePicker"
import { Link } from "react-router-dom"

export const MoveDate = () => {

    return(
        <div>
            <Headermain />
            <h2> Please select the date you are hoping to move.</h2>
            <input className="movingDate" type="date"
            required />
            <h2> Please provide settlement date.</h2>
            <h3>(If settlement date is the same as moving date. Leave this blank)</h3>
            <input className="settlementDate" type="date"/>
            <h3 className="settlementTime">Please provide settlement time.</h3>
            <TimePicker />
        <button className="nextQ">
            <Link to="/quoteSubmit">Review Quote</Link> </button>
        </div>
    )
}
