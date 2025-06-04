// src/pages/Movies.jsx
import React from 'react';
import { items } from '../data';

const Movies = () => {
  const movies = items.filter(item => item.type === 'pelicula');
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold text-center mb-5 text-light">Películas</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {movies.map(movie => (
          <div key={movie.id} className="col">
            <div className="card h-100 bg-dark text-light border-0 shadow-sm">
              <img src={movie.image} alt={movie.title} className="card-img-top" style={{height: '300px', objectFit: 'cover'}} />
              <div className="card-body">
                <span className="badge bg-danger mb-2">Película</span>
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-secondary">{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {movies.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted fs-5">No hay películas disponibles.</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
