import React, { useState } from "react";
import stars from "../assets/Stars.png";
const Rating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
        type="button"
          key={star}
          onClick={() => handleRatingClick(star)}
          className={`w-8 h-8 mx-1 focus:outline-none`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill={star <= rating ? "yellow" : "white"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.73 2.51001L14.49 6.03001C14.73 6.52002 15.37 6.99001 15.91 7.08001L19.1 7.61001C21.14 7.95001 21.62 9.43001 20.15 10.89L17.67 13.37C17.25 13.79 17.02 14.6 17.15 15.18L17.86 18.25C18.42 20.68 17.13 21.62 14.98 20.35L11.99 18.58C11.45 18.26 10.56 18.26 10.01 18.58L7.02003 20.35C4.88003 21.62 3.58003 20.67 4.14003 18.25L4.85003 15.18C4.98003 14.6 4.75003 13.79 4.33003 13.37L1.85003 10.89C0.390031 9.43001 0.860031 7.95001 2.90003 7.61001L6.09003 7.08001C6.62003 6.99001 7.26003 6.52002 7.50003 6.03001L9.26003 2.51001C10.22 0.600015 11.78 0.600015 12.73 2.51001Z"
              stroke="#00B709"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default Rating;
