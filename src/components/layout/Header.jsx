import styles from "./Header.module.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <div>
          <h1>CCK Food Menu</h1>
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
