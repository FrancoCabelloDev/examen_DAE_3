import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { featuredShots } from '../data/shots.js';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredShots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredShots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredShots.length) % featuredShots.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="position-relative overflow-hidden" style={{backgroundColor: '#fdf2f8'}}>
      <div className="container py-5">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">
              Discover the world's top{' '}
              <span style={{color: '#ea4c89'}}>designers & creatives</span>
            </h1>
            <p className="lead text-muted mb-4">
              Dribbble is the leading destination to find & showcase creative work 
              and home to the world's best design professionals.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/shots" className="btn btn-lg rounded-pill px-4" style={{backgroundColor: '#ea4c89', color: 'white'}}>
                <i className="bi bi-eye me-2"></i>
                Browse Shots
              </Link>
              <button className="btn btn-outline-dark btn-lg rounded-pill px-4">
                <i className="bi bi-person-plus me-2"></i>
                Sign up to post
              </button>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="carousel-container" style={{height: '400px'}}>
                {featuredShots.map((shot, index) => (
                  <div
                    key={shot.id}
                    className={`position-absolute w-100 h-100 transition-opacity ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  >
                    <div className="card border-0 shadow-lg h-100">
                      <img
                        src={shot.image}
                        alt={shot.title}
                        className="card-img-top"
                        style={{height: '250px', objectFit: 'cover'}}
                      />
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-2">
                          <div className="bg-secondary rounded-circle me-2" style={{width: '32px', height: '32px'}}></div>
                          <small className="text-muted fw-medium">{shot.designer}</small>
                        </div>
                        <h6 className="card-title mb-2">{shot.title}</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center text-muted small">
                            <i className="bi bi-heart me-1" style={{color: '#ea4c89'}}></i>
                            {shot.likes.toLocaleString()}
                            <i className="bi bi-eye ms-3 me-1"></i>
                            {shot.views.toLocaleString()}
                          </div>
                          <span className="badge rounded-pill" style={{backgroundColor: '#ea4c89', color: 'white'}}>
                            {shot.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation buttons */}
              <button
                className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y shadow"
                onClick={prevSlide}
                style={{left: '-20px', width: '40px', height: '40px'}}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y shadow"
                onClick={nextSlide}
                style={{right: '-20px', width: '40px', height: '40px'}}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
              
              {/* Indicators */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                <div className="d-flex gap-2">
                  {featuredShots.map((_, index) => (
                    <button
                      key={index}
                      className={`btn p-0 rounded-circle ${
                        index === currentSlide ? 'bg-primary' : 'bg-light'
                      }`}
                      onClick={() => goToSlide(index)}
                      style={{width: '10px', height: '10px'}}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}