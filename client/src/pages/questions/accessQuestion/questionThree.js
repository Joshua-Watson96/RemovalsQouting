import React, { useState } from 'react';
import { Headermain } from '../../heading/heading';
import { Link } from "react-router-dom"
import "./questionThree.css"

// const [quoteTotal, setqouteTotal] = useState(0);



export const DoubleStoreyQuestion = ({ onNextQuestion }) => {
  const [pickUpStorey, setPickUpStorey] = useState('');
  const [dropOffStorey, setDropOffStorey] = useState('');
  const [canTruckParkInDriveway, setCanTruckParkInDriveway] = useState(''); 
  let pickupTotal = 0
  let dropoffTotal = 0
  let accessTotal = 0

  const handlePickUpStoreyChange = (value) => {
    setPickUpStorey(value);
  };

  const handleDropOffStoreyChange = (value) => {
    setDropOffStorey(value);
  };

  const handleCanTruckParkChange = (value) => {
    setCanTruckParkInDriveway(value);
  };

  
  const getSelectedAnswer = (question, value) => {
    switch (question) {
      case 'pickUpStorey':
      switch (value) {
          case 'single':
            pickupTotal=(pickupTotal + .5) 
            localStorage.setItem("pickupTotal", pickupTotal)  
            
            return 'Single';
          case 'double':
            pickupTotal=(pickupTotal + 1) 
            localStorage.setItem("pickupTotal", pickupTotal) 
            
            return 'Double';
          case 'other':
            return 'Other';
          case 'apartment_stairs':
            pickupTotal=(pickupTotal + 1.5 ) 
            localStorage.setItem("pickupTotal", pickupTotal) 
            return 'Apartment building with stairs';
          case 'apartment_lift':
            pickupTotal=(pickupTotal + 1) 
            localStorage.setItem("pickupTotal", pickupTotal) 
            return 'Apartment building with a lift';
          case '3_or_more_levels':
            pickupTotal=(pickupTotal+ 1.5 ) 
            localStorage.setItem("pickupTotal", pickupTotal) 
            return '3 or more levels';
          default:
            return '';
        }
        
          
          case 'dropOffStorey':
            switch (value) {
              case 'single':
                dropoffTotal=(dropoffTotal + .5)
                localStorage.setItem("dropOffTotal", dropoffTotal)  
                console.log(accessTotal);
                return 'Single';
              case 'double':
                dropoffTotal=(dropoffTotal + 1)
                localStorage.setItem("dropOffTotal", dropoffTotal)  
                
                return 'Double';
              case 'other':
                return 'Other';
              case 'apartment_stairs':
                dropoffTotal=(dropoffTotal+ 1.5 ) 
                localStorage.setItem("dropOffTotal", dropoffTotal) 
                return 'Apartment building with stairs';
              case 'apartment_lift':
                dropoffTotal=(dropoffTotal + 1) 
                localStorage.setItem("dropOffTotal", dropoffTotal) 
                return 'Apartment building with a lift';
              case '3_or_more_levels':
                dropoffTotal=(dropoffTotal+ 1.5 ) 
                localStorage.setItem("dropOffTotal", dropoffTotal) 
                return '3 or more levels';
              default:
                return '';
            }

      case 'canTruckParkInDriveway':
        switch (value) {
          case 'yes':
            accessTotal=(accessTotal + 0) 
            localStorage.setItem("accessTotal", accessTotal)
            return 'Yes';
          case 'no':
            return 'No';
          case 'truck_on_street':
            accessTotal=(accessTotal + .5 ) 
            localStorage.setItem("accessTotal", accessTotal)
            return 'Truck can park on the street.';
            
          case 'truck_15_30m_away':
            accessTotal=(accessTotal + 1 ) 
            localStorage.setItem("accessTotal", accessTotal)
            return 'Will the truck need to park 15-30m away from the property?';
          case 'truck_30m_away':
            accessTotal=(accessTotal + 1.5 ) 
            localStorage.setItem("accessTotal", accessTotal)
            console.log(accessTotal);
            return 'Will the truck need to park more than 30m away from the front door?';
          default:
            return '';
        }
      default:
        return '';
    }
    
  };

  return (
    <body className='questionThreeBody'>
    <div>
      <div className='header'>
      <Headermain />
      </div>
      <h1>What is the access like at each property?</h1>
      <h2>(Is your property single/double storey, or an aparment building?)</h2>
      <h3>Pick Up Access:</h3>
      <div>
        <button type='submit' onClick={() => handlePickUpStoreyChange('single')}>Single storey</button>
        <button type='submit' onClick={() => handlePickUpStoreyChange('double')}>Double storey</button>
        <button type='submit' onClick={() => handlePickUpStoreyChange('other')}>Other</button>
        <br/>
        <span className='selectedPickUp'> You selected: {getSelectedAnswer('pickUpStorey', pickUpStorey)}</span>
      </div>

      {pickUpStorey === 'other' && (
        <div>
          <h4>If Other, select from the following options:</h4>
          <button type='submit' onClick={() => handlePickUpStoreyChange('apartment_stairs')}>Apartment building with stairs</button>
          <button type='submit' onClick={() => handlePickUpStoreyChange('apartment_lift')}>Apartment building with a lift</button>
          <button type='submit' onClick={() => handlePickUpStoreyChange('3_or_more_levels')}>3 or more levels</button>
          <br/>
          <span className='selectedOther'>You selected: {getSelectedAnswer('pickUpStorey', pickUpStorey)}</span>
        </div>
      )}

      <h3>Drop Off Access:</h3>
      <div>
        <button type='submit' onClick={() => handleDropOffStoreyChange('single')}>Single storey</button>
        <button type='submit' onClick={() => handleDropOffStoreyChange('double')}>Double storey</button>
        <button type='submit' onClick={() => handleDropOffStoreyChange('other')}>Other </button>
        <br/>
        <span className='selectedDropOff'> You selected: {getSelectedAnswer('dropOffStorey', dropOffStorey)}</span>
      </div>

      {dropOffStorey === 'other' && (
        <div>
          <h4>If Other, select from the following options:</h4>
          <button type='submit' onClick={() => handleDropOffStoreyChange('apartment_stairs')}>Apartment building with stairs</button>
          <button type='submit'onClick={() => handleDropOffStoreyChange('apartment_lift')}>Apartment building with a lift</button>
          <button type='submit' onClick={() => handleDropOffStoreyChange('3_or_more_levels')}>3 or more levels</button>
          <br/>
          <span> You selected: {getSelectedAnswer('dropOffStorey', dropOffStorey)}</span>
        </div>
      )}

      <h3>Can the truck park in the driveway?</h3>
      <h4>(Are there any low-hanging tree branches, powerlines etc)</h4>
      <div>
        <label>
          Yes
          <input
            type="radio"
            value="yes"
            checked={canTruckParkInDriveway === 'yes'}
            onChange={() => handleCanTruckParkChange('yes')}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            value="no"
            checked={canTruckParkInDriveway === 'no'}
            onChange={() => handleCanTruckParkChange('no')}
          />
        </label>
        <br/>
        <span>You selected: {getSelectedAnswer('canTruckParkInDriveway', canTruckParkInDriveway)}</span>
      </div>

      {canTruckParkInDriveway === 'no' && (
        <div>
          <h4>If no, please select one of the following options:</h4>
          <button type='submit' onClick={() => handleCanTruckParkChange('truck_on_street')}>The truck can park on the street.</button> <br/>
          <button type='submit' onClick={() => handleCanTruckParkChange('truck_15_30m_away')}>Will the truck need to park 15-30m away from the property?</button> <br/>
          <button type='submit' onClick={() => handleCanTruckParkChange('truck_30m_away')}>Will the truck need to park more than 30m away from the front door?</button>
        </div>
      )}
      <div>
      <Link to="/landing/questionTwo"><button type='submit'> Back</button></Link>
      <Link to="/landing/questionFour"><button type='submit'>  Next Question </button></Link>
      </div>
    </div>
    </body>
  );
};
