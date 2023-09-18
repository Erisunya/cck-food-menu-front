import styles from "./Header.module.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src="src\assets\logo.jpg"
            alt="Logo of CCK Menus Web"
            className={styles.logo}
          />
          <div>
            <h1>CCK Menus</h1>
          </div>
        </div>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            <h1>Menus</h1>
          </Link>
          <Link to="/feedback" className={styles.link}>
            <h1>Feedback</h1>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
