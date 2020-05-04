import React, { Component } from "react";
import getReviews from "../../services/getReviews";
import styles from "./ReviewsPage.module.css";

class ReviewsPage extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const id = this.props.match.params.id;
    getReviews(id).then((response) => {
      if (response.data.results.length > 10) {
        this.setState({ reviews: response.data.results.slice(0, 11) });
      } else {
        this.setState({ reviews: response.data.results });
      }
    });
  }
  onButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 && (
          <ul className={styles.ReviewsList}>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={this.onButtonClick}
          className={styles.ButtonToTop}
        ></button>
        {reviews.length === 0 && <p>К сожалению, обзоров нет</p>}
      </>
    );
  }
}

export default ReviewsPage;
