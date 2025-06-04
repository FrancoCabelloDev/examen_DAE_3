// src/components/ItemSearch.jsx
import React, { useState, useEffect } from 'react'

// Hook useDebounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export default function ItemSearch({ onSearch }) {
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input, 300)

  // Cuando cambia debouncedInput, notificamos al padre
  useEffect(() => {
    onSearch(debouncedInput.trim().toLowerCase())
  }, [debouncedInput, onSearch])

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar película..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cineYellow"
      />
    </div>
  )
}
