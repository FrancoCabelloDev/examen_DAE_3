// src/pages/Favorites.jsx

import React from 'react';
import { instruments } from '../data/instruments';
import { useFavorites } from '../components/FavoritesContext';
import InstrumentCard from '../components/InstrumentCard';

export default function Favorites() {
  // Obtengo la lista de IDs de favoritos desde el contexto
  const { favorites } = useFavorites();

  // Filtrar los instrumentos cuyos IDs estén en el array "favorites"
  const favInstruments = instruments.filter((inst) =>
    favorites.includes(inst.id)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Tus Favoritos</h2>

      {favInstruments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favInstruments.map((inst) => (
            <InstrumentCard key={inst.id} instrument={inst} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          No tienes ningún instrumento marcado como favorito. <br />
          Vuelve al <span className="font-medium">Catálogo</span> para agregar alguno.
        </p>
      )}
    </div>
  );
}
