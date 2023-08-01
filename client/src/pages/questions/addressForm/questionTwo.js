import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Headermain } from '../../heading/heading';
import "./questionTwo.css"

export const AddressForm = () => {
  const [pickupAddresses, setPickupAddresses] = useState(['']);
  const [dropOffAddresses, setDropOffAddresses] = useState(['']);

  const handlePickUpChange = (event, index) => {
    const updatedAddresses = [...pickupAddresses];
    updatedAddresses[index] = event.target.value;
    setPickupAddresses(updatedAddresses);
    localStorage.setItem("pickUpAddress", JSON.stringify(updatedAddresses))
  };

  const handleDropOffChange = (event, index) => {
    const updatedAddresses = [...dropOffAddresses];
    updatedAddresses[index] = event.target.value;
    setDropOffAddresses(updatedAddresses);
    localStorage.setItem("dropOffAddress", JSON.stringify(updatedAddresses));
  };

  const addPickUpAddress = () => {
    setPickupAddresses([...pickupAddresses, '']);
    
  };

  const addDropOffAddress = () => {
    setDropOffAddresses([...dropOffAddresses, ''])
    
  };

  const removePickUpAddress = (index) => {
    const updatedAddresses = pickupAddresses.filter((_, i) => i !== index);
    setPickupAddresses(updatedAddresses);
  };

  const removeDropOffAddress = (index) => {
    const updatedAddresses = dropOffAddresses.filter((_, i) => i !== index);
    setDropOffAddresses(updatedAddresses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setPickupAddresses(['']);
    setDropOffAddresses(['']); 
  };

  return (
    <body className='questionTwoBody'>
      <div className='header'>
      <Headermain />
      </div>
    <form onSubmit={handleSubmit}>
      <h1>What is your pick up and drop off address(es)?</h1>
      {pickupAddresses.map((address, index) => (
        <div key={index} className='addressContainer'>
          <label className='addQuestion'>
            {index === 0 ? 'Pick up Address:' : 'Additional Pick up Address:'}
          </label>
          <input
            type='text'
            value={address}
            onChange={(event) => handlePickUpChange(event, index)}
            required
            placeholder={`Please enter ${index === 0 ? 'your' : 'an additional'} pick-up address`}
          />
          {index > 0 && (
            <button type='button' onClick={() => removePickUpAddress(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type='submit' onClick={addPickUpAddress}>
        Add Pick Up Address
      </button>

      {dropOffAddresses.map((address, index) => (
        <div key={index} className='addressContainer'>
          <label className='addQuestion'>
            {index === 0 ? 'Drop off Address:' : 'Additional Drop off Address:'}
          </label>
          <input
            type='text'
            value={address}
            onChange={(event) => handleDropOffChange(event, index)}
            required
            placeholder={`Please enter ${index === 0 ? 'your' : 'an additional'} drop-off address`}
          />
          {index > 0 && (
            <button type='submit' onClick={() => removeDropOffAddress(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type='submit' onClick={addDropOffAddress}>
        Add Drop Off Address
      </button>

      <Link to='/landing/questionThree'><button className="nextBtn" type='submit'> Next Question </button> </Link>
      <Link to="/landing/questionOne"> <button className="backBtn" type='submit'>back</button> </Link>
    </form>
    </body>
  );
};
