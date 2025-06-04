// src/components/Header.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Central Maido</h1>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-red-600 font-semibold'
                : 'text-gray-700 hover:text-red-600'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? 'text-red-600 font-semibold'
                : 'text-gray-700 hover:text-red-600'
            }
          >
            Menú
          </NavLink>
          <NavLink
            to="/reservar"
            className={({ isActive }) =>
              isActive
                ? 'text-red-600 font-semibold'
                : 'text-gray-700 hover:text-red-600'
            }
          >
            Reservar
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
