import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../layout/Card";

const Menu = (props) => {
  const [menus, setMenus] = useState({});
  const { placeName, stallName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getMenus = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/places/${placeName}/${stallName}`
      );
      const data = await response.json();
      console.log("getMenus");
      setMenus(data);
    };

    getMenus();
  }, []);

  useEffect(() => {
    console.log(menus);
    console.log(menus.images);
  }, [menus]);

  // Return ErrorPage if stall param is invalid

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      {menus.halal === "Y" ? <h1 className={styles.halal}>Halal</h1> : null}
      {menus.halal === "N" ? <h1 className={styles.halal}>Not Halal</h1> : null}
      <div className={styles.menus}>
        {menus.images?.map((image) => {
          return <Card key={image} image={image} link={image}></Card>;
        })}
      </div>
    </>
  );
};

export default Menu;
