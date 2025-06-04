// src/components/FeaturedGrid.jsx
import React from 'react'
import { playlists } from '../data/playlists.js'
import PlaylistCard from './PlaylistCard.jsx'

// Mostrar solo los primeros 4
const featured = playlists.slice(0, 4)

export default function FeaturedGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-spotifyDark mb-6">
          Para ti
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {featured.map((item) => (
            <PlaylistCard
              key={item.id}
              id={item.id}
              title={item.title}
              cover={item.cover}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
