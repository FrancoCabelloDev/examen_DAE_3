// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-yapePurple text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Texto */}
        <Link to="/" className="text-2xl font-bold">
          Yape Wallet
        </Link>

        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-yapeYellow font-semibold" : "hover:text-yapeYellow"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive ? "text-yapeYellow font-semibold" : "hover:text-yapeYellow"
              }
            >
              Funcionalidades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yapeYellow font-semibold" : "hover:text-yapeYellow"
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
