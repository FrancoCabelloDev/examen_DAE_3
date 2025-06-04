// src/components/CardList.jsx
import React from "react";
import FeatureCard from "./FeatureCard.jsx";

export default function CardList({ items }) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {items.map((item) => (
        <FeatureCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
