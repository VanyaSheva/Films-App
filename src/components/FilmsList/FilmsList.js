import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./FilmsList.module.css";

class FilmsList extends Component {
  state = {};
  render() {
    const { films } = this.props;
    return (
      <ul className={styles.FilmsList}>
        {films.map((film) => (
          <li key={film.id} className={styles.ListItem}>
            {film.poster_path && (
              <Link
                to={{
                  pathname: `/films/${film.id}`,
                  state: { from: this.props.location },
                }}
              >
                {" "}
                <img
                  src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                  alt="film_post"
                  className={styles.ListItemImage}
                />
                <h5 className={styles.ListItemTitle}>{film.title}</h5>
                <h6 className={styles.ListItemYear}>{film.release_date}</h6>
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default FilmsList;
