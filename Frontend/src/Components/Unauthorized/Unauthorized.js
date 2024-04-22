import React from "react";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const handlelog = () => {
    navigate("/login");
  };
  return (
    <div className="pleaselogin">
      <h2>Please login to explore the places</h2>
      <button onClick={handlelog}>login</button>
    </div>
  );
};

export default Unauthorized;
