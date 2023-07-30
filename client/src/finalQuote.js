import React from "react";
import { Link } from "react-router-dom"

export const QuoteReview = () => {
  // grabs all values from the user input from the local storage
  // to create the end quote review.
  let pickUpAddress = JSON.parse(localStorage.getItem("pickUpAddress"));
  let dropOffAddress = JSON.parse(localStorage.getItem("dropOffAddress"));
  let bedroomsTotal = +localStorage.getItem("bedroomsTotal");
  let pickupTotal = +localStorage.getItem("pickupTotal");
  let dropOffTotal = +localStorage.getItem("dropOffTotal");
  let truckAccessToal = +localStorage.getItem("accessTotal");
  let furnishedTotal = +localStorage.getItem("furnishedTotal");
  let movingDate = (localStorage.getItem("movingDate"));
  let settlementDate = localStorage.getItem("settlementDate");
  let settlementTime = localStorage.getItem("settlementTime")

  
  // Page displays 2 hour window for job length and job cost
  // higherHours is the estimated total hours of the job grabbed from the user input 
  let higherHours = (pickupTotal + dropOffTotal + truckAccessToal + furnishedTotal + bedroomsTotal);
  // lowerHours is the higherHours value -2, to provide a job length window
  let lowerHours = (higherHours) -2;
  // the same applies for higherTotal and lowerTotal
  let higherTotal = (pickupTotal + dropOffTotal + truckAccessToal + furnishedTotal + bedroomsTotal) * 195;
  // grabs the lowerHours and multiplies by 195.
  let lowerTotal = (lowerHours) * 195;
  return (
    <div>
      <ul>
        <li>Pick Up Address: {pickUpAddress}</li>
        <li>Drop Off Address:{dropOffAddress}</li>
        <li>Number of Bedrroms: {bedroomsTotal}</li>
        <li>Preferred moving date: {movingDate}</li>
        <li>Settlement Date: {settlementDate}</li>
        <li>Settlement Time: {settlementTime}</li>
        <li>The job will take between: {lowerHours} - {higherHours}</li>
        <li>The estimated cost is between: ${lowerTotal} - ${higherTotal} </li>
      </ul>
      <div>
        <button><Link to="/landing/questionFive">Back</Link></button>
        <button><Link to="/landing">Back to start</Link></button>
        <button><Link to="/landing/questionFive">Back</Link></button>
      </div>
      q3 total + q1 total + q2 total = $ estimated time = total
    </div>
  );
};
