import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";
import getFilmWithId from "../../services/getFilmWithId";
import styles from "./CartoonPage.module.css";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import CartoonsList from "../../components/CartoonsList/CartoonsList";
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
  state = { cartoonData: null, showError: false, recommended: null };
  componentDidMount() {
    if (this.props.location.state) {
      category = this.props.location.state.from;
    }
    id = this.props.match.params.id;
    getFilmWithId(id)
      .then((response) => this.setState({ cartoonData: response.data }))
      .catch((error) => this.setState({ showError: true }));

    getRecommended(id).then((response) =>
      this.setState({ recommended: response.data.results.slice(0, 5) })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      id = this.props.match.params.id;
      this.setState({ cartoonData: null, showError: false, recommended: null });
      getFilmWithId(id)
        .then((response) => this.setState({ cartoonData: response.data }))
        .catch((error) => this.setState({ showError: true }));

      getRecommended(id).then((response) =>
        this.setState({ recommended: response.data.results.slice(0, 5) })
      );
    }
  }

  handleGoBack = () => {
    if (!category) {
      this.props.history.push({
        pathname: "/cartoons",
      });
      return;
    }

    this.props.history.push({
      pathname: "/cartoons",
      search: `?category=${category}`,
    });
  };
  render() {
    const { cartoonData, showError, recommended } = this.state;
    return (
      <>
        {cartoonData && (
          <div className={styles.FilmWrapper}>
            <button
              type="button"
              onClick={this.handleGoBack}
              className={styles.Button}
            ></button>
            <h1 className={styles.Title}>{cartoonData.title}</h1>
            <p className={styles.OriginanTitle}>{cartoonData.original_title}</p>
            {cartoonData.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${cartoonData.backdrop_path}`}
                alt="film_background_poster"
                className={styles.FilmBackground}
              />
            )}
            <img
              src={`https://image.tmdb.org/t/p/w500/${cartoonData.poster_path}`}
              alt="film_background_poster"
              className={styles.FilmPosterImage}
            />
            <div className={styles.FilmDetails}>
              <div className={styles.FilmDetail}>
                <h2 className={styles.FilmInfo}>Информация о фильме:</h2>
                {cartoonData.overview && <p>{cartoonData.overview}</p>}
                {!cartoonData.overview && <p>К сожалению, описания нет:(</p>}
              </div>
              <div className={styles.FilmDetail}>
                <h3>Жанры:</h3>
                <ul className={styles.GenresList}>
                  {cartoonData.genres.map((genre) => (
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
            {recommended && <CartoonsList cartoons={recommended} />}
            <p className={styles.AdditionalInfoText}>
              Дополнительная информация:
            </p>
            <div className={styles.AdditionalInfoWrapper}>
              <NavLink
                to={`/cartoons/${id}/reviews`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                <p className={styles.AdditionalInfo}>Обзоры</p>
              </NavLink>
              <NavLink
                to={`/cartoons/${id}/cast`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                <p className={styles.AdditionalInfo}>Список актеров</p>
              </NavLink>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route path="/cartoons/:id/reviews" component={AsyncReviews} />
              <Route path="/cartoons/:id/cast" component={AsyncCast} />
            </Suspense>
          </div>
        )}
        {showError && <PageNotFound />}
      </>
    );
  }
}

export default FilmPage;
