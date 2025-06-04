import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Plantillas', path: '/items' },
    { name: 'Contacto', path: '/contact' }
  ];

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div className="gradient-bg rounded d-flex align-items-center justify-content-center me-2" 
               style={{width: '32px', height: '32px'}}>
            <span className="text-white fw-bold fs-5">C</span>
          </div>
          <span className="fs-4 fw-bold text-gradient">Canva</span>
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link px-3 py-2 rounded ${
                    isActive(item.path) ? 'active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="d-flex">
            <Link 
              to="/items" 
              className="btn btn-canva-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Crear Diseño
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}