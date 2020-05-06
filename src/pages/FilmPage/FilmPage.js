import React, { Component, lazy, Suspense } from "react";
import { Link, Route } from "react-router-dom";
import getFilmWithId from "../../services/getFilmWithId";
import styles from "./FilmPage.module.css";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import FilmsList from "../../components/FilmsList/FilmsList";
import getRecommended from "../../services/getRecommendedFilms";

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

class FilmPage extends Component {
  state = { filmData: null, showError: false, recommended: null };
  componentDidMount() {
    if (this.props.location.state) {
      category = this.props.location.state.from;
    }
    id = this.props.match.params.id;
    getFilmWithId(id)
      .then((response) => this.setState({ filmData: response.data }))
      .catch((error) => this.setState({ showError: true }));

    getRecommended(id).then((response) =>
      this.setState({ recommended: response.data.results.slice(0, 5) })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      id = this.props.match.params.id;
      this.setState({ filmData: null, showError: false, recommended: null });
      getFilmWithId(id)
        .then((response) => this.setState({ filmData: response.data }))
        .catch((error) => this.setState({ showError: true }));

      getRecommended(id).then((response) =>
        this.setState({ recommended: response.data.results.slice(0, 5) })
      );
    }
  }
  // componentWillUnmount() {
  //   this.setState({ filmData: null, showError: false, recommended: null });
  // }
  handleGoBack = () => {
    if (!category) {
      this.props.history.push({
        pathname: "/Films-App",
      });
      return;
    }

    this.props.history.push({
      pathname: "/films",
      search: `?category=${category}`,
    });
  };
  render() {
    const { filmData, showError, recommended } = this.state;
    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={styles.Button}
        ></button>
        {filmData && (
          <div className={styles.FilmWrapper}>
            <h1>{filmData.title}</h1>
            <h5>{filmData.original_title}</h5>
            {filmData.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${filmData.backdrop_path}`}
                alt="film_background_poster"
                className={styles.FilmBackground}
              />
            )}
            <img
              src={`https://image.tmdb.org/t/p/w500/${filmData.poster_path}`}
              alt="film_background_poster"
              className={styles.FilmPosterImage}
            />
            <div className={styles.FilmDetails}>
              <div className={styles.FilmDetail}>
                <h2>Информация о фильме:</h2>
                {filmData.overview && <p>{filmData.overview}</p>}
                {!filmData.overview && <p>К сожалению, описания нет:(</p>}
              </div>
              <div className={styles.FilmDetail}>
                <h3>Жанры:</h3>
                <ul className={styles.GenresList}>
                  {filmData.genres.map((genre) => (
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
            {recommended && <FilmsList films={recommended} />}
            <p className={styles.AdditionalInfoText}>
              Дополнительная информация:
            </p>
            <div className={styles.AdditionalInfoWrapper}>
              <Link to={`/films/${id}/reviews`}>
                <p className={styles.AdditionalInfo}>Обзоры</p>
              </Link>
              <Link to={`/films/${id}/cast`}>
                <p className={styles.AdditionalInfo}>Список актеров</p>
              </Link>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route path="/films/:id/reviews" component={AsyncReviews} />
              <Route path="/films/:id/cast" component={AsyncCast} />
            </Suspense>
          </div>
        )}
        {showError && <PageNotFound />}
      </>
    );
  }
}

export default FilmPage;
