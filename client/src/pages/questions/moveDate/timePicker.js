import React, { useState } from 'react';

export const TimePicker = () => {
  // State to store the selected time
  const [selectedTime, setSelectedTime] = useState('');


  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  
  const formatTime = (time) => {
    if (!time) return ''; // Handle empty time
    const [hours, minutes] = time.split(':');
    let suffix = 'AM';
    let formattedHours = parseInt(hours, 10);
    if (formattedHours === 0) {
      formattedHours = 12;
    } else if (formattedHours > 12) {
      formattedHours -= 12;
      suffix = 'PM';
    }
    return `${formattedHours}:${minutes} ${suffix}`;
  };

  return (
    <div>
      
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
      />
      
      {selectedTime && <p>You selected: {formatTime(selectedTime)}</p>}
    </div>
  );
};


