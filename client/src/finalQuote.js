import React from "react";

export const QuoteReview = () => {
  let pickUpAddress = JSON.parse(localStorage.getItem("pickUpAddress"));
  let dropOffAddress = JSON.parse(localStorage.getItem("dropOffAddress"));
  let bedroomsTotal = localStorage.getItem("bedroomsTotal");
  let pickupTotal = +localStorage.getItem("pickupTotal");
  let dropOffTotal = +localStorage.getItem("dropOffTotal");
  let truckAccessToal = +localStorage.getItem("accessTotal");
  let furnishedTotal = +localStorage.getItem("furnishedTotal");
  let movingDate = (localStorage.getItem("movingDate"));
  let settlementDate = localStorage.getItem("settlementDate");
  let settlementTime = localStorage.getItem("settlementTime")

  

  let totalHours = (pickupTotal + dropOffTotal + truckAccessToal + furnishedTotal)
  let total = (pickupTotal + dropOffTotal + truckAccessToal + furnishedTotal) * 195;
  return (
    <div>
      <ul>
        <li>Pick Up Address: {pickUpAddress}</li>
        <li>Drop Off Address:{dropOffAddress}</li>
        <li>Number of Bedrroms: {bedroomsTotal}</li>
        <li>Preferred moving date: {movingDate}</li>
        <li>Settlement Date: {settlementDate}</li>
        <li>Settlement Time: {settlementTime}</li>
        <li>Estimated hours: {totalHours}</li>
        <li>Estimated cost: {total} </li>
      </ul>
      q3 total + q1 total + q2 total = $ estimated time = total
    </div>
  );
};
