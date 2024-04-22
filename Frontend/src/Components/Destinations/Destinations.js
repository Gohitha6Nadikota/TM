import React, { useContext } from "react";
import { Link } from "react-router-dom";
import places from "../../data/data.json";
import "./Destinations.css";
import { TravelContext } from "../../Context/TravelContext";

function Destinations() {
  const { travel } = useContext(TravelContext);
  return (
    <div className="destination-container">
      {places
        .filter((place) => {
          return (
            place.tags.includes(travel.Q1) &&
            place.visitMonths.includes(travel.Q2) &&
            place.type.includes(travel.Q3)
          );
        })
        .map((place) => (
          <Link to={`/destination/${place.id}`} key={place.id}>
            <div className="destination-card">
              <img src={place.images[0].url} alt={place.images[0].caption} />
              <h2>{place.name}</h2>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Destinations;
