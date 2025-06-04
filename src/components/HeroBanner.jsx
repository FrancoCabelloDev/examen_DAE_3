// src/components/HeroBanner.jsx
import React from 'react'

export default function HeroBanner() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-sans">
          Bienvenido a Cinéplanet
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Explora nuestra cartelera y marca tus películas favoritas
        </p>
        <div className="space-x-4">
          <a
            href="/items"
            className="bg-cineYellow text-cineDark font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Ver Cartelera
          </a>
          <a
            href="/contact"
            className="border border-cineYellow text-cineYellow font-semibold px-6 py-3 rounded-md hover:bg-cineYellow hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
