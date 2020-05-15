import axios from "axios";

const getInfiniteCartoons = (counter) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=${counter}&with_genres=16`
  );
};

export default getInfiniteCartoons;
