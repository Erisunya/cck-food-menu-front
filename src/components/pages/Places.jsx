import styles from "./Places.module.css";
import { useState, useEffect } from "react";
import Card from "../layout/Card";

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
    <div className={styles.places}>
      {places.map((place) => {
        return (
          <Card
            key={place}
            title={place}
            link={`/${place}`}
            image="https://picsum.photos/200/300"
          />
        );
      })}
    </div>
  );
};

export default Places;
