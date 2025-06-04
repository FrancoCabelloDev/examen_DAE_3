// src/components/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1535400875775-0269e7a919af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Capa semitransparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a Central Maido</h1>
        <p className="text-xl mb-6">
          Saborea los mejores platos peruanos en un ambiente único
        </p>
        <Link
          to="/menu"
          className="px-6 py-3 bg-red-600 rounded-full text-lg font-semibold hover:bg-red-700 transition"
        >
          Ver Menú
        </Link>
      </div>
    </div>
  );
}
