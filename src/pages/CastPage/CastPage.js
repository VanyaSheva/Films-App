import React, { Component, Fragment } from "react";
import getCast from "../../services/getCast";
import styles from "./CastPage.module.css";
import CastItem from "../../components/CastItem/CastItem";

class CastPage extends Component {
  state = { casts: [] };

  componentDidMount() {
    const id = this.props.match.params.id;
    getCast(id).then((response) => {
      if (response.data.cast.length > 10) {
        this.setState({ casts: response.data.cast.slice(0, 11) });
      } else {
        this.setState({ casts: response.data.cast });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.casts.length > 0) {
      const listHeight = getComputedStyle(
        document.querySelector("#list")
      ).height.replace(/[^0-9]/gim, "");
      const heightToScrollDown =
        document.documentElement.scrollHeight - listHeight;
      window.scrollTo({
        top: heightToScrollDown,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  render() {
    const { casts } = this.state;
    return (
      <>
        {casts.length > 0 && (
          <ul className={styles.CastList} id="list">
            {casts.map((cast) => (
              <Fragment key={cast.id}>
                {cast.profile_path && <CastItem cast={cast} />}
              </Fragment>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default CastPage;
