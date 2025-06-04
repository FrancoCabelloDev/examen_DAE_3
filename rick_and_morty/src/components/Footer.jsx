// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        <p>© 2025 Rick & Morty App. Todos los derechos reservados.</p>
        <p>
          Hecho con 🎉 por tu nombre o por tu equipo.
        </p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#282c34',
  color: '#aaa',
  padding: '1rem 0',
  marginTop: '2rem',
};

const footerContainer = {
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '0.9rem',
};
