// src/components/PlaylistList.jsx
import React, { useState, useEffect } from 'react'
import { playlists } from '../data/playlists.js'
import Search from './Search.jsx'
import PlaylistCard from './PlaylistCard.jsx'
import LoadingSkeleton from './LoadingSkeleton.jsx'

export default function PlaylistList() {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    // Simula fetch en 1.5 s
    setTimeout(() => {
      setItems(playlists)
      setFilteredItems(playlists)
      setIsLoading(false)
    }, 1500)
  }, [])

  const handleSearch = (term) => {
    if (!term) {
      setFilteredItems(items)
    } else {
      const result = items.filter((pl) =>
        pl.title.toLowerCase().includes(term)
      )
      setFilteredItems(result)
    }
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-spotifyDark mb-6">
          Playlists y Álbumes
        </h2>
        <Search onSearch={handleSearch} />

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {filteredItems.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredItems.map((pl) => (
                  <PlaylistCard
                    key={pl.id}
                    id={pl.id}
                    title={pl.title}
                    cover={pl.cover}
                    description={pl.description}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                No se encontró ninguna playlist.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
