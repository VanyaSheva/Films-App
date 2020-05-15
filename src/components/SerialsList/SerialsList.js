import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./SerialsList.module.css";

class SerialsList extends Component {
  state = {};
  render() {
    const { serials } = this.props;
    return (
      <ul className={styles.SerialsList}>
        {serials.map((serial) => (
          <Fragment key={serial.id}>
            {serial.poster_path && (
              <li key={serial.id} className={styles.ListItem}>
                <Link
                  to={{
                    pathname: `/serials/${serial.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${serial.poster_path}`}
                    alt="serial_post"
                    className={styles.ListItemImage}
                  />
                  <div className={styles.DescriptionContainer}>
                    <h5 className={styles.ListItemTitle}>{serial.name}</h5>
                    <h6 className={styles.ListItemYear}>
                      {serial.first_air_date}
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

export default SerialsList;
