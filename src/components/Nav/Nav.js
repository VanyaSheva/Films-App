import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const ativeStyle = {
  color: "palevioletred",
};

const Nav = () => (
  <ul className={styles.Nav}>
    <li className={styles.NavItem}>
      <NavLink to="/Films-App" exact activeStyle={ativeStyle}>
        <span className={styles.NavLink}>Home</span>
      </NavLink>
    </li>
    <li className={styles.NavItem}>
      <NavLink to="/films" activeStyle={ativeStyle}>
        <span className={styles.NavLink}>Movies</span>
      </NavLink>
    </li>
  </ul>
);

export default Nav;
