import React, { useState } from 'react';
import { questionFour } from './questionFour'

const DoubleStoreyQuestion = ({ onNextQuestion }) => {
  const [isDoubleStorey, setIsDoubleStorey] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleButtonClick = (value) => {
    setIsDoubleStorey(value === 'yes');
    setAdditionalDetails('');

    // Move to the next question when "No" is selected
    if (value === 'no') {
      onNextQuestion();
    }
  };

  const handleDetailsChange = (event) => {
    setAdditionalDetails(event.target.value);
  };

  return (
    <div>
      <h3>Are either of your properties double storey?</h3>
      <div>
        <button
          onClick={() => handleButtonClick('yes')}
          style={{ background: isDoubleStorey ? 'green' : 'gray' }}
        >
          Yes
        </button>
        <button
          onClick={() => handleButtonClick('no')}
          style={{ background: !isDoubleStorey ? 'red' : 'gray' }}
        >
          No
        </button>
      </div>
      {/* Conditionally render the "Provide further details" section */}
      {isDoubleStorey && (
        <div>
          <label htmlFor="additionalDetails">Provide further details:</label>
          <input
            type="text"
            id="additionalDetails"
            value={additionalDetails}
            onChange={handleDetailsChange}
          />
        </div>
      )}
    </div>
  );
};

const HouseRemovalQuote = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion === 1 && <DoubleStoreyQuestion onNextQuestion={handleNextQuestion} />}
      {}
    </div>
  );
};

export default HouseRemovalQuote;