import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { heroSlides } from '../data/items.js';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section position-relative">
      {/* Carousel Container */}
      <div className="position-relative w-100 h-100">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? '' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0
            }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}

        {/* Content */}
        <div className="hero-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <h1 className="display-1 fw-bold mb-4">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="fs-4 mb-5 opacity-75">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Link 
                    to="/items" 
                    className="btn btn-canva-primary btn-lg d-flex align-items-center justify-content-center gap-2"
                  >
                    <Play size={20} />
                    {heroSlides[currentSlide].ctaText}
                  </Link>
                  <Link 
                    to="/contact" 
                    className="btn btn-outline-light btn-lg"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="btn btn-outline-light position-absolute top-50 start-0 translate-middle-y ms-3"
          style={{ zIndex: 20 }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-outline-light position-absolute top-50 end-0 translate-middle-y me-3"
          style={{ zIndex: 20 }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ zIndex: 20 }}>
          <div className="d-flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`btn rounded-circle ${
                  index === currentSlide ? 'btn-light' : 'btn-outline-light'
                }`}
                style={{ width: '12px', height: '12px', padding: 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}