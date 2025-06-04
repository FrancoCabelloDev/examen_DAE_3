// src/components/LoadingSkeleton.jsx
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function LoadingSkeleton() {
  const placeholders = Array.from({ length: 8 })
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {placeholders.map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Skeleton height={192} /> {/* Imagen (h-48) */}
              <div className="p-4">
                <Skeleton count={2} /> {/* Título y descripción */}
                <div className="mt-4">
                  <Skeleton width={100} height={32} /> {/* Botón */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
