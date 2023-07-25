import React, { useState } from 'react';


export const AddressForm = () => {
    const [pickupAddress, setPickupAddress] = useState('');
    const [dropOffAddress, setDropOffAddress] = useState('');
    
    const handlePickUpChange = (event) => {
        setPickupAddress(event.target.value);
    };

    const handleDropOffChange = (event) => {
        setDropOffAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefualt();
        setPickupAddress('');
        setDropOffAddress('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className='addQuestion'>Pick up Address: </label>
                <input
                    type='text'
                    id='pickup'
                    value={pickupAddress}
                    onChange={handlePickUpChange}
                    required
                    />
            </div>
            <div>
                <label className='addQuestion'>Drop off Address: </label>
                <input
                    type='text'
                    id='dropoff'
                    value={dropOffAddress}
                    onChange={handleDropOffChange}
                    required
                    />
            </div>
            <button type="submit">Next question</button>
        </form>
    );
};

