// src/components/Footer.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-spotifyGray text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <h3 className="text-2xl font-bold text-spotifyGreen mb-2">Spotify</h3>
          <p className="text-sm">
            Explora playlists y álbumes con tus canciones favoritas. ¡Dale play!
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Menú</h4>
          <ul className="space-y-1">
            <li>
              <NavLink to="/" className="hover:text-white transition-colors">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/playlists" className="hover:text-white transition-colors">
                Playlists
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition-colors">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contáctanos</h4>
          <ul className="text-sm space-y-1">
            <li>Email: soporte@spotify-clone.com</li>
            <li>Tel: +51 987 654 321</li>
            <li>Lima, Perú</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Spotify Clone. Todos los derechos reservados.
      </div>
    </footer>
  )
}
