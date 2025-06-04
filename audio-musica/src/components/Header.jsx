// src/components/Header.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AudioMúsica</h1>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'px-3 text-blue-300 font-semibold'
                : 'px-3 hover:text-blue-200'
            }
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? 'px-3 text-blue-300 font-semibold'
                : 'px-3 hover:text-blue-200'
            }
          >
            Favoritos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
