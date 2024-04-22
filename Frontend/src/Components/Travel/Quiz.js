import React, { useState } from "react";
import "./Quiz.css";
import { useContext } from "react";
import { TravelContext } from "../../Context/TravelContext";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [responses, setResponses] = useState({});
  const { setTravel } = useContext(TravelContext);
  const handleNext = (question, res) => {
    setCurrentQuestion((prev) => prev + 1);
    let temp = responses;
    temp[question] = res;
    setResponses(temp);
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleSubmit = (question, res) => {
    setResponses({ ...responses, question: res });
    let temp = responses;
    temp[question] = res;
    setResponses(temp);
    setTravel(temp);
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return (
          <Question1
            onNext={handleNext}
            responses={responses}
            setResponses={setResponses}
          />
        );
      case 2:
        return (
          <Question2
            onPrev={handlePrev}
            onNext={handleNext}
            responses={responses}
            setResponses={setResponses}
          />
        );
      case 3:
        return (
          <Question3
            onPrev={handlePrev}
            onSubmit={handleSubmit}
            responses={responses}
            setResponses={setResponses}
          />
        );
      default:
        return <p>Returned</p>;
    }
  };

  return (
    <div className="travel-quiz">
      {renderQuestion()}
      {currentQuestion > 1 && <button onClick={handlePrev}>Previous</button>}
    </div>
  );
};

export default Quiz;
