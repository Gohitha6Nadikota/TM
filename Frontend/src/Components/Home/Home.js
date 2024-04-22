import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleExplore = () => { 
    navigate("/travel");
  };
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Travel Mate</h1>
        <p>"Discover the World: Unleash Your Wanderlust with Us!</p>
        <button onClick={handleExplore}>Explore</button>
      </div>
    </div>
  );
};

export default Home;
