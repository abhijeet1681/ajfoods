import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    rating: '',
    deliveryTime: '',
    sortBy: '',
    isVeg: false
  });

  const [showFilters, setShowFilters] = useState(false);

  const cuisineTypes = [
    'All', 'North Indian', 'South Indian', 'Chinese', 'Italian', 'Mexican', 
    'Continental', 'Fast Food', 'Street Food', 'Desserts', 'Biryani', 'Pizza'
  ];

  const priceRanges = [
    { label: 'All', value: '' },
    { label: '₹ (Under ₹200)', value: '0-200' },
    { label: '₹₹ (₹200-₹500)', value: '200-500' },
    { label: '₹₹₹ (₹500-₹1000)', value: '500-1000' },
    { label: '₹₹₹₹ (Above ₹1000)', value: '1000+' }
  ];

  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Delivery Time', value: 'deliveryTime' },
    { label: 'Rating', value: 'rating' },
    { label: 'Cost: Low to High', value: 'costLowToHigh' },
    { label: 'Cost: High to Low', value: 'costHighToLow' }
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearAllFilters = () => {
    const defaultFilters = {
      cuisine: '',
      priceRange: '',
      rating: '',
      deliveryTime: '',
      sortBy: '',
      isVeg: false
    };
    setFilters(defaultFilters);
    if (onFilterChange) {
      onFilterChange(defaultFilters);
    }
  };

  return (
    <div className="filter-container">
      {/* Mobile Filter Toggle */}
      <div className="d-md-none mb-3">
        <button 
          className="btn btn-outline-primary w-100"
          onClick={() => setShowFilters(!showFilters)}
        >
          🔍 Filters & Sort {showFilters ? '↑' : '↓'}
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`${showFilters ? 'd-block' : 'd-none'} d-md-block`}>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Filters</h6>
            <button 
              className="btn btn-sm btn-outline-secondary"
              onClick={clearAllFilters}
            >
              Clear All
            </button>
          </div>
          <div className="card-body">
            {/* Sort By */}
            <div className="mb-3">
              <label className="form-label fw-bold">Sort By</label>
              <select 
                className="form-select form-select-sm"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Cuisine Type */}
            <div className="mb-3">
              <label className="form-label fw-bold">Cuisine</label>
              <select 
                className="form-select form-select-sm"
                value={filters.cuisine}
                onChange={(e) => handleFilterChange('cuisine', e.target.value)}
              >
                {cuisineTypes.map(cuisine => (
                  <option key={cuisine} value={cuisine === 'All' ? '' : cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-3">
              <label className="form-label fw-bold">Price Range</label>
              <select 
                className="form-select form-select-sm"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div className="mb-3">
              <label className="form-label fw-bold">Minimum Rating</label>
              <div className="btn-group-vertical d-grid gap-1">
                {[4.5, 4.0, 3.5, 3.0].map(rating => (
                  <button
                    key={rating}
                    type="button"
                    className={`btn btn-sm ${filters.rating === rating.toString() ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleFilterChange('rating', filters.rating === rating.toString() ? '' : rating.toString())}
                  >
                    {rating}+ ⭐
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Time */}
            <div className="mb-3">
              <label className="form-label fw-bold">Delivery Time</label>
              <div className="btn-group-vertical d-grid gap-1">
                {['Under 30 mins', '30-45 mins', '45-60 mins'].map((time, index) => {
                  const value = index === 0 ? '30' : index === 1 ? '45' : '60';
                  return (
                    <button
                      key={time}
                      type="button"
                      className={`btn btn-sm ${filters.deliveryTime === value ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleFilterChange('deliveryTime', filters.deliveryTime === value ? '' : value)}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Vegetarian Only */}
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="vegOnly"
                  checked={filters.isVeg}
                  onChange={(e) => handleFilterChange('isVeg', e.target.checked)}
                />
                <label className="form-check-label fw-bold" htmlFor="vegOnly">
                  🥬 Vegetarian Only
                </label>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mb-3">
              <label className="form-label fw-bold">Quick Filters</label>
              <div className="d-flex flex-wrap gap-1">
                <button 
                  className="btn btn-sm btn-outline-success"
                  onClick={() => {
                    handleFilterChange('rating', '4.0');
                    handleFilterChange('deliveryTime', '30');
                  }}
                >
                  🚀 Fast & Good
                </button>
                <button 
                  className="btn btn-sm btn-outline-warning"
                  onClick={() => {
                    handleFilterChange('priceRange', '0-200');
                  }}
                >
                  💰 Budget Friendly
                </button>
                <button 
                  className="btn btn-sm btn-outline-info"
                  onClick={() => {
                    handleFilterChange('rating', '4.5');
                  }}
                >
                  ⭐ Top Rated
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;