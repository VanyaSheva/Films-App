import React, { Component } from "react";
import getFilmsWithQuery from "../../services/getFilmsWithQuery";
import FilmsList from "../../components/FilmsList/FilmsList";
import queryString from "query-string";
import styles from "./SearchBar.module.css";
class MoviesPage extends Component {
  state = { query: "", filmsList: [] };

  componentDidMount() {
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      this.setState({ query: parsed.category });
      getFilmsWithQuery(parsed.category).then((response) =>
        this.setState({ filmsList: response.data.results })
      );
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
          <FilmsList films={filmsList} location={query} />
        )}
      </>
    );
  }
}

export default MoviesPage;
