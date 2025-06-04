import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/" style={{color: '#ea4c89'}}>
          <i className="bi bi-circle-fill me-2"></i>
          Dribbble
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} fs-4`}></i>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className={`nav-link fw-medium ${isActive('/')}`} to="/">
                Inspiration
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fw-medium ${isActive('/shots')}`} to="/shots">
                Shots
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fw-medium ${isActive('/contact')}`} to="/contact">
                Hire Designers
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <button className="btn btn-outline-dark rounded-pill px-4">
                Log in
              </button>
            </li>
            <li className="nav-item ms-2">
              <button className="btn rounded-pill px-4" style={{backgroundColor: '#ea4c89', color: 'white'}}>
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}