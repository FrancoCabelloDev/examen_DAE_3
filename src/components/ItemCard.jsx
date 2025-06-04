// src/components/ItemCard.jsx
import React, { useState, useEffect } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function ItemCard({ id, title, poster, synopsis }) {
  // Favoritos en localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('fav-items')
    return saved ? JSON.parse(saved) : []
  })
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    setIsFav(favorites.includes(id))
  }, [favorites, id])

  const handleToggleFav = () => {
    let nuevosFavs = []
    if (isFav) {
      nuevosFavs = favorites.filter((favId) => favId !== id)
      toast.info(`✕ "${title}" removido de Favoritos`)
    } else {
      nuevosFavs = [...favorites, id]
      toast.success(`★ "${title}" agregado a Favoritos`)
    }
    setFavorites(nuevosFavs)
    localStorage.setItem('fav-items', JSON.stringify(nuevosFavs))
    setIsFav(!isFav)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      <img
        src={poster}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center justify-between">
          {title}
          <button onClick={handleToggleFav} className="focus:outline-none">
            {isFav ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <FaRegStar className="text-gray-400 hover:text-yellow-400 transition-colors" />
            )}
          </button>
        </h3>
        <p className="text-gray-600 text-sm flex-grow">{synopsis}</p>
      </div>
    </div>
  )
}
