import { useState, useEffect } from 'react';
import { templates } from '../data/items.js';
import ItemCard from './ItemCard.jsx';
import ItemSearch from './ItemSearch.jsx';
import LoadingSkeleton from './LoadingSkeleton.jsx';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga de datos (para demostrar skeleton)
  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(templates);
      setFilteredItems(templates);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Filtrar items basado en la búsqueda
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-3">
            Plantillas de Diseño
          </h1>
          <p className="fs-5 text-muted">
            Descubre miles de plantillas profesionales para todos tus proyectos creativos
          </p>
        </div>

        {/* Search */}
        <ItemSearch 
          onSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        {/* Results Counter */}
        {!isLoading && (
          <div className="container mb-4">
            <p className="text-muted">
              {searchValue ? (
                <>Encontrados <span className="fw-semibold">{filteredItems.length}</span> resultados para "<span className="fw-semibold text-canva-purple">{searchValue}</span>"</>
              ) : (
                <>Mostrando <span className="fw-semibold">{filteredItems.length}</span> plantillas</>
              )}
            </p>
          </div>
        )}

        {/* Content */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {filteredItems.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {filteredItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="display-1 mb-4">🔍</div>
                <h3 className="h4 fw-semibold text-dark mb-3">
                  No se encontraron resultados
                </h3>
                <p className="text-muted mb-4">
                  Intenta con otros términos de búsqueda o explora nuestras categorías
                </p>
                <button 
                  onClick={() => {
                    setSearchValue('');
                    handleSearch('');
                  }}
                  className="btn btn-canva-primary"
                >
                  Ver todas las plantillas
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}