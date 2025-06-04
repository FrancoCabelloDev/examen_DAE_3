import { categories } from '../data/items.js';
import { ArrowRight, Palette } from 'lucide-react';

export default function CardList() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">
            Explora por Categorías
          </h2>
          <p className="fs-5 text-muted">
            Encuentra la plantilla perfecta para tu próximo proyecto creativo
          </p>
        </div>

        {/* Categories Grid */}
        <div className="row g-4">
          {categories.map((category) => (
            <div key={category.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 card-hover cursor-pointer">
                {/* Image */}
                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="card-img-top h-100 w-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100" 
                       style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)' }}>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-white text-dark fw-semibold">
                      {category.templatesCount}+ plantillas
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-2">
                    <Palette className="text-canva-purple me-2" size={20} />
                    <h5 className="card-title mb-0 text-canva-purple">
                      {category.name}
                    </h5>
                  </div>
                  <p className="card-text text-muted mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <button className="btn btn-outline-primary d-flex align-items-center text-canva-purple border-0 p-0">
                    Ver plantillas
                    <ArrowRight size={16} className="ms-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <div className="gradient-bg rounded p-5 text-white">
            <h3 className="h2 fw-bold mb-3">
              ¿Listo para crear algo increíble?
            </h3>
            <p className="fs-5 mb-4 opacity-75">
              Accede a miles de plantillas profesionales y herramientas de diseño
            </p>
            <button className="btn btn-light btn-lg text-canva-purple fw-semibold">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}