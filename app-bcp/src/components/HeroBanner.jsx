// components/HeroBanner.jsx
import React from 'react';

const HeroBanner = () => (
  <section className="hero-banner bg-dark text-light py-5 mb-5" style={{
    background: `linear-gradient(rgba(20,20,20,0.7), rgba(20,20,20,0.7)), url('https://assets.nflxext.com/ffe/siteui/vlv3/7e7e7e7e-7e7e-7e7e-7e7e-7e7e7e7e7e7e/7e7e7e7e-7e7e-7e7e-7e7e-7e7e7e7e7e7e/ES-es-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg') center/cover no-repeat`
  }}>
    <div className="container text-center">
      <h1 className="display-3 fw-bold mb-3">Bienvenido a Netflix</h1>
      <p className="lead mb-4">Disfruta de las mejores películas y series en streaming.</p>
      <button className="btn btn-danger btn-lg">Ver ahora</button>
    </div>
  </section>
);

export default HeroBanner;