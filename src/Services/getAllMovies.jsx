import axios from "axios";

const api = axios.create({
    baseURL: "http://www.omdbapi.com/"
})

const getMovies = async () => {
  return api.get("?i=tt3896198&apikey=2c601aa5&s=titanic&page=1")
};

export default getMovies;
