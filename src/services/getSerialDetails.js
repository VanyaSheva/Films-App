import axios from "axios";

const getSerialDetails = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=22604d7d4d6b8e16c79f6a5ba307d7e0&language=ru`
  );
};

export default getSerialDetails;
