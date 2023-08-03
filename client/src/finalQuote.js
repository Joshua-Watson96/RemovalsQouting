import React from "react";
import { Link } from "react-router-dom"
import "./finalQuote.css"

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
  let settlementTime = localStorage.getItem("selectedTime")

  
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
    <body className="finalQuoteBody">
      <div>
        <h1>
          Here is a review and estimate of your quote.
        </h1>
      </div>
      <ul>
      <li>Number of Bedrooms: <strong>{bedroomsTotal}</strong></li>
        <li>Pick Up Address: <strong>{pickUpAddress}</strong></li>
        <li>Drop Off Address:<strong>{dropOffAddress}</strong></li>
        <li>Preferred moving date: <strong>{movingDate}</strong></li>
        <li>Settlement Date: <strong>{settlementDate}</strong></li>
        <li>Settlement Time: <strong>{settlementTime}</strong></li>
        <li>The job will take between: <strong>{lowerHours}</strong> - <strong>{higherHours}</strong> hours.</li>
        <li>The estimated cost is between: <strong>${lowerTotal}</strong> - <strong>${higherTotal}</strong> </li>
      </ul>
      <div>
        <button type="submit"><Link to="/landing/questionFive">Back</Link></button>
        <button type="submit"><Link to="/landing">Do another quote</Link></button>
        <p>If you would like to send this quote through, <br/> please click 'Send', and someone will be in touch with <br/> you ASAP. Thank you.</p>
        <button className="send" type="submit">Send</button>
      </div>
  </body>
  );
};
