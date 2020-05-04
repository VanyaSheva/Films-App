import React, { Component } from "react";
import getTrending from "../../services/getTrending";
import FilmsList from "../../components/FilmsList/FilmsList";
class HomePage extends Component {
  state = { popularFilms: [] };

  componentDidMount() {
    getTrending().then((response) =>
      this.setState({ popularFilms: response.data.results })
    );
  }

  render() {
    const { popularFilms } = this.state;
    return <>{popularFilms.length > 0 && <FilmsList films={popularFilms} />}</>;
  }
}

export default HomePage;
