import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import "./index.css";

const Nav = () => (
  <ul className={styles.Nav}>
    <li className={styles.NavItem}>
      <NavLink to="/" exact activeClassName="active">
        <span className={styles.NavLink}>Фильмы</span>
      </NavLink>
    </li>
    <li className={styles.NavItem}>
      <NavLink to="/serials" activeClassName="active">
        <span className={styles.NavLink}>Сериалы</span>
      </NavLink>
    </li>
    <li className={styles.NavItem}>
      <NavLink to="/cartoons" activeClassName="active">
        <span className={styles.NavLink}>Мультфильмы</span>
      </NavLink>
    </li>
    <li className={styles.NavLink}>
      <NavLink
        to="/films"
        activeClassName="activeSearch"
        className={styles.NavSearch}
      >
        <span className={styles.Search}></span>
      </NavLink>
    </li>
  </ul>
);

export default Nav;
