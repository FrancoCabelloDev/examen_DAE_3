// src/components/MovieSlider.jsx
import React from 'react';
import { items } from '../data';

const MovieSlider = () => (
  <section className="movie-slider py-4">
    <div className="container">
      <h2 className="h4 fw-bold text-light mb-4">Tendencias</h2>
      <div className="d-flex overflow-auto gap-3">
        {items.map(item => (
          <div key={item.id} className="bg-dark rounded shadow-sm" style={{width: '200px', minWidth: '200px', height: '320px', position: 'relative', overflow: 'hidden'}}>
            <img src={item.image} alt={item.title} style={{width: '100%', height: '70%', objectFit: 'cover'}} />
            <div className="p-2">
              <span className="badge bg-danger mb-1">{item.type === 'pelicula' ? 'Película' : 'Serie'}</span>
              <h5 className="text-light mb-1" style={{fontSize: '1.1rem'}}>{item.title}</h5>
              <p className="text-secondary mb-0" style={{fontSize: '0.9rem'}}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MovieSlider;
