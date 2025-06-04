// src/components/Header.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-spotifyDark text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-spotifyGreen">
          Spotify
        </NavLink>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-spotifyGreen transition-colors ${
                isActive ? 'text-spotifyGreen' : 'text-white'
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/playlists"
            className={({ isActive }) =>
              `hover:text-spotifyGreen transition-colors ${
                isActive ? 'text-spotifyGreen' : 'text-white'
              }`
            }
          >
            Playlists
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-spotifyGreen transition-colors ${
                isActive ? 'text-spotifyGreen' : 'text-white'
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
