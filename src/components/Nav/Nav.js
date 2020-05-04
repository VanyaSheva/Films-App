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
        Home
      </NavLink>
    </li>
    <li className={styles.NavItem}>
      <NavLink to="/films" activeStyle={ativeStyle}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
