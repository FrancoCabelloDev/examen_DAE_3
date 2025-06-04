// src/components/ItemsPage.jsx
import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import FeatureCard from "./FeatureCard.jsx";
import LoadingSkeleton from "./LoadingSkeleton.jsx";
import features from "../data/features.js";

export default function ItemsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allItems, setAllItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAllItems(features);
      setFiltered(features);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSearch = (term) => {
    if (!term) {
      setFiltered(allItems);
    } else {
      const lower = term.toLowerCase();
      setFiltered(
        allItems.filter((item) =>
          item.title.toLowerCase().includes(lower)
        )
      );
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-yapeGray mb-6">
          Todas las Funcionalidades
        </h2>

        <Search onSearch={handleSearch} />

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {filtered.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filtered.map((item) => (
                  <FeatureCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                No se encontró ninguna funcionalidad.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
