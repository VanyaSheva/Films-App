import axios from "axios";

const getSerialReviews = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=en-US&page=1`
  );
};

export default getSerialReviews;
