import styles from "./Places.module.css";
import { useState, useEffect } from "react";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const getPlaces = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/places`);
      const data = await response.json();
      let places = data.places.filter((place) => place !== "testCollection");
      setPlaces(places);
    };

    getPlaces();
  }, []);

  return (
    <>
      {places.map((place) => {
        return <h1 key={place}>{place}</h1>;
      })}
    </>
  );
};

export default Places;
