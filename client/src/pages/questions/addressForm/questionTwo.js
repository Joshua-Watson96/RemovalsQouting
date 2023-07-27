import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Headermain } from '../../heading/heading';

export const AddressForm = () => {
  const [pickupAddresses, setPickupAddresses] = useState(['']);
  const [dropOffAddresses, setDropOffAddresses] = useState(['']);

  const handlePickUpChange = (event, index) => {
    const updatedAddresses = [...pickupAddresses];
    updatedAddresses[index] = event.target.value;
    setPickupAddresses(updatedAddresses);
  };

  const handleDropOffChange = (event, index) => {
    const updatedAddresses = [...dropOffAddresses];
    updatedAddresses[index] = event.target.value;
    setDropOffAddresses(updatedAddresses);
  };

  const addPickUpAddress = () => {
    setPickupAddresses([...pickupAddresses, '']);
  };

  const addDropOffAddress = () => {
    setDropOffAddresses([...dropOffAddresses, '']);
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
    
    <form onSubmit={handleSubmit}>
      <Headermain />
      {pickupAddresses.map((address, index) => (
        <div key={index}>
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
      <button type='button' onClick={addPickUpAddress}>
        Add Pick Up Address
      </button>

      {dropOffAddresses.map((address, index) => (
        <div key={index}>
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
            <button type='button' onClick={() => removeDropOffAddress(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type='button' onClick={addDropOffAddress}>
        Add Drop Off Address
      </button>

      <button type='submit'>
        <Link to='/landing/questionThree'>Next Question</Link>
      </button>
    </form>
  );
};
