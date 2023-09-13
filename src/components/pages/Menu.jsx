import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import Card from "../layout/Card";

const Menu = (props) => {
  const [menus, setMenus] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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

  const onMenuClickHandler = () => {
    setIsOpen(!isOpen);
  };

  // Return ErrorPage if stall param is invalid

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      {menus.halal === "Y" ? <h1 className={styles.halal}>Halal</h1> : null}
      {menus.halal === "N" ? <h1 className={styles.halal}>Not Halal</h1> : null}
      {/* {menus.images ? <Lightbox images={menus.images}></Lightbox> : null} */}
      <div className={styles.menus}>
        {menus.images?.map((image) => {
          return (
            <div onClick={onMenuClickHandler}>
              <Card key={image} image={image}></Card>
            </div>
          );
        })}
      </div>
      {isOpen ? (
        <Lightbox images={menus.images} onClose={onMenuClickHandler}></Lightbox>
      ) : null}
    </>
  );
};

export default Menu;
