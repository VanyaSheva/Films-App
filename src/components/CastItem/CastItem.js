import React, { Component } from "react";
import styles from "./CastItem.module.css";

class CastItem extends Component {
  state = { showMore: false };

  onShowInfo = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { showMore } = this.state;
    return (
      <li key={this.props.cast.id} className={styles.CastListItem}>
        {this.props.cast.profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${this.props.cast.profile_path}`}
            alt="cast_poster"
            className={styles.CastListImage}
          />
        )}
        {!this.props.cast.profile_path && (
          <img
            src={
              "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/help-solid-512.png"
            }
            alt="cast_poster"
            className={styles.CastListImage}
          />
        )}

        {!showMore && (
          <button
            type="button"
            onClick={this.onShowInfo}
            className={styles.Button}
          >
            Больше
          </button>
        )}
        {showMore && (
          <div>
            <p>Имя: {this.props.cast.name} </p>
            <p>Роль: {this.props.cast.character}</p>
            <button
              type="button"
              onClick={this.onShowInfo}
              className={styles.Button}
            >
              Спрятать
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default CastItem;
