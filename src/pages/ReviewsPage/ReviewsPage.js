import React, { Component } from "react";
import getReviews from "../../services/getReviews";
import getSerialReviews from "../../services/getSerialReviews";
import styles from "./ReviewsPage.module.css";

class ReviewsPage extends Component {
  state = { reviews: [], error: null, showError: false };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.match.path === "/serials/:id/reviews") {
      getSerialReviews(id)
        .then((response) => {
          if (response.data.results.length > 10) {
            this.setState({ reviews: response.data.results.slice(0, 11) });
          } else if (response.data.results.length === 0) {
            this.setState({ showError: true });
          } else {
            this.setState({ reviews: response.data.results });
          }
        })
        .catch((error) => this.setState({ error }));
    } else if (
      this.props.match.path === "/films/:id/reviews" ||
      this.props.match.path === "/cartoons/:id/reviews"
    ) {
      getReviews(id)
        .then((response) => {
          if (response.data.results.length > 10) {
            this.setState({ reviews: response.data.results.slice(0, 11) });
          } else if (response.data.results.length === 0) {
            this.setState({ showError: true });
          } else {
            this.setState({ reviews: response.data.results });
          }
        })
        .catch((error) => this.setState({ error }));
    }
  }

  render() {
    const { reviews, showError } = this.state;
    return (
      <>
        {reviews.length > 0 && (
          <ul className={styles.ReviewsList} id="list">
            {reviews.map((review) => (
              <li key={review.id} className={styles.ReviewsListItem}>
                <p className={styles.ReviewsListItemAuthor}>{review.author}:</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}

        {showError && <p>К сожалению, обзоров нет</p>}
      </>
    );
  }
}

export default ReviewsPage;
