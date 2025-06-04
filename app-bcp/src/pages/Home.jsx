import React, { useEffect, useState } from 'react';

const FAVORITES_KEY = 'favoritos_pokemon';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    setFavorites(favs);
  }, []);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: details.name,
            sprite: details.sprites.front_default,
            types: details.types.map(t => t.type.name),
          };
        });

        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener Pokémon:', error);
      }
    };

    getPokemons();
  }, []);

  const toggleFavorite = (poke) => {
    let newFavs;
    if (favorites.some(f => f.name === poke.name)) {
      newFavs = favorites.filter(f => f.name !== poke.name);
    } else {
      newFavs = [...favorites, poke];
    }
    setFavorites(newFavs);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavs));
  };

  const isFavorite = (poke) => favorites.some(f => f.name === poke.name);

  return (
    <div>
      <h3 className="mb-4">Pokémon Iniciales</h3>
      {loading ? (
        <p>Cargando Pokémon...</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {pokemons.map((poke, idx) => (
            <div key={idx} className="col">
              <div className="card bg-dark text-light text-center shadow">
                <img src={poke.sprite} alt={poke.name} className="card-img-top mx-auto p-3" style={{ width: 120 }} />
                <div className="card-body">
                  <h5 className="card-title text-capitalize d-flex justify-content-center align-items-center gap-2">
                    {poke.name}
                    <span
                      className={`star-favorite${isFavorite(poke) ? ' active' : ''}`}
                      title={isFavorite(poke) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                      onClick={() => toggleFavorite(poke)}
                      style={{ userSelect: 'none' }}
                      role="button"
                    >
                      ★
                    </span>
                  </h5>
                  <p className="card-text">
                    {poke.types.map((type, i) => (
                      <span key={i} className="badge bg-secondary me-1 text-capitalize">
                        {type}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
