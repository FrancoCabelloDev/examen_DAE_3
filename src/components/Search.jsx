// src/components/Search.jsx
import React, { useState, useEffect } from "react";

// Hook para debounce de 300 ms
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounced;
}

export default function Search({ onSearch }) {
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce(term, 300);

  useEffect(() => {
    onSearch(debouncedTerm.trim().toLowerCase());
  }, [debouncedTerm, onSearch]);

  return (
    <div className="mb-6">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Buscar funcionalidad..."
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-yapePurple"
      />
    </div>
  );
}
