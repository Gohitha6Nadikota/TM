import React from "react";
import "./Question3.css";
import { useNavigate } from "react-router-dom";

const Question3 = ({ onSubmit }) => {
  const navigate = useNavigate();
  const handleOptions = (value) => {
    onSubmit("Q3", value);
    navigate("/destination");
  };
  return (
    <div className="question">
      <h2>Q3. Which location interests you?</h2>
      <div className="options">
        <div className="card" onClick={() => handleOptions("Mountain")}>
          <img src="images/mountains.jpeg" alt="Mountain" />
          <span>Mountains</span>
        </div>
        <div className="card" onClick={() => handleOptions("Beach")}>
          <img src="images/beaches.jpeg" alt="Beach" />
          <span>Beaches</span>
        </div>
        <div className="card" onClick={() => handleOptions("Historical")}>
          <img src="images/historical.jpeg" alt="Historical" />
          <span>Historical</span>
        </div>
      </div>
    </div>
  );
};

export default Question3;
