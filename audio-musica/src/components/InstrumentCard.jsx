// src/components/InstrumentCard.jsx

import React from 'react';
import { useFavorites } from './FavoritesContext';
import { toast } from 'react-toastify';

export default function InstrumentCard({ instrument }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(instrument.id);

  const handleFavoriteClick = () => {
    toggleFavorite(instrument.id);

    if (isFav) {
      toast.info(`Eliminado de favoritos: ${instrument.name}`);
    } else {
      toast.success(`Agregado a favoritos: ${instrument.name}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={instrument.imageUrl}
        alt={instrument.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-lg font-semibold">{instrument.name}</h3>
          <p className="text-gray-600 mt-1">${instrument.price}</p>
        </div>
        <button
          onClick={handleFavoriteClick}
          className={`mt-4 w-full py-2 rounded-md font-semibold transition ${
            isFav
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isFav ? '♥ Favorito' : '♡ Marcar Favorito'}
        </button>
      </div>
    </div>
  );
}
