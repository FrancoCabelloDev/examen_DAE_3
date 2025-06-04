import { useState } from 'react';

export default function Hero() {
  const [city, setCity] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Por ahora solo hacemos console.log; en un caso real redirigiríamos a /items?city=...&...
    console.log({ city, checkIn, checkOut, guests });
    alert(`Buscando: ${city}, desde ${checkIn} hasta ${checkOut}, ${guests} huésped(es).`);
  };

  return (
    <div
      className="relative h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501117716987-c8e38c69063a?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white bg-opacity-90 rounded-lg p-6 w-11/12 max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Ciudad */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ciudad
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ej: Lima"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Huéspedes */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Huéspedes
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
