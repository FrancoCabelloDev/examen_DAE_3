// src/pages/Home.jsx

import React, { useState } from 'react';
import { instruments } from '../data/instruments';
import SearchBar from '../components/SearchBar';
import InstrumentCard from '../components/InstrumentCard';

export default function Home() {
  // 1. Estado con la lista filtrada (inicialmente, todos)
  const [filtered, setFiltered] = useState(instruments);

  // 2. Función que recibe la query, filtra por nombre
  const handleSearch = (query) => {
    if (!query) {
      // Si la búsqueda está vacía, mostraremos todos
      setFiltered(instruments);
    } else {
      const resultados = instruments.filter((inst) =>
        inst.name.toLowerCase().includes(query)
      );
      setFiltered(resultados);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 3. Buscador */}
      <h2 className="text-2xl font-semibold mb-4">Catálogo de Instrumentos</h2>
      <SearchBar onSearch={handleSearch} />

      {/* 4. Grid de instrumentos filtrados */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((inst) => (
            <InstrumentCard key={inst.id} instrument={inst} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-8">No se encontraron instrumentos.</p>
      )}
    </div>
  );
}
