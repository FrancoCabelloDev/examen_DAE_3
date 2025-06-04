// src/components/Search.jsx
import React, { useState, useEffect } from 'react'

// Hook useDebounce
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debounced
}

export default function Search({ onSearch }) {
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input, 300)

  useEffect(() => {
    onSearch(debouncedInput.trim().toLowerCase())
  }, [debouncedInput, onSearch])

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar playlist o álbum..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-spotifyGreen"
      />
    </div>
  )
}
