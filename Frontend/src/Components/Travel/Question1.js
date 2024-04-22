import React from "react";
import "./Question1.css";

const Question1 = ({ onNext, responses, setResponses }) => {
  return (
    <div className="question">
      <h2>Q1. How would you like to travel?</h2>
      <div className="options">
        <div className="card" onClick={() => onNext("Q1", "Solo")}>
          <img src="images/solotravel.jpg" alt="Solo Travel" />
          <span>Solo</span>
        </div>
        <div className="card" onClick={() => onNext("Q1", "Friends")}>
          <img src="images/friends.jpg" alt="Travel with Friends" />
          <span>Friends</span>
        </div>
        <div className="card" onClick={() => onNext("Q1", "Family")}>
          <img src="images/family.jpg" alt="Family Travel" />
          <span>Family</span>
        </div>
      </div>
    </div>
  );
};

export default Question1;
