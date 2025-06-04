// components/Header.jsx - Netflix
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="py-3 shadow-sm" style={{ background: 'linear-gradient(90deg, #141414 60%, #181818 100%)' }}>
    <nav className="container d-flex align-items-center justify-content-between">
      <Link to="/" className="navbar-brand text-danger fw-bold fs-3" style={{letterSpacing: '2px'}}>NETFLIX</Link>
      <ul className="nav">
        <li className="nav-item"><Link to="/" className="nav-link text-light">Inicio</Link></li>
        <li className="nav-item"><Link to="/movies" className="nav-link text-light">Películas</Link></li>
        <li className="nav-item"><Link to="/series" className="nav-link text-light">Series</Link></li>
        <li className="nav-item"><Link to="/my-list" className="nav-link text-light">Mi Lista</Link></li>
        <li className="nav-item"><Link to="/search" className="nav-link text-light">Buscar</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;