import React, { useState } from "react";
import { AddressForm } from './questionTwo'

export const bedroomQuestion = () => {
    const [selectedAnswer, setSelectedAnswer ] = useState(null);
    const [showAddressFrorm, setShowAddressForm] = useState(false);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    };

    const renderAnswerButtons = () => {
        const answers = ['1', '2', '3', '4', '5+'];
        return answers.map((answer) => (
            <button
            key={answer}
            onClick={() => handleAnswerSelection(answer)}
            className={selectedAnswer === answer ? 'selected' : ''}>
                {answer}
            </button>
        ));
    };

    return(
        <div>
            <h3>How many bedrooms is your house?</h3>
            <div className="answerBtn">{renderAnswerButtons()}</div>
            {selectedAnswer && <p> You Selected: {selectedAnswer}</p>}
            </div>
            
    )
        

};


