// src/components/MovieSlider.jsx
import React from 'react';
import { items } from '../data';

const MovieSlider = () => (
  <section className="movie-slider py-4">
    <div className="container">
      <h2 className="h4 fw-bold text-light mb-3">Tendencias</h2>
      <div
        className="d-flex overflow-auto gap-4"
        style={{ paddingBottom: '10px', scrollbarWidth: 'none' }}
      >
        {items.map(item => (
          <div
            key={item.id}
            className="position-relative rounded overflow-hidden shadow"
            style={{
              width: '220px',
              minWidth: '220px',
              height: '330px',
              backgroundColor: '#141414',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.8)',
                transition: 'filter 0.3s ease-in-out',
              }}
            />
            <div
              className="position-absolute bottom-0 start-0 w-100 px-3 py-2"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
                color: 'white',
              }}
            >
              <span className="badge bg-danger mb-1" style={{ fontSize: '0.75rem' }}>
                {item.type === 'pelicula' ? 'Película' : 'Serie'}
              </span>
              <h5 className="m-0" style={{ fontSize: '1rem', fontWeight: '600' }}>
                {item.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MovieSlider;
