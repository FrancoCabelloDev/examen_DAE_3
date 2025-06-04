const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Sin+imagen';

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={movie.title}
          style={{ height: '350px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate">{movie.title}</h5>
          <p className="card-text">
            {movie.overview ? movie.overview.slice(0, 100) + '...' : 'Sin descripción disponible.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
