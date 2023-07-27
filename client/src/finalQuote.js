import React from "react";

export const QuoteReview = () => {
  let pickUpAddress = JSON.parse(localStorage.getItem("pickUpAddress"));
  let dropOffAddress = JSON.parse(localStorage.getItem("dropOffAddress"));
  let bedroomQuestion = localStorage.getItem("bedroomsTotal");
  let pickupQuestion = +localStorage.getItem("pickupTotal");
  let dropoffQuestion = +localStorage.getItem("dropOffTotal");
  let truckAccessQuestion = +localStorage.getItem("accessTotal");

  console.log(pickupQuestion, dropoffQuestion, truckAccessQuestion);

  let total = (pickupQuestion + dropoffQuestion + truckAccessQuestion) * 195;
  return (
    <div>
      <ul>
        <li>Pick Up Address: {pickUpAddress}</li>
        <li>Drop Off Address:{dropOffAddress}</li>
        <li>Number of Bedrroms: {bedroomQuestion}</li>
        {/* <li>Pick Up Access: {pickupQuestion} </li>
            <li>Drop Off Access: {dropoffQuestion}</li>
            <li>Truck Access: {truckAccessQuestion}</li> */}
        <li>Estimated Total Hours: {total} </li>
      </ul>
      q3 total + q1 total + q2 total = $ estimated time = total
    </div>
  );
};
