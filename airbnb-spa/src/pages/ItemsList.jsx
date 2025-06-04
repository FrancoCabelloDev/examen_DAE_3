import { featuredProperties } from '../data/featuredProperties';

export default function ItemsList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Listado de Ítems</h2>
      <p className="text-gray-600 mb-4">
        Aquí irán los resultados de la búsqueda. Por ahora, mostramos todas las propiedades destacadas:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProperties.map((prop) => (
          <div
            key={prop.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
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
    </div>
  );
}
