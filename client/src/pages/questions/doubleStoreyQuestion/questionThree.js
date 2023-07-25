import React, { useState } from 'react';


export const DoubleStoreyQuestion = ({ onNextQuestion }) => {
  const [isDoubleStorey, setIsDoubleStorey] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleButtonClick = (value) => {
    setIsDoubleStorey(value === 'yes');
    setAdditionalDetails('');

   
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
          
        >
          Yes
        </button>
        <button
          onClick={() => handleButtonClick('no')}
          
        >
          No
        </button>
      </div>
      
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

// const HouseRemovalQuote = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(1);

//   const handleNextQuestion = () => {
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   return (
//     <div>
//       {currentQuestion === 1 && <DoubleStoreyQuestion onNextQuestion={handleNextQuestion} />}
//       {}
//     </div>
//   );
// };

