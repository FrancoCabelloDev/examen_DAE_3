// src/components/HeroSlider.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://www.datocms-assets.com/56886/1739894332-banner-mobile-landing-yape-tienda-verano.jpg",
    title: "¡Bievenido a YapeGaaa",
    subtitle: "Envía dinero y recibe un 5% de bono en recargas con Yape.",
  },
  {
    id: 2,
    image:
      "https://www.papajohns.com.pe/media/wysiwyg/papajohns/verano/YapeJohns_Banner-Web-Mobile_720x724.webp",
    title: "Promoción de Pizzas",
    subtitle: "Compra las mejores Pizzas al mejor precio",
  },
];

export default function HeroSlider() {
  // Índice actual de la diapositiva
  const [current, setCurrent] = useState(0);

  // Función para ir a la diapositiva anterior
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Función para ir a la siguiente diapositiva
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // useEffect para auto‐avanzar cada 5 segundos (5000 ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    // Limpiar el intervalo al desmontar
    return () => clearInterval(intervalId);
  }, []); // El arreglo vacío [] asegura que esto solo se configure una vez

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Mapeamos todas las diapositivas, pero solo la activa tendrá opacity-100 */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Botón “anterior” */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition"
        aria-label="Anterior"
      >
        ‹
      </button>

      {/* Botón “siguiente” */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition"
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}
