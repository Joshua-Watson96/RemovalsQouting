import React, {useState} from "react"
import { Link } from "react-router-dom"
import { Headermain } from "../../heading/heading"

import "./questionFour.css"

export const FurnishedQuestion = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
  
    const handleAnswerSelection = (answer) => {
      setSelectedAnswer(answer);
      let furnishedTotal = 0
    
    switch (answer) {
        case 'fewItems':
            furnishedTotal=(furnishedTotal + 0);
            localStorage.setItem("furnishedTotal", furnishedTotal)
            return 'fewItems';
        case "bigStuff":
            furnishedTotal=(furnishedTotal + 1.5)
            localStorage.setItem("furnishedTotal", furnishedTotal)
            return 'bigStuff';
        case 'entireHouse':
            furnishedTotal=(furnishedTotal + 2)
            localStorage.setItem("furnishedTotal", furnishedTotal)
            return 'entireHouse';
    
        default:
            break;
    }
}
    return(
        <body className="furnishedQuestionBody">
        <div>
            <div className="header">
            <Headermain />
            </div>
            <h1 className="title"> How furnished is your house?</h1>
            <h2 className="subTitle">Please select one of the following options.</h2>
            <div className="options">
                <div className="fewItems option">
                <button type='submit' 
                className={`fewItemsBtn ${selectedAnswer === "fewItems" ? "selected" : ""}`}
                onClick={() => handleAnswerSelection("fewItems")}>
                Moving a few items.</button>
                <p className="optionText">Are we just moving a few items? <br/> for example:</p>
                <ul>
                    <li>
                        Is there 10 or less items to be moved.
                    </li>
                </ul>
                    
                </div>

                <div className="bigStuff option">
                <button type='submit' className={`bigStuffBtn ${selectedAnswer} === "bigStuff" ? "selected" : ""}`}
                onClick={() => handleAnswerSelection("bigStuff")}>Just the big furniture.</button>
                <p className="optionText">Are we just moving the big Stuff? <br/> for example:</p>
                <ul>
                    <li>Dining table</li>
                    <li>Beds </li>
                    <li>Couch</li>
                    <li>White goods</li>
                    <li>TV</li>
                    <li>+ Other big furniture</li>
                </ul>
                </div>
                <div className="entireHouse option">
                    <button type='submit' className={`entireHouseBtn ${selectedAnswer === "entireHouse" ? "selected" : ""}`}
                    onClick={() => handleAnswerSelection("entireHouse")}>Entire house contents.</button>
                    <p className="optionText"> Are we moving everything? <br/> for example:</p>
                    <ul>
                    <li>Pre-packed boxes</li>
                    <li>Loose bags/items</li>
                    <li>Dining table</li>
                    <li>Beds </li>
                    <li>Couch</li>
                    <li>White goods</li>
                    <li>TV</li>
                    <li>+ Other big furniture</li>
                </ul>
                </div>

                
            </div>
            <p>You selected: {selectedAnswer} </p>
            <Link to="/landing/questionThree"><button type='submit' className="backBtn">Back</button></Link>
            <Link to="/landing/questionFive"><button type='submit' className="nextQ">
                Next question
            </button> </Link>
        </div>
        </body>
    )
}