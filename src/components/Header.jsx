import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <Link className="navbar-brand" to="/">Mini TMDB</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/buscar">Buscar</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
