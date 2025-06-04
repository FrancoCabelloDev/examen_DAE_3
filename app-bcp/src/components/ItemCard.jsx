// components/ItemCard.jsx
import React from 'react';

const ItemCard = ({ product, onToggleFavorite, isFavorite }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'ahorro': return 'bg-success text-white';
      case 'tarjeta': return 'bg-primary text-white';
      case 'prestamo': return 'bg-warning text-dark';
      default: return 'bg-secondary text-white';
    }
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm product-card border-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="card-img-top"
          style={{height: '200px', objectFit: 'cover'}}
        />
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className={`badge ${getTypeColor(product.type)} px-3 py-2`}>
              {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
            </span>
            <button
              onClick={() => onToggleFavorite(product.id)}
              className={`btn btn-link p-0 star-favorite ${isFavorite ? 'active' : ''}`}
              style={{border: 'none'}}
            >
              ★
            </button>
          </div>
          
          <h3 className="card-title h5 fw-semibold mb-2">{product.name}</h3>
          <p className="card-text text-muted mb-3">{product.shortDescription}</p>
          <p className="fs-5 fw-bold text-primary mb-4">{product.price}</p>
          
          <div className="border-top pt-3">
            <p className="small text-muted mb-2">Tasa: {product.tasa}</p>
            <ul className="list-unstyled small text-muted">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="d-flex align-items-center mb-1">
                  <span className="bg-primary rounded-circle me-2" style={{width: '8px', height: '8px'}}></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;