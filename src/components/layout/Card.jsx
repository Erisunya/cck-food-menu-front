import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <Link to={props.link} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {props.image ? (
            <img
              className={styles.image}
              src={props.image}
              alt={`A picture depicting ${props.title}`}
            />
          ) : null}
        </div>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
    </Link>
  );
};

export default Card;
