// src/components/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <main className="container">
      <section style={heroStyle}>
        <h1>Bienvenido a Rick & Morty App</h1>
        <p>Explora el universo de Rick and Morty: busca y descubre tus personajes favoritos.</p>
        <Link to="/characters" style={buttonStyle}>
          Ver Personajes
        </Link>
      </section>
      <section style={infoStyle}>
        <h2>¿Qué puedes hacer aquí?</h2>
        <ul>
          <li>Ver la lista de personajes de Rick and Morty.</li>
          <li>Buscar por nombre con debounce.</li>
          <li>Ver un loader “skeleton” mientras carga la información.</li>
        </ul>
      </section>
    </main>
  );
}

const heroStyle = {
  textAlign: 'center',
  padding: '4rem 1rem',
  backgroundColor: '#fff',
  borderRadius: '6px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  marginTop: '2rem',
};

const buttonStyle = {
  display: 'inline-block',
  marginTop: '1rem',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#61dafb',
  color: '#282c34',
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
};

const infoStyle = {
  marginTop: '3rem',
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '6px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};
