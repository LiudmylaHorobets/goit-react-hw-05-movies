import { fetchMovieDetailsById } from 'services/api';
import { Suspense, useEffect, useState, useRef, lazy } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { MovieDetailsWrapper } from 'pages/Page.styled';


export const Layout = lazy(() => import('components/Layout/Layout'));
export const MoviesList = lazy(() =>
  import('components/MoviesList/MoviesList')
);

export const CastList = lazy(() => import('components/Cast/CastList'));
export const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const movieDetails = await fetchMovieDetailsById(movieId);
        setMovie(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    isLoading,
    error,
    (
      <MovieDetailsWrapper>
        <div>
          <div>
            <Link to={backLinkRef.current} className="goBackLink">
              Go back
            </Link>
            {movie && (
              <div className="postList">
                {' '}
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                  }
                  alt={movie.title}
                />
                <div className="description">
                  <h3>{movie.title}</h3>
                  <div>{movie.overview}</div>
                  <p>Average: {movie.vote_average}</p>
                  <p>Release date: {movie.release_date}</p>
                </div>
              </div>
            )}
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </MovieDetailsWrapper>
    )
  );
};

export default MovieDetailsPage;
