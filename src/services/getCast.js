import axios from "axios";

const getCast = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0`
  );
};

export default getCast;
