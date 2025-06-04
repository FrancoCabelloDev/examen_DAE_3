// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header" style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          <h2>Rick & Morty App</h2>
        </Link>
        <div>
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
          <Link to="/characters" style={linkStyle}>
            Personajes
          </Link>
        </div>
      </nav>
    </header>
  );
}

// Estilos en línea (puedes extraerlos a CSS si lo prefieres)
const headerStyle = {
  backgroundColor: '#282c34',
  padding: '1rem 0',
  color: '#fff',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  marginLeft: '1rem',
};
