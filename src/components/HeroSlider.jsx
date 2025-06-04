// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react'
import { playlists } from '../data/playlists.js'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  // Mover al siguiente cada 5s automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % playlists.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + playlists.length) % playlists.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % playlists.length)
  }

  return (
    <section className="relative h-screen bg-black">
      {/* Imagen de fondo del slide actual */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${playlists[current].cover})`,
        }}
      />
      {/* Capa semitransparente */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {playlists[current].title}
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mb-6">
          {playlists[current].description}
        </p>
        <button className="bg-spotifyGreen text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
          Escuchar ahora
        </button>
      </div>
      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  )
}
