import styles from "./Stalls.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Stalls = (props) => {
  const [stalls, setStalls] = useState({});
  const [stallNames, setStallNames] = useState([]);
  const { placeName } = useParams();
  const navigate = useNavigate();

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
      <button onClick={() => navigate(-1)}>Back</button>
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
