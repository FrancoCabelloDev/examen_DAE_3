import { useState, useEffect } from 'react';
import { notifyLikeAdded, notifyLikeRemoved } from '../utils/notifyLike.js';

export default function ShotCard({ shot }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(shot?.likes || 0);

  useEffect(() => {
    if (shot) {
      const likedShots = JSON.parse(localStorage.getItem('likedShots') || '[]');
      setIsLiked(likedShots.includes(shot.id));
      setLikeCount(shot.likes);
    }
  }, [shot]);

  const toggleLike = () => {
    if (!shot) return;
    
    const likedShots = JSON.parse(localStorage.getItem('likedShots') || '[]');
    
    if (isLiked) {
      const updatedLikes = likedShots.filter(id => id !== shot.id);
      localStorage.setItem('likedShots', JSON.stringify(updatedLikes));
      setIsLiked(false);
      setLikeCount(prev => prev - 1);
      notifyLikeRemoved();
    } else {
      const updatedLikes = [...likedShots, shot.id];
      localStorage.setItem('likedShots', JSON.stringify(updatedLikes));
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
      notifyLikeAdded();
    }
  };

  // Safety check
  if (!shot) {
    return (
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body p-3">
          <p>Loading shot...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col">
      <div className="card border-0 shadow-sm h-100 shot-card">
        <div className="position-relative overflow-hidden">
          <img
            src={shot.image}
            alt={shot.title}
            className="card-img-top shot-image"
            style={{height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease'}}
          />
          
          {/* Overlay on hover */}
          <div className="shot-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
            <div className="d-flex gap-2">
              <button 
                className={`btn rounded-circle ${isLiked ? 'btn-danger' : 'btn-light'}`}
                onClick={toggleLike}
                style={{width: '40px', height: '40px'}}
              >
                <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
              </button>
              <button className="btn btn-light rounded-circle" style={{width: '40px', height: '40px'}}>
                <i className="bi bi-eye"></i>
              </button>
              <button className="btn btn-light rounded-circle" style={{width: '40px', height: '40px'}}>
                <i className="bi bi-bookmark"></i>
              </button>
            </div>
          </div>

          {/* Pro badge */}
          {shot.isPro && (
            <span className="position-absolute top-0 start-0 m-2 badge rounded-pill" style={{backgroundColor: '#ea4c89', color: 'white'}}>
              <i className="bi bi-star-fill me-1"></i>
              Pro
            </span>
          )}
        </div>

        <div className="card-body p-3">
          <h6 className="card-title mb-2 fw-semibold">{shot.title}</h6>
          
          {/* Designer info */}
          <div className="d-flex align-items-center mb-3">
            <img
              src={shot.designerAvatar}
              alt={shot.designer}
              className="rounded-circle me-2"
              style={{width: '24px', height: '24px', objectFit: 'cover'}}
            />
            <small className="text-muted fw-medium">{shot.designer}</small>
            <small className="text-muted ms-auto">{shot.timeAgo}</small>
          </div>

          {/* Stats */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center text-muted small">
              <button 
                className="btn btn-link p-0 text-decoration-none d-flex align-items-center"
                onClick={toggleLike}
                style={{color: isLiked ? '#ea4c89' : '#6c757d'}}
              >
                <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'} me-1`}></i>
                {likeCount.toLocaleString()}
              </button>
              <div className="d-flex align-items-center ms-3">
                <i className="bi bi-eye me-1"></i>
                {shot.views.toLocaleString()}
              </div>
            </div>
            <span className="badge bg-light text-dark rounded-pill">{shot.category}</span>
          </div>

          {/* Tags */}
          <div className="mt-2">
            {shot.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="badge bg-light text-muted me-1 small">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .shot-card:hover .shot-image {
          transform: scale(1.05);
        }
        .shot-card:hover .shot-overlay {
          opacity: 1 !important;
          background: rgba(0, 0, 0, 0.4);
          transition: opacity 0.3s ease;
        }
        .btn-link:hover {
          text-decoration: none !important;
        }
      `}</style>
    </div>
  );
}