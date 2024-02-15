import React, { useState } from 'react';

function Ratinge() {
  // State to hold the current rating
  const [rating, setRating] = useState(0);

  // Function to handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <p>Please rate:</p>
      {[1, 2, 3, 4, 5].map((value) => (
        <span className='w-[24px]'
          key={value}
          onClick={() => handleRatingChange(value)}
          style={{ cursor: 'pointer', color: value <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
      <p>Selected rating: {rating}</p>
    </div>
  );
}

export default Ratinge;