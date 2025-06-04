// src/components/PlaylistCard.jsx
import React from 'react'

export default function PlaylistCard({ id, title, cover, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={cover} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <button className="mt-auto bg-spotifyGreen text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
          Escuchar ahora
        </button>
      </div>
    </div>
  )
}
