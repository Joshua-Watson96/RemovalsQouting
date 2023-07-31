import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Headermain } from "../../heading/heading";
import "./questionOne.css";

export const BedroomQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);

    let bedroomsTotal = 0;
    switch (answer) {
      case "1":
        bedroomsTotal = bedroomsTotal + 1;
        break;
      case "2":
        bedroomsTotal = bedroomsTotal + 1.5;
        break;
      case "3":
        bedroomsTotal = bedroomsTotal + 2;
        break;
      case "4":
        bedroomsTotal = bedroomsTotal + 2.5;
        break;
      case "5+":
        bedroomsTotal = bedroomsTotal + 3;
        break;
      default:
        bedroomsTotal = null;
    }
    localStorage.setItem("bedroomsTotal", answer);
  };

  const renderAnswerButtons = () => {
    const answers = ["1", "2", "3", "4", "5+"];
    return answers.map((answer) => (
      <button type="submit"
        key={answer}
        onClick={() => handleAnswerSelection(answer)}
        className={selectedAnswer === answer ? "selected" : ""}
      >
        {answer}
      </button>
    ));
  };

  return (
    <body className="questionOneBody">
      <div>
        <div className="header">
          <Headermain />
        </div>
          <h1>How many bedrooms does your house have?</h1>
        <div className="answerBtn">{renderAnswerButtons()}</div>
        {selectedAnswer && <p> You Selected: {selectedAnswer}</p>}
        <Link to="/landing"><button type="submit">Back</button></Link>
        <Link to="/landing/questionTwo"><button type="submit" className="nextQBtn">
          Next question
        </button></Link>
      </div>
    </body>
  );
};
