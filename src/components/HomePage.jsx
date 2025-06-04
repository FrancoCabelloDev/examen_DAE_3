// src/components/HomePage.jsx
import React from 'react'
import HeroSlider from './HeroSlider.jsx'
import FeaturedGrid from './FeaturedGrid.jsx' //Opcional: mini‐grid con 4 playlists destacadas

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      {/* Si quieres, puedes mostrar una mini‐grid de playlists destacadas aquí */}
      <FeaturedGrid />
    </>
  )
}
