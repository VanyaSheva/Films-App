import React, { Component } from "react";
import getFilmsWithQuery from "../../services/getFilmsWithQuery";
import FilmsList from "../../components/FilmsList/FilmsList";
import queryString from "query-string";
import InfiniteScroll from "react-infinite-scroll-component";
import getInfifniteFilmsWithQuery from "../../services/getInfiniteFilmsWithQuery";
import QueryNotFound from "../../components/QueryNotFound/QueryNotFound";
import styles from "./SearchBar.module.css";
import Spinner from "../../helpers/Loader";
let counter = 1;
let invalidQuery;
class MoviesPage extends Component {
  state = { query: "", filmsList: [], showError: false, showLoader: false };

  componentDidMount() {
    if (this.props.location.search) {
      counter = 1;
      const parsed = queryString.parse(this.props.location.search);
      this.setState({ query: parsed.category });
      getFilmsWithQuery(parsed.category).then((response) =>
        this.setState({ filmsList: response.data.results })
      );
    }
  }

  onFormSubmit = (e) => {
    counter = 1;
    this.setState({ showError: false, showLoader: true });
    e.preventDefault();
    invalidQuery = this.state.query;
    getFilmsWithQuery(this.state.query).then((response) => {
      if (response.data.results.length > 0) {
        this.setState({ filmsList: response.data.results, showLoader: false });
      } else {
        this.setState({ filmsList: [], showError: true, showLoader: false });
      }
    });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${this.state.query}`,
    });
  };

  onInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  fetchMoreData = () => {
    counter += 1;
    getInfifniteFilmsWithQuery(this.state.query, counter).then((response) => {
      let arrToAdd = [...this.state.filmsList, ...response.data.results];
      let used = {};

      let filtered = arrToAdd.filter(function (film) {
        return film.id in used ? 0 : (used[film.id] = 1);
      });
      this.setState({
        filmsList: filtered,
      });
    });
  };

  render() {
    const { query, filmsList, showError, showLoader } = this.state;
    return (
      <>
        <form onSubmit={this.onFormSubmit} className={styles.SearchForm}>
          <input
            placeholder="Type to search"
            value={query}
            onChange={this.onInputChange}
            required
            className={styles.SearchFormInput}
          />
          <button type="submit" className={styles.SearchFormButton}></button>
        </form>
        {showLoader && <Spinner />}
        {filmsList.length > 0 && (
          <InfiniteScroll
            dataLength={filmsList}
            next={this.fetchMoreData}
            hasMore={true}
            scrollThreshold={0.8}
          >
            <FilmsList films={filmsList} location={query} />
          </InfiniteScroll>
        )}
        {showError && <QueryNotFound query={invalidQuery} />}
      </>
    );
  }
}

export default MoviesPage;
