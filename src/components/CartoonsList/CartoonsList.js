import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./CartoonsList.module.css";

class CartoonsList extends Component {
  state = {};
  render() {
    const { cartoons } = this.props;
    return (
      <ul className={styles.CartoonsList}>
        {cartoons.map((cartoon) => (
          <Fragment key={cartoon.id}>
            {cartoon.poster_path && (
              <li key={cartoon.id} className={styles.ListItem}>
                <Link
                  to={{
                    pathname: `/cartoons/${cartoon.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${cartoon.poster_path}`}
                    alt="serial_post"
                    className={styles.ListItemImage}
                  />
                  <div className={styles.DescriptionContainer}>
                    <h5 className={styles.ListItemTitle}>{cartoon.title}</h5>
                    <h6 className={styles.ListItemYear}>
                      {cartoon.release_date}
                    </h6>
                  </div>
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    );
  }
}

export default CartoonsList;
