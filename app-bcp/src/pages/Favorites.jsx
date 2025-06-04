// src/pages/Favorites.jsx
import React, { useEffect, useState } from 'react';

const FAVORITES_KEY = 'favoritos_pokemon';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <h3>Pokémon Favoritos</h3>
      {favorites.length === 0 ? (
        <p>No tienes Pokémon en favoritos.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {favorites.map((poke, idx) => (
            <div key={idx} className="col">
              <div className="card bg-dark text-light text-center shadow">
                <img src={poke.sprite} alt={poke.name} className="card-img-top mx-auto p-3" style={{ width: 120 }} />
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{poke.name}</h5>
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

export default Favorites;
