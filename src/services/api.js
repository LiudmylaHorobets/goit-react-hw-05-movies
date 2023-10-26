import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '7cb81bd00b0c803fac6d7af27ad80264';
axios.defaults.params = {
  api_key: API_KEY,
};
export const fetchTrendingMoviesToday = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/all/day`);
  return data;
};
export const fetchMovieDetailsById = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`);
  return data;
};
export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
  return data;
};
export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
  return data;
};
export const searchMoviesByQuery = async query => {
  const { data } = await axios.get(`${BASE_URL}search/movie?query=${query}`);
  return data;
};