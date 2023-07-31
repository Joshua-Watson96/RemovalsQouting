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
        <div>
            <Headermain />
            <h1 className="title"> How furnished is your house?</h1>
            <h2 className="subTitle">Please select one of the following options.</h2>
            <div className="container">
                <div className="fewItems">
                <button 
                className={`fewItemsBtn ${selectedAnswer === "fewItems" ? "selected" : ""}`}
                onClick={() => handleAnswerSelection("fewItems")}>
                Only a few items to be moved.</button>
                <p className="fewItemsP">Are we just moving a few items?</p>
                    
                </div>

                <div className="bigStuff">
                <button className={`bigStuffBtn ${selectedAnswer} === "bigStuff" ? "selected" : ""}`}
                onClick={() => handleAnswerSelection("bigStuff")}>Just the big furniture.</button>
                <p className="bigStuffP">Are we just moving the big Stuff? <br/> for example:</p>
                <ul>
                    <li>Dining table</li>
                    <li>Beds </li>
                    <li>Couch</li>
                    <li>White goods</li>
                    <li>TV</li>
                    <li>+ Other big furniture</li>
                </ul>
                </div>
                <div className="entireHouse">
                    <button className={`entireHouseBtn ${selectedAnswer === "entireHouse" ? "selected" : ""}`}
                    onClick={() => handleAnswerSelection("The entire house.")}>Entire house contents.</button>
                    <p className="entireHouseP">Are we moving everything? <br/> for example:</p>
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
            <button className="nextQ">
                <Link to="/landing/questionFive">Next question</Link>
            </button>
        </div>
    )
}