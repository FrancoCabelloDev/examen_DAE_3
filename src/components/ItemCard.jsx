import { useState, useEffect } from 'react';
import { Heart, Eye, Crown } from 'lucide-react';
import { notifyFavoriteAdded, notifyFavoriteRemoved } from '../utils/notifyFavorite.js';

export default function ItemCard({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Cargar favoritos del localStorage al montar el componente
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('fav-items') || '[]');
    setIsFavorite(favorites.some(fav => fav.id === item.id));
  }, [item.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('fav-items') || '[]');
    
    if (isFavorite) {
      // Remover de favoritos
      const updatedFavorites = favorites.filter(fav => fav.id !== item.id);
      localStorage.setItem('fav-items', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      notifyFavoriteRemoved(item.name);
    } else {
      // Agregar a favoritos
      const updatedFavorites = [...favorites, item];
      localStorage.setItem('fav-items', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      notifyFavoriteAdded(item.name);
    }
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0 card-hover">
        {/* Image Container */}
        <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
          <img
            src={item.image}
            alt={item.name}
            className="card-img-top h-100 w-100 object-fit-cover"
          />
          
          {/* Overlay on hover */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 hover-overlay"
               style={{ 
                 background: 'rgba(0,0,0,0.6)',
                 transition: 'opacity 0.3s ease'
               }}>
            <button className="btn btn-light d-flex align-items-center gap-2">
              <Eye size={16} />
              Ver Plantilla
            </button>
          </div>

          {/* Price Badge */}
          <div className="position-absolute top-0 start-0 m-3">
            <span className={`badge d-flex align-items-center gap-1 ${
              item.price === 'Pro' 
                ? 'bg-warning text-dark' 
                : 'bg-success'
            }`}>
              {item.price === 'Pro' && <Crown size={12} />}
              {item.price}
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className={`btn position-absolute top-0 end-0 m-3 rounded-circle ${
              isFavorite 
                ? 'btn-danger text-white' 
                : 'btn-light text-muted'
            }`}
            style={{ width: '40px', height: '40px' }}
          >
            <Heart 
              size={16} 
              className={isFavorite ? 'fill-current' : ''} 
            />
          </button>
        </div>

        {/* Content */}
        <div className="card-body p-3">
          <div className="d-flex align-items-start justify-content-between mb-2">
            <h6 className="card-title mb-0 line-clamp-1">
              {item.name}
            </h6>
          </div>
          
          <p className="small text-canva-purple fw-medium mb-2">
            {item.category}
          </p>
          
          <p className="card-text text-muted small line-clamp-2 mb-3">
            {item.shortDescription}
          </p>

          <button className="btn btn-outline-secondary w-100 btn-sm">
            Usar Plantilla
          </button>
        </div>
      </div>
    </div>
  );
}