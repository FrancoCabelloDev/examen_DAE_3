import React from 'react';
import { PiggyBank, CreditCard, Calculator, Phone, Star, Heart } from 'lucide-react';

const CardList = () => {
  const cards = [
    {
      id: 1,
      title: "Cuentas de Ahorro",
      description: "Haz crecer tu dinero con nuestras cuentas de ahorro competitivas",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
      icon: <PiggyBank size={32} />
    },
    {
      id: 2,
      title: "Tarjetas de Crédito",
      description: "Accede a crédito flexible con beneficios exclusivos",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      icon: <CreditCard size={32} />
    },
    {
      id: 3,
      title: "Préstamos Personales",
      description: "Financia tus proyectos con tasas preferenciales",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
      icon: <Calculator size={32} />
    },
    {
      id: 4,
      title: "Banca Digital",
      description: "Maneja tus finanzas desde cualquier lugar",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      icon: <Phone size={32} />
    },
    {
      id: 5,
      title: "Inversiones",
      description: "Haz que tu dinero trabaje para ti con nuestros fondos",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      icon: <Star size={32} />
    },
    {
      id: 6,
      title: "Seguros",
      description: "Protege lo que más quieres con nuestros seguros",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      icon: <Heart size={32} />
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5 text-dark">
          Nuestros Servicios
        </h2>
        <div className="row g-4">
          {cards.map(card => (
            <div key={card.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm product-card border-0">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="card-img-top"
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-primary me-3">
                      {card.icon}
                    </div>
                    <h3 className="card-title h5 mb-0 fw-semibold">{card.title}</h3>
                  </div>
                  <p className="card-text text-muted mb-4">{card.description}</p>
                  <button className="btn btn-primary">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;