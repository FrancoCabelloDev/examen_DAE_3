import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce.js';

export default function ItemSearch({ onSearch, searchValue, setSearchValue }) {
  const [inputValue, setInputValue] = useState(searchValue || '');
  const debouncedSearchTerm = useDebounce(inputValue, 300);

  // Effect para ejecutar la búsqueda cuando cambie el valor con debounce
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchValue(value);
  };

  const clearSearch = () => {
    setInputValue('');
    setSearchValue('');
    onSearch('');
  };

  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="position-relative">
            <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
              <Search className="text-muted" size={20} />
            </div>
            
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Buscar plantillas por nombre o categoría..."
              className="form-control form-control-lg ps-5 pe-5 border-2 shadow-sm"
              style={{ 
                borderColor: '#dee2e6',
                borderRadius: '12px',
                fontSize: '1.1rem'
              }}
            />
            
            {inputValue && (
              <button
                onClick={clearSearch}
                className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-1"
                style={{ border: 'none', background: 'none' }}
              >
                <X size={20} className="text-muted" />
              </button>
            )}
          </div>
          
          {inputValue && (
            <div className="mt-2 text-muted small">
              Buscando: "<span className="fw-semibold text-canva-purple">{inputValue}</span>"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}