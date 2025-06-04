// src/components/HomePage.jsx
import React from "react";
import HeroSlider from "./HeroSlider.jsx";
import CardList from "./CardList.jsx";
import features from "../data/features.js";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HeroSlider con promociones */}
      <HeroSlider />

      {/* 2. “¿Qué puedes hacer con Yape?” → CardList que muestre las 6 funcionalidades */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yapeGray mb-8">
            ¿Qué puedes hacer con Yape?
          </h2>
          <CardList items={features} />
        </div>
      </section>
    </div>
  );
}
