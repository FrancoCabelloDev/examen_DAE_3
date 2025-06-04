import { useState, useMemo } from 'react';
import { allShots, categories } from '../data/shots.js';
import ShotCard from './ShotCard.jsx';
import ShotSearch from './ShotSearch.jsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Shots() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredShots = useMemo(() => {
    let filtered = allShots;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(shot => shot.category === selectedCategory);
    }

    // Filter by search
    if (searchValue.trim()) {
      const search = searchValue.toLowerCase();
      filtered = filtered.filter(shot =>
        shot.title.toLowerCase().includes(search) ||
        shot.designer.toLowerCase().includes(search) ||
        shot.category.toLowerCase().includes(search) ||
        shot.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    return filtered;
  }, [selectedCategory, searchValue]);

  const handleSearch = (value) => {
    setIsLoading(true);
    setTimeout(() => {
      setSearchValue(value);
      setIsLoading(false);
    }, 300);
  };

  const categoryOptions = ['All', ...categories.map(cat => cat.name)];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold mb-3">
            Discover the world's top <span style={{color: '#ea4c89'}}>design work</span>
          </h1>
          <p className="lead text-muted">
            Millions of designers and agencies around the world showcase their portfolio work on Dribbble
          </p>
        </div>
      </div>

      {/* Search */}
      <ShotSearch 
        onSearch={handleSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {/* Category filters */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categoryOptions.map((category) => (
              <button
                key={category}
                className={`btn rounded-pill ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'btn-outline-secondary'
                }`}
                style={selectedCategory === category ? {backgroundColor: '#ea4c89', borderColor: '#ea4c89'} : {}}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {category !== 'All' && (
                  <span className="ms-2 small">
                    ({categories.find(cat => cat.name === category)?.count.toLocaleString() || 0})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <p className="text-muted mb-0">
              {isLoading ? (
                <Skeleton width={200} />
              ) : (
                `${filteredShots.length.toLocaleString()} shots found`
              )}
              {searchValue && (
                <span> for "<strong>{searchValue}</strong>"</span>
              )}
            </p>
            <div className="d-flex align-items-center">
              <label className="form-label me-2 mb-0 small text-muted">Sort by:</label>
              <select className="form-select form-select-sm" style={{width: 'auto'}}>
                <option>Most Popular</option>
                <option>Most Recent</option>
                <option>Most Liked</option>
                <option>Most Viewed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Shots grid */}
      <div className="row g-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-3">
              <div className="card border-0 shadow-sm h-100">
                <Skeleton height={200} />
                <div className="card-body p-3">
                  <Skeleton height={20} className="mb-2" />
                  <div className="d-flex align-items-center mb-3">
                    <Skeleton circle width={24} height={24} className="me-2" />
                    <Skeleton width={100} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <Skeleton width={60} />
                    <Skeleton width={80} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : filteredShots.length > 0 ? (
          filteredShots.map((shot) => (
            <div key={shot.id} className="col-md-6 col-lg-4 col-xl-3">
              <ShotCard shot={shot} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="text-center py-5">
              <i className="bi bi-search display-1 text-muted mb-3"></i>
              <h3 className="text-muted">No shots found</h3>
              <p className="text-muted">
                Try adjusting your search or browse different categories
              </p>
              <button 
                className="btn rounded-pill" 
                style={{backgroundColor: '#ea4c89', color: 'white'}}
                onClick={() => {
                  setSearchValue('');
                  setSelectedCategory('All');
                }}
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Load more */}
      {filteredShots.length > 0 && !isLoading && (
        <div className="row mt-5">
          <div className="col-12 text-center">
            <button className="btn btn-outline-dark btn-lg rounded-pill px-5">
              <i className="bi bi-arrow-down-circle me-2"></i>
              Load more shots
            </button>
          </div>
        </div>
      )}
    </div>
  );
}