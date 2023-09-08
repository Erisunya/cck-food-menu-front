import styles from "./Stalls.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Stalls = (props) => {
  const [stalls, setStalls] = useState({});
  const [stallNames, setStallNames] = useState([]);
  const { placeName } = useParams();

  // Return ErrorPage if place param is invalid
  useEffect(() => {
    const getStalls = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/${placeName}`
      );
      const data = await response.json();
      setStalls(data);
    };

    getStalls();
  }, []);

  useEffect(() => {
    setStallNames(Object.keys(stalls).sort((a, b) => a - b));
    console.log(Object.keys(stalls));
  }, [stalls]);

  return (
    <>
      {Object.keys(stalls).length === 0 ? (
        <ErrorPage />
      ) : (
        stallNames.map((stallName) => {
          return <h1 key={stallName}>{stallName}</h1>;
        })
      )}
    </>
  );
};

export default Stalls;
