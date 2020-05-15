import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";
import getSerialDetails from "../../services/getSerialDetails";
import styles from "./SerialPage.module.css";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import SerialsList from "../../components/SerialsList/SerialsList";
import getRecommendedSerials from "../../services/getRecommendedSerials";

let id;
let category;

const AsyncReviews = lazy(() =>
  import(
    "../../pages/ReviewsPage/ReviewsPage" /* webpackChunkName: "reviews-page" */
  )
);
const AsyncCast = lazy(() =>
  import("../../pages/CastPage/CastPage" /* webpackChunkName: "cast-page" */)
);

class SerialPage extends Component {
  state = { serialData: null, showError: false, recommended: null };
  componentDidMount() {
    if (this.props.location.state) {
      category = this.props.location.state.from;
    }
    id = this.props.match.params.id;
    getSerialDetails(id)
      .then((response) => this.setState({ serialData: response.data }))
      .catch((error) => this.setState({ showError: true }));

    getRecommendedSerials(id).then((response) =>
      this.setState({ recommended: response.data.results.slice(0, 5) })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      id = this.props.match.params.id;
      this.setState({ serialData: null, showError: false, recommended: null });
      getSerialDetails(id)
        .then((response) => this.setState({ serialData: response.data }))
        .catch((error) => this.setState({ showError: true }));

      getRecommendedSerials(id).then((response) =>
        this.setState({ recommended: response.data.results.slice(0, 5) })
      );
    }
  }

  handleGoBack = () => {
    if (!category) {
      this.props.history.push({
        pathname: "/serials",
      });
      return;
    }

    this.props.history.push({
      pathname: "/serials",
      search: `?category=${category}`,
    });
  };
  render() {
    const { serialData, showError, recommended } = this.state;
    return (
      <>
        {serialData && (
          <div className={styles.FilmWrapper}>
            <button
              type="button"
              onClick={this.handleGoBack}
              className={styles.Button}
            ></button>
            <h1 className={styles.Title}>{serialData.title}</h1>
            <p className={styles.OriginanTitle}>{serialData.original_title}</p>
            {serialData.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${serialData.backdrop_path}`}
                alt="film_background_poster"
                className={styles.FilmBackground}
              />
            )}
            <img
              src={`https://image.tmdb.org/t/p/w500/${serialData.poster_path}`}
              alt="film_background_poster"
              className={styles.FilmPosterImage}
            />
            <div className={styles.FilmDetails}>
              <div className={styles.FilmDetail}>
                <h2 className={styles.FilmInfo}>Информация о фильме:</h2>
                {serialData.overview && <p>{serialData.overview}</p>}
                {!serialData.overview && <p>К сожалению, описания нет:(</p>}
              </div>
              <div className={styles.FilmDetail}>
                <h3>Жанры:</h3>
                <ul className={styles.GenresList}>
                  {serialData.genres.map((genre) => (
                    <li key={genre.id} className={styles.GenresListItem}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h4 className={styles.AdditionalInfoText}>
              Также рекомендуем к просмотру:
            </h4>
            {recommended && <SerialsList serials={recommended} />}
            <p className={styles.AdditionalInfoText}>
              Дополнительная информация:
            </p>
            <div className={styles.AdditionalInfoWrapper}>
              <NavLink
                to={`/serials/${id}/reviews`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                <p className={styles.AdditionalInfo}>Обзоры</p>
              </NavLink>
              <NavLink
                to={`/serials/${id}/cast`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                <p className={styles.AdditionalInfo}>Список актеров</p>
              </NavLink>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route path="/serials/:id/reviews" component={AsyncReviews} />
              <Route path="/serials/:id/cast" component={AsyncCast} />
            </Suspense>
          </div>
        )}
        {showError && <PageNotFound />}
      </>
    );
  }
}

export default SerialPage;
