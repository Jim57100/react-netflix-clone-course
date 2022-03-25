
const API_KEY = process.env.REACT_APP_TMDB;

const BASE_URL = "https://api.themoviedb.org/3";

const Requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR&page=1`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&page=1`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`,
  fetchThrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749,`,
  fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  mostPopularTvReq: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=fr-FR&page=1`,
  topRatedTvReq: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`,
  fetchMovieDiscover: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&page=1`,
  fetchTvDiscover: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&page=1`,
}


export default Requests;
