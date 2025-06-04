// src/components/CharacterGrid.jsx
import React from 'react'
import CharacterCard from './CharacterCard'

/**
 * @param {Object} props
 * @param {Array} props.characters – arreglo de personajes [{id, name, image, species}, ...]
 */
export default function CharacterGrid({ characters }) {
  return (
    <div className="grid">
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          image={char.image}
          name={char.name}
          species={char.species}
        />
      ))}
    </div>
  )
}
