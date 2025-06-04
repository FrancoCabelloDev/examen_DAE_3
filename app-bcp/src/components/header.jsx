import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-bcp-blue navbar-dark py-3 shadow-lg">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="bg-bcp-yellow rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
            <span className="text-bcp-blue fw-bold">BCP</span>
          </div>
          <h1 className="h3 mb-0 fw-bold">BCP Onlinisito</h1>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <nav className="navbar-nav ms-auto">
            <Link 
              to="/" 
              className="nav-link fw-medium me-3 text-white"
            >
              Inicio
            </Link>
            <Link 
              to="/items" 
              className="nav-link fw-medium me-3 text-white"
            >
              Productos
            </Link>
            <Link 
              to="/contact" 
              className="nav-link fw-medium text-white"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;