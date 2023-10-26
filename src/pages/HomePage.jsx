import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMoviesToday } from 'services/api';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later.'
  );

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const { results } = await fetchTrendingMoviesToday();
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <div>
      {error && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <MoviesList results={movies} />
      )}
    </div>
  );
};

export default HomePage;
