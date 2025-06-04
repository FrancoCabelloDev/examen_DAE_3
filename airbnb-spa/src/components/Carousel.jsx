import { useRef } from 'react';
import { featuredProperties } from '../data/featuredProperties';

export default function Carousel() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="relative">
      {/* Botón izquierdo */}
      <button
        onClick={() => scroll(-300)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md z-20"
      >
        &#10094;
      </button>

      {/* Contenedor scroll */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-4"
      >
        {featuredProperties.map((prop) => (
          <div
            key={prop.id}
            className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={prop.imageUrl}
              alt={prop.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{prop.title}</h3>
              <p className="text-gray-500 text-sm">{prop.location}</p>
              <p className="mt-2 font-bold">{prop.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón derecho */}
      <button
        onClick={() => scroll(300)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md z-20"
      >
        &#10095;
      </button>
    </div>
  );
}
