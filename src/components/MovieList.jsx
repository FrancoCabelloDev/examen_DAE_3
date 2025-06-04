import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="container my-4">
      <h2>Ahora en Cartelera</h2>
      <div className="row">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
