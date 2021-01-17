import axios from "axios";

const instance = axios.create({
  // creating a base url to make request to the movie database.
  baseURL: "https://api.themoviedb.org/3",
});

// we are something like this here ... when we type instance.get("foo-bar");    it will do something like this   https://api.themoviedb.org/3/foo-bar .

export default instance;
