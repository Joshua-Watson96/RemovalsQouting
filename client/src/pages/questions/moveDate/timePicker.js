import React, { useState, useEffect } from 'react';

export const TimePicker = () => {
  // State to store the selected time
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    // Save selectedTime to localStorage when it changes
    localStorage.setItem('selectedTime', selectedTime);
  }, [selectedTime]); 

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


