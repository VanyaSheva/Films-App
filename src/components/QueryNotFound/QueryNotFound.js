import React from "react";
import styles from "./QueryNotFound.module.css";

const QueryNotFound = ({ query }) => (
  <div className={styles.QueryNotFoundWrapper}>
    <p className={styles.QueryNotFound404}>OOOPS!</p>
    <p className={styles.QueryNotFoundOops}>
      We can`t find anything with{" "}
      <span className={styles.Query}>'{query}'</span> query
    </p>
    <p className={styles.BottomText}>
      Please, specify your query to enjoy our website!
    </p>
  </div>
);

export default QueryNotFound;
