import MoviesList from 'components/MoviesList/MoviesList';
import { searchMoviesByQuery } from 'services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesPagrWrapper } from 'pages/Page.styled';


const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      if (query) {
        try {
          const data = await searchMoviesByQuery(query);
          setMovies(data.results);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getMovie();
  }, [query]);

  const handleOnSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchMovieByName.value;
    setSearchParams({ query: searchQuery });
    e.currentTarget.reset();
  };
  return (
    isLoading,
    error,
    (
      <MoviesPagrWrapper>
        <div>
          <form onSubmit={handleOnSubmit}>
            <label className="labelSearch">
              <input
                className="input"
                type="text"
                name="searchMovieByName"
                placeholder="Search movie by name"
              />
            </label>
            <button className="btnSubmit">Search</button>
          </form>
          {movies.length > 0 && <MoviesList results={movies} />}
        </div>
      </MoviesPagrWrapper>
    )
  );
};

export default MoviesPage;
