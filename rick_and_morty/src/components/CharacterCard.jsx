// src/components/CharacterCard.jsx
import React from 'react'

/**
 * @param {Object} props
 * @param {string} props.image – URL de la imagen del personaje
 * @param {string} props.name – nombre del personaje
 * @param {string} props.species – especie del personaje
 */
export default function CharacterCard({ image, name, species }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{species}</p>
      </div>
    </div>
  )
}
