import React from "react";
import "./Question2.css";

const Question2 = ({ onNext }) => {
  return (
    <div className="question">
      <h2>Q2. Which month would you like to travel?</h2>
      <div className="options">
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month, index) => (
          <div className="card" key={index} onClick={() => onNext("Q2", month)}>
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question2;
