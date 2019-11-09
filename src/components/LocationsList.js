import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [locations, setLocations] = useState([])

  useEffect(() => {
    const getLocations = () => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          setLocations(res.data.results)
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    getLocations();
  }, []);

  return (
    <section className="location-list">
      {locations.map(location => (
        <LocationCard location={location} />
      ))}
    </section>
  );
}
