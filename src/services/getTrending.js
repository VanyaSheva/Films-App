import axios from "axios";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=ru&page=1";

const getTrending = () => {
  return axios.get(url);
};

export default getTrending;
