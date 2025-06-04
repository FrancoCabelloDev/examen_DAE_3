// src/components/SearchBar.jsx
import React from 'react'

/**
 * @param {Object} props
 * @param {string} props.value – valor actual del input
 * @param {function} props.onChange – handler para actualizaciones
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar personaje por nombre..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
