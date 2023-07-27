import React from "react"



const QouteReview = () => {
    let pickUpAddress = JSON.parse(localStorage.getItem("pickupAddress"))
    let dropOffAddress = JSON.parse(localStorage.getItem("dropOffAddress"))
    let numberOfRooms = localStorage.getItem("numberOfRooms")
    return(
        <div>
            <ul>
            <li>Pick Up Address: {pickUpAddress}</li>
            <li>Drop Off Address:{dropOffAddress}</li>
            <li>{numberOfRooms}</li>
            </ul>
            q3 total + q1 total + q2 total = $  estimated time = total 
        </div>
    )
}