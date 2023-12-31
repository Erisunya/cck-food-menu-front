import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import Card from "../layout/Card";
import ErrorPage from "./ErrorPage";

const Menu = (props) => {
  const [menus, setMenus] = useState({});
  const [openMenu, setOpenMenu] = useState({ isOpen: false });
  const [error, setError] = useState(false);
  const { placeName, stallName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/places/${placeName}/${stallName}`
        );
        const data = await response.json();
        setMenus(data);
      } catch (error) {
        setError(true);
      }
    };

    getMenus();
  }, []);

  const onMenuClickHandler = (menuIndex) => {
    let newOpenMenu = { isOpen: !openMenu.isOpen, index: menuIndex };
    setOpenMenu(newOpenMenu);
  };

  // Return ErrorPage if stall param is invalid

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
        Back
      </button>
      {menus.halal === "Y" ? (
        <p className={styles.halal}>This place is halal-certified.</p>
      ) : null}
      {menus.halal === "N" ? (
        <p className={styles.halal}>
          This place is <u>not</u> halal-certified.
        </p>
      ) : null}
      <div className={styles.menus}>
        {error ? (
          <ErrorPage />
        ) : (
          menus.images?.map((image) => {
            let imageURI = `${image.slice(0, -4)}m${image.slice(-4)}`;
            return (
              <div
                key={image}
                onClick={() => onMenuClickHandler(menus.images.indexOf(image))}
              >
                <Card image={imageURI}></Card>
              </div>
            );
          })
        )}
      </div>
      {openMenu.isOpen ? (
        <Lightbox
          images={menus.images}
          onClose={onMenuClickHandler}
          startIndex={openMenu.index}
          allowRotate={false}
          doubleClickZoom={2.5}
        ></Lightbox>
      ) : null}
    </>
  );
};

export default Menu;
