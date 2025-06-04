// src/components/CharactersPage.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CharacterGrid from './CharacterGrid';
import LoadingSkeleton from './LoadingSkeleton';
import { useDebounce } from '../hooks/useDebounce';

export default function CharactersPage() {
  // Estado para todos los personajes
  const [allChars, setAllChars] = useState([]);
  // Estado para el texto del input
  const [searchInput, setSearchInput] = useState('');
  // Valor debounced
  const debouncedSearch = useDebounce(searchInput, 300);
  // Loader y error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch inicial de personajes
  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        if (!res.ok) throw new Error('Error al obtener datos');
        const data = await res.json();
        setAllChars(data.results);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los personajes.');
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  // Filtrar personajes usando texto debounced
  const filteredChars = allChars.filter((char) =>
    char.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <main className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Lista de Personajes
      </h2>

      {/* SearchBar */}
      <SearchBar value={searchInput} onChange={setSearchInput} />

      {loading ? (
        <LoadingSkeleton count={8} />
      ) : error ? (
        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
      ) : (
        <CharacterGrid characters={filteredChars} />
      )}
    </main>
  );
}
