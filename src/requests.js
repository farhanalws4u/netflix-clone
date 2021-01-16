const API_KEY = "807981a1919e5894eaaaab9dab95c980";

const requests = {
  fetchTrending: `/trending/all/week?api_key${API_KEY}&language.en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRoted: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchConedyMovies: `/discover/movie?api_key=$(API_KEY)&With_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&With_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&mith_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&With_genres=99`,
};
