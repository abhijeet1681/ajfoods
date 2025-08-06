import React, { useState } from 'react';
import Carousel from "./Carousel";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    rating: '',
    deliveryTime: '',
    sortBy: '',
    isVeg: false
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="body-container">
      {/* Hero Carousel with all sections */}
      <Carousel />
      
      {/* Main Restaurant Section */}
      <section className="restaurants-section py-5">
        <div className="container-fluid">
          {/* Section Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">🍽️ Restaurants Near You</h2>
                <p className="text-muted">Discover amazing food from local restaurants</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Filters Sidebar */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="filters-sticky">
                <Filter onFilterChange={handleFilterChange} />
                
                {/* Quick Actions */}
                <div className="card mt-3">
                  <div className="card-header">
                    <h6 className="mb-0">🎯 Quick Actions</h6>
                  </div>
                  <div className="card-body">
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-primary btn-sm">
                        🚀 Fast Delivery
                      </button>
                      <button className="btn btn-outline-success btn-sm">
                        ⭐ Top Rated
                      </button>
                      <button className="btn btn-outline-warning btn-sm">
                        💰 Great Offers
                      </button>
                      <button className="btn btn-outline-info btn-sm">
                        🥬 Pure Veg
                      </button>
                    </div>
                  </div>
                </div>

                {/* Help Section */}
                <div className="card mt-3">
                  <div className="card-body text-center">
                    <h6 className="fw-bold">Need Help?</h6>
                    <p className="small text-muted">Having trouble finding what you're looking for?</p>
                    <button className="btn btn-primary btn-sm">
                      📞 Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-lg-9 col-md-8">
              {/* Enhanced Search Section */}
              <div className="search-section mb-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-8 mb-3 mb-lg-0">
                        <Searchbar onSearch={handleSearch} />
                      </div>
                      <div className="col-lg-4 text-lg-end">
                        <div className="search-stats text-muted small">
                          <span>🏪 500+ Restaurants</span>
                          <span className="ms-3">🍽️ 10,000+ Dishes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Cuisines Quick Filter */}
              <div className="popular-cuisines mb-4">
                <h6 className="fw-bold mb-3">🔥 Popular Cuisines</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['North Indian', 'Chinese', 'Italian', 'South Indian', 'Fast Food', 'Desserts'].map((cuisine) => (
                    <button
                      key={cuisine}
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleFilterChange({ ...filters, cuisine })}
                    >
                      {cuisine}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Search Results Info */}
              {(searchTerm || Object.values(filters).some(val => val !== '' && val !== false)) && (
                <div className="search-results-info mb-4">
                  <div className="alert alert-info d-flex justify-content-between align-items-center">
                    <div>
                      {searchTerm && (
                        <span>🔍 Showing results for: <strong>"{searchTerm}"</strong></span>
                      )}
                      {Object.values(filters).some(val => val !== '' && val !== false) && (
                        <span className="ms-2">
                          <small className="badge bg-secondary">Filters applied</small>
                        </span>
                      )}
                    </div>
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => {
                        setSearchTerm('');
                        setFilters({
                          cuisine: '',
                          priceRange: '',
                          rating: '',
                          deliveryTime: '',
                          sortBy: '',
                          isVeg: false
                        });
                      }}
                    >
                      ✖️ Clear All
                    </button>
                  </div>
                </div>
              )}

              {/* Sort Options */}
              <div className="sort-options mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="fw-bold mb-0">All Restaurants</h6>
                  <div className="d-flex gap-2">
                    <select 
                      className="form-select form-select-sm"
                      style={{ width: 'auto' }}
                      value={filters.sortBy}
                      onChange={(e) => handleFilterChange({ ...filters, sortBy: e.target.value })}
                    >
                      <option value="">Sort by</option>
                      <option value="relevance">Relevance</option>
                      <option value="deliveryTime">Delivery Time</option>
                      <option value="rating">Rating</option>
                      <option value="costLowToHigh">Cost: Low to High</option>
                      <option value="costHighToLow">Cost: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Restaurant Cards */}
              <div className="restaurant-cards">
                <Cardcontainer searchTerm={searchTerm} filters={filters} />
              </div>

              {/* Loading More Section */}
              <div className="load-more-section text-center mt-5">
                <div className="card border-0 bg-light">
                  <div className="card-body py-4">
                    <h6 className="fw-bold">Looking for more restaurants?</h6>
                    <p className="text-muted mb-3">We're constantly adding new restaurants to serve you better</p>
                    <button className="btn btn-primary">
                      🔄 Load More Restaurants
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 className="fw-bold mb-3">📧 Stay Updated</h3>
              <p className="text-muted mb-4">
                Get notified about new restaurants, exclusive deals, and special offers
              </p>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
              <small className="text-muted mt-2 d-block">
                We respect your privacy. Unsubscribe at any time.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <span style={{ fontSize: '1.5rem' }}>🚚</span>
                </div>
                <h6 className="fw-bold">Fast Delivery</h6>
                <p className="text-muted small">Get your food delivered in 30 minutes or less</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon bg-success text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <span style={{ fontSize: '1.5rem' }}>💳</span>
                </div>
                <h6 className="fw-bold">Easy Payment</h6>
                <p className="text-muted small">Multiple payment options for your convenience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon bg-warning text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                </div>
                <h6 className="fw-bold">Safe & Secure</h6>
                <p className="text-muted small">Your data and payments are completely secure</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon bg-info text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <span style={{ fontSize: '1.5rem' }}>⭐</span>
                </div>
                <h6 className="fw-bold">Quality Food</h6>
                <p className="text-muted small">Only the best restaurants and highest quality food</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;