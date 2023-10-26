import { fetchMovieCast } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastList = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);

      try {
        const actors = await fetchMovieCast(movieId);
        setCast(actors.cast);
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
      <ul>
        {cast &&
          cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x300'
                }
                alt={actor.name}
              />
              <h3>Name: {actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    )
  );
};

export default CastList;
