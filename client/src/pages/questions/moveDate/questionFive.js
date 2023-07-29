import React, { useState, useEffect } from "react";
import { Headermain } from "../../heading/heading";
import { TimePicker } from "./timePicker";
import { Link } from "react-router-dom";

export const MoveDate = () => {
  const [movingDate, setMovingDate] = useState("");
  const [settlementDate, setSettlementDate] = useState("");
  const [settlementTime, setSettlementTime] = useState("");

  
  useEffect(() => {
    localStorage.setItem("movingDate", movingDate);
    localStorage.setItem("settlementDate", settlementDate);
    localStorage.setItem("settlementTime", settlementTime);
  }, [movingDate, settlementDate, settlementTime]);

  return (
    <div>
      <Headermain />
      <h2>Please select the date you are hoping to move.</h2>
      <input
        className="movingDate"
        type="date"
        value={movingDate}
        onChange={(e) => setMovingDate(e.target.value)}
        required
      />

      <h2>Please provide settlement date.</h2>
      <h3>(If settlement date is the same as moving date. Leave this blank)</h3>
      <input
        className="settlementDate"
        type="date"
        value={settlementDate}
        onChange={(e) => setSettlementDate(e.target.value)}
      />

      <h3 className="settlementTime">Please provide settlement time.</h3>
      <TimePicker
        value={settlementTime}
        onChange={(time) => setSettlementTime(time)}
      />

      <button className="nextQ">
        <Link to="/quoteSubmit">Review Quote</Link>{" "}
      </button>
    </div>
  );
};
