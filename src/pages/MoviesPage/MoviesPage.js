import React, { Component } from "react";
import getFilmsWithQuery from "../../services/getFilmsWithQuery";
import FilmsList from "../../components/FilmsList/FilmsList";
import queryString from "query-string";
import InfiniteScroll from "react-infinite-scroll-component";
import getInfifniteFilmsWithQuery from "../../services/getInfiniteFilmsWithQuery";
import styles from "./SearchBar.module.css";
let counter = 0;
class MoviesPage extends Component {
  state = { query: "", filmsList: [] };

  componentDidMount() {
    counter = 0;
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      this.setState({ query: parsed.category });
      getFilmsWithQuery(parsed.category).then((response) =>
        this.setState({ filmsList: response.data.results })
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      counter += 1;
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    getFilmsWithQuery(this.state.query).then((response) =>
      this.setState({ filmsList: response.data.results })
    );
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${this.state.query}`,
    });
  };

  onInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  fetchMoreData = () => {
    getInfifniteFilmsWithQuery(this.state.query, counter).then((response) =>
      this.setState((state) => ({
        filmsList: [...state.filmsList, ...response.data.results],
      }))
    );
  };

  render() {
    const { query, filmsList } = this.state;
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
            dataLength={filmsList.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            <FilmsList films={filmsList} location={query} />
          </InfiniteScroll>
        )}
      </>
    );
  }
}

export default MoviesPage;
