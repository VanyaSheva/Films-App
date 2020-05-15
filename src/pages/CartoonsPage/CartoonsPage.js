import React, { Component } from "react";
import getCartoons from "../../services/getCartoons";
import CartoonsList from "../../components/CartoonsList/CartoonsList";
import InfiniteScroll from "react-infinite-scroll-component";
import getInfiniteCartoons from "../../services/getInfiniteCartoons";
let counter = 1;
class CartoonsPage extends Component {
  state = { cartoons: [] };

  componentDidMount() {
    counter = 1;
    getCartoons().then((response) =>
      this.setState({ cartoons: response.data.results })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      counter += 1;
    }
  }
  fetchMoreData = () => {
    getInfiniteCartoons(counter).then((response) => {
      let arrToAdd = [...this.state.cartoons, ...response.data.results];
      let used = {};

      let filtered = arrToAdd.filter(function (film) {
        return film.id in used ? 0 : (used[film.id] = 1);
      });
      this.setState({
        cartoons: filtered,
      });
    });
  };

  render() {
    const { cartoons } = this.state;
    return (
      <>
        {cartoons.length > 0 && (
          <InfiniteScroll
            dataLength={cartoons.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            <CartoonsList cartoons={cartoons} />
          </InfiniteScroll>
        )}
      </>
    );
  }
}

export default CartoonsPage;
