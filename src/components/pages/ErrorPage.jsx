import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className={styles.errorPage}>
        <h1>Oops! It seems like this page doesn't exist.</h1>
        <p>
          You may return to the main page <Link to={"/"}>here</Link>.
        </p>
        <p>
          Alternatively, if you believe that you have encountered a bug, please
          submit a feedback to us over <Link to={"/feedback"}>here</Link>.
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
