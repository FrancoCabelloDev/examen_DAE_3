// src/components/MenuGrid.jsx

import React from 'react';
import { dishes } from '../data/dishes';

export default function MenuGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Platos Populares
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="text-red-600 font-bold">${dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
