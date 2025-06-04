// components/ItemSearch.jsx
import React from 'react';
import { Search } from 'lucide-react';

const ItemSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group input-group-lg">
            <span className="input-group-text bg-white border-end-0">
              <Search size={20} className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Buscar productos financieros..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSearch;