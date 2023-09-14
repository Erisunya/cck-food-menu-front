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
      <button className={styles.button} onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
          ></path>
        </svg>
        Go back
      </button>
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
