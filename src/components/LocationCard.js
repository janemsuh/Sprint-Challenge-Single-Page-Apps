import React from "react";

export default function LocationCard({ location }) {

  return (
    <div className='location-card'>
      <h2>Name: {location.name}</h2>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  );
}
