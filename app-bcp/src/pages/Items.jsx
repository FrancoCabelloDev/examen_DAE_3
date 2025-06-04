// pages/Items.jsx
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { productosFinancieros } from '../data/movies';
import { useDebounce } from '../hooks/useDebounce';
import ItemSearch from '../components/ItemSearch';
import ItemCard from '../components/ItemCard';

const Items = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('fav-items') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const filteredProducts = productosFinancieros.filter(product =>
    product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const toggleFavorite = (productId) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    
    setFavorites(updatedFavorites);
    localStorage.setItem('fav-items', JSON.stringify(updatedFavorites));
    
    const product = productosFinancieros.find(p => p.id === productId);
    if (favorites.includes(productId)) {
      toast.info(`${product.name} removido de favoritos`);
    } else {
      toast.success(`${product.name} agregado a favoritos`);
    }
  };

  return (
    <div className="bg-light py-5 min-vh-100">
      <div className="container px-2 px-md-4">
        <h1 className="display-4 fw-bold text-center mb-5 text-dark">
          Productos Financieros
        </h1>
        
        <div className="mb-4">
          <ItemSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredProducts.map(product => (
            <ItemCard
              key={product.id}
              product={product}
              onToggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(product.id)}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted fs-5">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;