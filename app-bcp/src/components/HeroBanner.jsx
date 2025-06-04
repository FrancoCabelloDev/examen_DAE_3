// components/HeroBanner.jsx
import React, { useState } from 'react';
import { items } from '../data';
import { FaPlay } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const featured = items.slice(0, 6);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % featured.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + featured.length) % featured.length);

  return (
    <section
      className="hero-banner position-relative"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.3) 60%), url('${featured[current].image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'start',
        padding: '5rem 3rem',
        color: 'white',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="container text-start" style={{ maxWidth: '700px' }}>
        <span className="badge bg-danger mb-3 px-3 py-2" style={{ fontSize: '0.9rem' }}>
          {featured[current].type === 'pelicula' ? 'Película' : 'Serie'}
        </span>
        <h1 className="display-3 fw-bold mb-3">{featured[current].title}</h1>
        <p className="lead mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          {featured[current].description}
        </p>
        <button className="btn btn-danger btn-lg px-4 py-2 d-flex align-items-center gap-2" style={{ fontSize: '1.1rem' }}>
          <FaPlay /> Ver ahora
        </button>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={prevSlide}
        className="btn position-absolute top-50 start-0 translate-middle-y"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: '2rem',
          border: 'none',
          padding: '0.5rem 1rem',
          zIndex: 10,
        }}
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="btn position-absolute top-50 end-0 translate-middle-y"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: '2rem',
          border: 'none',
          padding: '0.5rem 1rem',
          zIndex: 10,
        }}
      >
        &#8250;
      </button>

      {/* Indicadores (píldoras) */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 pb-4">
        {featured.map((_, idx) => (
          <span
            key={idx}
            className={`rounded-pill`}
            style={{
              width: 20,
              height: 4,
              backgroundColor: idx === current ? '#e50914' : '#aaa',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
