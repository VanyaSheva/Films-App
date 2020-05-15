import React, { Component } from "react";
import getSerials from "../../services/getSerials";
import SeriasList from "../../components/SerialsList/SerialsList";
import InfiniteScroll from "react-infinite-scroll-component";
import getInfiniteSerials from "../../services/getInfiniteSerials";
let counter = 1;
class SerialsPage extends Component {
  state = { serials: [] };

  componentDidMount() {
    counter = 1;
    getSerials().then((response) =>
      this.setState({ serials: response.data.results })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      counter += 1;
    }
  }
  fetchMoreData = () => {
    getInfiniteSerials(counter).then((response) => {
      let arrToAdd = [...this.state.serials, ...response.data.results];
      let used = {};

      let filtered = arrToAdd.filter(function (film) {
        return film.id in used ? 0 : (used[film.id] = 1);
      });
      this.setState({
        serials: filtered,
      });
    });
  };

  render() {
    const { serials } = this.state;
    return (
      <>
        {serials.length > 0 && (
          <InfiniteScroll
            dataLength={serials.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            <SeriasList serials={serials} />
          </InfiniteScroll>
        )}
      </>
    );
  }
}

export default SerialsPage;
