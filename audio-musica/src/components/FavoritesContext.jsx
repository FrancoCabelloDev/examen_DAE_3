// src/components/FavoritesContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. Crear el contexto
const FavoritesContext = createContext();

// 2. Proveedor del contexto
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Al montar, leemos de localStorage
  useEffect(() => {
    const stored = localStorage.getItem('audioFavs');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Cada vez que favorites cambie, guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('audioFavs', JSON.stringify(favorites));
  }, [favorites]);

  // Función para agregar/quitar un favorito
  const toggleFavorite = (instrumentId) => {
    setFavorites((prev) => {
      if (prev.includes(instrumentId)) {
        // Si ya está, lo removemos
        return prev.filter((id) => id !== instrumentId);
      } else {
        // Si no está, lo agregamos
        return [...prev, instrumentId];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 3. Hook para usar el contexto
export function useFavorites() {
  return useContext(FavoritesContext);
}
