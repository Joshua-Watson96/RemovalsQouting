import React, { useState, useEffect } from "react";
import { Headermain } from "../../heading/heading";
import { TimePicker } from "./timePicker";
import { Link } from "react-router-dom";
import "./questionFive.css";

export const MoveDate = () => {
  const [movingDate, setMovingDate] = useState("");
  const [settlementDate, setSettlementDate] = useState("");
  const [selectedTime, setSettlementTime] = useState("");

  useEffect(() => {
    localStorage.setItem("movingDate", movingDate);
    localStorage.setItem("settlementDate", settlementDate);
    localStorage.setItem("selectedTime", selectedTime);
  }, [movingDate, settlementDate, selectedTime]);

  return (
    <body class="moveDateBody">
      <div class="container">
        <div class="header">
          <Headermain />
        </div>

        <div class="question">
          <h2>Please select the date you are hoping to move.</h2>
          <input
            className="movingDate"
            type="date"
            value={movingDate}
            onChange={(e) => setMovingDate(e.target.value)}
            required
          />
        </div>

        <div class="question">
          <h2>Please provide settlement date.</h2>
          <p>
            (If settlement date is the same as moving date. Leave this blank)
          </p>
          <input
            className="settlementDate"
            type="date"
            value={settlementDate}
            onChange={(e) => setSettlementDate(e.target.value)}
          />
        </div>

        <div class="question">
          <h2 class="settlementTime">Please provide settlement time.</h2>
          <p>(Please leave blank if you do not know settlement time)</p>
          <TimePicker
            value={selectedTime}
            onChange={(time) => setSettlementTime(time)}
          />
        </div>

        <div class="buttonContainer">
          <Link to="/landing/questionFour">
            <button type="submit" class="backBtn">
              Back
            </button>
          </Link>
          <Link to="/quoteSubmit">
            <button type="submit" class="nextQ">
              Review Quote
            </button>
          </Link>
        </div>
      </div>
    </body>
  );
};
