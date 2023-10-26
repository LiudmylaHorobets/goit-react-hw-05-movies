import MovieItem from './MovieItem';
import{HomeMoviesListWrap} from './MoviesList.styled'

const MoviesList = ({ results }) => {
  return (
    <HomeMoviesListWrap>
      <ul className="moviesList">
        {results.map(({ id, name, title, poster_path }) => (
          <MovieItem
            key={id}
            id={id}
            title={name ?? title}
            poster_path={poster_path}
          />
        ))}
      </ul>
    </HomeMoviesListWrap>
  );
};

export default MoviesList;
