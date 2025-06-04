// src/components/LoadingSkeleton.jsx
import React from 'react';

export const LoadingSpinner = ({ size = 'md', text = '', theme = 'dark' }) => (
  <div className={`d-flex flex-column align-items-center justify-content-center text-${theme}`}
       style={{ minHeight: size === 'lg' ? '200px' : '100px' }}>
    <div className={`spinner-border text-danger mb-3`} style={{ width: size === 'lg' ? '4rem' : '2rem', height: size === 'lg' ? '4rem' : '2rem' }} role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
    {text && <span className="fw-semibold">{text}</span>}
  </div>
);
