import styles from "./Stalls.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../layout/Card";
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
    console.log(stalls);
  }, [stalls]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className={styles.stalls}>
        {Object.keys(stalls).length === 0 ? (
          <ErrorPage />
        ) : (
          stallNames.map((stallName) => {
            return (
              <Card
                key={stallName}
                title={stallName}
                link={`/${placeName}/${stallName}`}
                image={stalls[stallName][0]}
              />
            );
            return <h1 key={stallName}>{stallName}</h1>;
          })
        )}
      </div>
    </>
  );
};

export default Stalls;
