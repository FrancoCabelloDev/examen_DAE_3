// src/pages/Series.jsx
import React from 'react';
import { items } from '../data';

const Series = () => {
  const series = items.filter(item => item.type === 'serie');
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold text-center mb-5 text-light">Series</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {series.map(serie => (
          <div key={serie.id} className="col">
            <div className="card h-100 bg-dark text-light border-0 shadow-sm">
              <img src={serie.image} alt={serie.title} className="card-img-top" style={{height: '300px', objectFit: 'cover'}} />
              <div className="card-body">
                <span className="badge bg-danger mb-2">Serie</span>
                <h5 className="card-title">{serie.title}</h5>
                <p className="card-text text-secondary">{serie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {series.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted fs-5">No hay series disponibles.</p>
        </div>
      )}
    </div>
  );
};

export default Series;
