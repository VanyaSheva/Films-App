import React from "react";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => (
  <div className={styles.PageNotFoundWrapper}>
    <p className={styles.PageNotFound404}>404</p>
    <p className={styles.PageNotFoundOops}>Ooops! Something going wrong</p>
    <p>
      Sorry, but this page not found, please make sure that you have good
      internet connection
    </p>
  </div>
);

export default PageNotFound;
