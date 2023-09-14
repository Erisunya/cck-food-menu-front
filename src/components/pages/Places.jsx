import styles from "./Places.module.css";
import { useState, useEffect } from "react";
import Card from "../layout/Card";

const Places = () => {
  const [places, setPlaces] = useState({});
  const [placeNames, setPlaceNames] = useState([]);

  useEffect(() => {
    const getPlaces = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/places`);
      const data = await response.json();
      delete data["Test Place 1"];
      let places = Object.keys(data).sort((a, b) => a - b);
      setPlaces(data);
    };

    getPlaces();
  }, []);

  useEffect(() => {
    let keys = Object.keys(places).sort((a, b) => a - b);
    setPlaceNames(keys);
    console.log(places);
  }, [places]);

  return (
    <div className={styles.places}>
      {placeNames.map((placeName) => {
        return (
          <Card
            key={placeName}
            title={placeName}
            link={`/${placeName}`}
            image={places[placeName]}
          />
        );
      })}
    </div>
  );
};

export default Places;
