import React, { Component } from "react";
import getTrending from "../../services/getTrending";
import FilmsList from "../../components/FilmsList/FilmsList";
import InfiniteScroll from "react-infinite-scroll-component";
import getInfifniteTrends from "../../services/getInfiniteTrends";
let counter = 1;
class HomePage extends Component {
  state = { popularFilms: [] };

  componentDidMount() {
    counter = 1;
    getTrending().then((response) =>
      this.setState({ popularFilms: response.data.results })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      counter += 1;
    }
  }
  fetchMoreData = () => {
    getInfifniteTrends(counter).then((response) => {
      let arrToAdd = [...this.state.popularFilms, ...response.data.results];
      let used = {};

      let filtered = arrToAdd.filter(function (film) {
        return film.id in used ? 0 : (used[film.id] = 1);
      });
      this.setState({
        popularFilms: filtered,
      });
    });
  };

  render() {
    const { popularFilms } = this.state;
    return (
      <>
        {popularFilms.length > 0 && (
          <InfiniteScroll
            dataLength={popularFilms.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            <FilmsList films={popularFilms} />
          </InfiniteScroll>
        )}
      </>
    );
  }
}

export default HomePage;
