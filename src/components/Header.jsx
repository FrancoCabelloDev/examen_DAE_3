// src/components/Header.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-cineDark text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-cineYellow">
          Cinéplanet
        </NavLink>

        {/* Menú de navegación */}
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-cineYellow transition-colors ${
                isActive ? 'text-cineYellow' : 'text-white'
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/items"
            className={({ isActive }) =>
              `hover:text-cineYellow transition-colors ${
                isActive ? 'text-cineYellow' : 'text-white'
              }`
            }
          >
            Cartelera
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-cineYellow transition-colors ${
                isActive ? 'text-cineYellow' : 'text-white'
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
