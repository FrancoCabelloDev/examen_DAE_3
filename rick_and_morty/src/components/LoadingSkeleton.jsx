// src/components/LoadingSkeleton.jsx
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

/**
 * Muestra N “cards” de esqueleto para simular la carga del grid.
 * @param {Object} props
 * @param {number} props.count – cuántas tarjetas skeleton mostrar
 */
export default function LoadingSkeleton({ count = 8 }) {
  // Usamos la clase .skeleton-container para la grid de esqueletos
  const skeletons = Array.from({ length: count })
  return (
    <div className="skeleton-container">
      {skeletons.map((_, idx) => (
        <div className="card" key={idx}>
          {/* Imagen simulada */}
          <Skeleton height={200} />
          <div className="card-content">
            <Skeleton height={20} style={{ marginBottom: '0.5rem' }} />
            <Skeleton height={16} width="60%" />
          </div>
        </div>
      ))}
    </div>
  )
}
