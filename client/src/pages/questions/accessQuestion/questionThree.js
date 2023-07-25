import React, { useState } from 'react';

export const DoubleStoreyQuestion = ({ onNextQuestion }) => {
  const [pickUpStorey, setPickUpStorey] = useState('');
  const [dropOffStorey, setDropOffStorey] = useState('');
  const [canTruckParkInDriveway, setCanTruckParkInDriveway] = useState(''); // Values: 'yes', 'no'

  const handlePickUpStoreyChange = (value) => {
    setPickUpStorey(value);
  };

  const handleDropOffStoreyChange = (value) => {
    setDropOffStorey(value);
  };

  const handleCanTruckParkChange = (value) => {
    setCanTruckParkInDriveway(value);
  };

  return (
    <div>
      <h3>Pick Up Address:</h3>
      <div>
        <button onClick={() => handlePickUpStoreyChange('single')}>Single</button>
        <button onClick={() => handlePickUpStoreyChange('double')}>Double</button>
        <button onClick={() => handlePickUpStoreyChange('other')}>Other</button>
      </div>

      {pickUpStorey === 'other' && (
        <div>
          <h4>If Other, select from the following options:</h4>
          <button onClick={() => handlePickUpStoreyChange('apartment_stairs')}>Apartment building with stairs</button>
          <button onClick={() => handlePickUpStoreyChange('apartment_lift')}>Apartment building with a lift</button>
          <button onClick={() => handlePickUpStoreyChange('3_or_more_levels')}>3 or more levels</button>
        </div>
      )}

      <h3>Drop Off Address:</h3>
      <div>
        <button onClick={() => handleDropOffStoreyChange('single')}>Single</button>
        <button onClick={() => handleDropOffStoreyChange('double')}>Double</button>
        <button onClick={() => handleDropOffStoreyChange('other')}>Other</button>
      </div>

      {dropOffStorey === 'other' && (
        <div>
          <h4>If Other, select from the following options:</h4>
          <button onClick={() => handleDropOffStoreyChange('apartment_stairs')}>Apartment building with stairs</button>
          <button onClick={() => handleDropOffStoreyChange('apartment_lift')}>Apartment building with a lift</button>
          <button onClick={() => handleDropOffStoreyChange('3_or_more_levels')}>3 or more levels</button>
        </div>
      )}

      <h3>Can the truck park in the driveway? (There are no low hanging trees or wires)</h3>
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
      </div>

      {canTruckParkInDriveway === 'no' && (
        <div>
          <h4>If No, select from the following options:</h4>
          <button onClick={() => handleCanTruckParkChange('truck_on_street')}>Can the truck park on the street?</button>
          <button onClick={() => handleCanTruckParkChange('truck_15_30m_away')}>Will the truck need to park 15-30m away from the property?</button>
          <button onClick={() => handleCanTruckParkChange('truck_30m_away')}>Will the truck need to park more than 30m away from the front door?</button>
        </div>
      )}
    </div>
  );
};
