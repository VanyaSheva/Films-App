import React, { Component } from "react";
import getFilmsWithQuery from "../../services/getFilmsWithQuery";
import FilmsList from "../../components/FilmsList/FilmsList";
import queryString from "query-string";
import InfiniteScroll from "react-infinite-scroll-component";
import getInfifniteFilmsWithQuery from "../../services/getInfiniteFilmsWithQuery";
import QueryNotFound from "../../components/QueryNotFound/QueryNotFound";
import styles from "./SearchBar.module.css";
let counter = 1;
let invalidQuery;
class MoviesPage extends Component {
  state = { query: "", filmsList: [], showError: false };

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
    this.setState({ showError: false });
    e.preventDefault();
    invalidQuery = this.state.query;
    getFilmsWithQuery(this.state.query).then((response) => {
      if (response.data.results.length > 0) {
        this.setState({ filmsList: response.data.results });
      } else {
        this.setState({ filmsList: [], showError: true });
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
    const { query, filmsList, showError } = this.state;
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
