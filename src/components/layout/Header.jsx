import styles from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo of CCK Menus Web" className={styles.logo} />
          <Link to="/" className={styles.link}>
            <h1>CCK Menus</h1>
          </Link>
        </div>
        <div className={styles.links}>
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
