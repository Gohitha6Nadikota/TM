import React from "react";
import places from "../../data/data.json";
import { useParams } from "react-router-dom";
import "./DestinationDetail.css";
// The places array is the same as before...

const DestinationDetail = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id === id);

  return place ? (
    <div className="destination-detail">
      <div className="detail-top">
        <img
          className="detail-image"
          src={place.images[0].url}
          alt={place.images[0].caption}
        />
        <div className="dd">
          <div className="detail-heading">{place.name}</div>
          <div className="detail-description">{place.description}</div>
        </div>
      </div>
      <div className="detail-images">
        {place.images.map((image, index) => (
          <img key={index} src={image.url} alt={image.caption} />
        ))}
      </div>
      <div className="detail-activities">
        <h2>Things to Do:</h2>
        <ul>
          {place.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default DestinationDetail;
