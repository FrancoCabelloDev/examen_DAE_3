// src/components/ItemList.jsx
import React, { useState, useEffect } from 'react'
import ItemSearch from './ItemSearch.jsx'
import ItemCard from './ItemCard.jsx'
import LoadingSkeleton from './LoadingSkeleton.jsx'
import { movies } from '../data/items.js'

export default function ItemList() {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  // Nuevo estado para mostrar solo "upcoming" o toda la cartelera
  const [showUpcoming, setShowUpcoming] = useState(false)

  useEffect(() => {
    // Simulamos un fetch de 1.5s
    setTimeout(() => {
      setItems(movies)
      // Por defecto, filtramos según showUpcoming (inicial false)
      setFilteredItems(movies.filter((m) => !showUpcoming || m.upcoming))
      setIsLoading(false)
    }, 1500)
  }, [])

  // Cuando cambie showUpcoming, ajustamos filteredItems
  useEffect(() => {
    const baseList = [...items]
    // Si showUpcoming=true, filtramos upcoming===true. Si no, mostramos todos.
    const updated = baseList.filter((m) => (showUpcoming ? m.upcoming : true))
    setFilteredItems(updated)
  }, [showUpcoming, items])

  const handleSearch = (searchTerm) => {
    const baseList = items.filter((movie) => (showUpcoming ? movie.upcoming : true))

    if (!searchTerm) {
      setFilteredItems(baseList)
    } else {
      const filtrado = baseList.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      )
      setFilteredItems(filtrado)
    }
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-cineDark mb-6">
          {showUpcoming ? 'Próximos Estrenos' : 'Cartelera Completa'}
        </h2>

        {/* Nuevo toggle para alternar entre Cartelera y Próximos estrenos */}
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setShowUpcoming(false)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              !showUpcoming
                ? 'bg-cineYellow text-cineDark'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cartelera
          </button>
          <button
            onClick={() => setShowUpcoming(true)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              showUpcoming
                ? 'bg-cineYellow text-cineDark'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Próximos Estrenos
          </button>
        </div>

        <ItemSearch onSearch={handleSearch} />

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {filteredItems.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredItems.map((movie) => (
                  <ItemCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster}
                    synopsis={movie.synopsis}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                No se encontró ninguna película.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
