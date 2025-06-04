import { popularDestinations } from '../data/popularDestinations';

export default function DestinationGrid() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularDestinations.map((dest) => (
          <div
            key={dest.id}
            className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition"
          >
            <img
              src={dest.imageUrl}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-3 py-2">
              <h3 className="text-white font-semibold">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
