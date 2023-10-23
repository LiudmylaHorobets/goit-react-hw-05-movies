import axios from 'axios';

const API_KEY = '9c8413ecf009b9fc84874ae792f130a7';
const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingTodayMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/all/day`);
  return data;
};

export async function fetchSearchMovies(query, page = 1) {
  return (await axios(`${BASE_URL}/search/movie?query=${query}&page=${page}`))
    .data;
}

export async function fetchMovieDetails(id) {
  return (await axios(`${BASE_URL}/movie/${id}`)).data;
}

export async function fetchMovieCast(id) {
  return (await axios(`${BASE_URL}/movie/${id}/credits`)).data;
}

export async function fetchMovieReview(id) {
  return (await axios(`${BASE_URL}/movie/${id}/reviews`)).data;
}