import axios from "axios";

const getTrending = (query) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&query=${query}&language=ru`
  );
};
export default getTrending;
