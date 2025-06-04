// src/components/Footer.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-cineDark text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Logo y descripción */}
        <div>
          <h3 className="text-2xl font-bold text-cineYellow mb-2">Cinéplanet</h3>
          <p className="text-sm">
            La mejor experiencia de cine en tu ciudad. Estrenos, favoritos y
            toda la cartelera al alcance de un clic.
          </p>
        </div>

        {/* Columna 2: Enlaces de navegación */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Menú</h4>
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className="hover:text-white transition-colors"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className="hover:text-white transition-colors"
              >
                Cartelera
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Columna 3: Información de contacto */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contáctanos</h4>
          <ul className="text-sm space-y-1">
            <li>Soporte: soporte@cineplanet.com</li>
            <li>Teléfono: +51 123 456 789</li>
            <li>Dirección: Av. del Cine 123, Lima, Perú</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Cinéplanet. Todos los derechos reservados.
      </div>
    </footer>
  )
}
