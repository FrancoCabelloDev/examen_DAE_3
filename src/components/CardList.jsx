// src/components/CardList.jsx
import React from 'react'
import { movies } from '../data/items.js'

export default function CardList() {
  // Mostrar sólo los primeros 6
  const itemsToShow = movies.slice(0, 6)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-cineDark mb-8">Cartelera Destacada</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {itemsToShow.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {movie.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {movie.synopsis}
                </p>
                <button className="mt-4 bg-cineYellow text-cineDark font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
