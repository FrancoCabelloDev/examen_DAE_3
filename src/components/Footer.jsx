// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-yapeGray text-gray-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Columna 1: Logo + descripción breve */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Yape Wallet</h3>
          <p className="text-sm">
            La manera más fácil y rápida de gestionar tu dinero, recargar, pagar y enviar a tus
            familiares sin comisiones extras.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Inicio</a></li>
            <li><a href="/items" className="hover:text-yellow-400">Funcionalidades</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: soporte@yape.com</li>
            <li>Teléfono: +51 987 654 321</li>
            <li>Dirección: Av. Principal 123, Lima, Perú</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Yape Wallet. Todos los derechos reservados.
      </div>
    </footer>
  );
}
