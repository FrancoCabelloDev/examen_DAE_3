// components/HeroBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="hero-banner d-flex align-items-center text-white position-relative">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-1 fw-bold mb-4">
              Tu banco digital de confianza
            </h1>
            <p className="lead fs-3 mb-5">
              Descubre nuestros productos financieros diseñados para hacer crecer tu dinero y cumplir tus metas, y dejes TECSUPE
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link 
                to="/items" 
                className="btn bg-bcp-yellow text-bcp-blue btn-lg px-5 py-3 fw-semibold fs-5"
              >
                Ver Productos
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold fs-5"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;