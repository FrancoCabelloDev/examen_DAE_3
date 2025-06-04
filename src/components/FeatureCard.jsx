// src/components/FeatureCard.jsx
import React from "react";

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
      <img src={icon} alt={title} className="w-20 h-20 mb-4" />
      <h3 className="text-xl font-semibold text-yapePurple mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
