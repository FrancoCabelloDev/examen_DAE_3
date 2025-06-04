// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-light py-3 px-4 d-flex justify-content-between align-items-center">
    <h2 className="m-0">PokéAPI App</h2>
    <nav>
      <Link to="/" className="text-light me-3">Inicio</Link>
      <Link to="/favoritos" className="text-light">Favoritos</Link>
    </nav>
  </header>
);

export default Header;
