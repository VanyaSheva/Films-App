import React, { Component, Fragment } from "react";
import getCast from "../../services/getCast";
import styles from "./CastPage.module.css";
import CastItem from "../../components/CastItem/CastItem";

class CastPage extends Component {
  state = { casts: [], error: null };

  componentDidMount() {
    const id = this.props.match.params.id;
    getCast(id)
      .then((response) => {
        if (response.data.cast.length > 10) {
          this.setState({ casts: response.data.cast.slice(0, 11) });
        } else {
          this.setState({ casts: response.data.cast });
        }
      })
      .catch((error) => this.setState({ error }));
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.casts.length > 0) {
  //     const listHeight = getComputedStyle(
  //       document.querySelector("#list")
  //     ).height.replace(/[^0-9]/gim, "");
  //     const heightToScrollDown =
  //       document.documentElement.scrollHeight - listHeight;
  //     window.scrollTo({
  //       top: heightToScrollDown,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  render() {
    const { casts, error } = this.state;
    return (
      <>
        {casts.length > 0 && (
          <ul className={styles.CastList} id="list">
            {casts.map((cast) => (
              <Fragment key={cast.id}>
                <CastItem cast={cast} />
              </Fragment>
            ))}
          </ul>
        )}
        {error && <p>К сожалению, информации про актеров нет.</p>}
      </>
    );
  }
}

export default CastPage;
