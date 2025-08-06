import React, { useState } from 'react';
import Navigation from "./Carousel";
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
      {/* Hero Carousel */}
      <Navigation />
      
      {/* Search and Filter Section */}
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Filters Sidebar */}
          <div className="col-lg-3 col-md-4 mb-4">
            <Filter onFilterChange={handleFilterChange} />
          </div>
          
          {/* Main Content */}
          <div className="col-lg-9 col-md-8">
            {/* Search Bar */}
            <div className="mb-4">
              <Searchbar onSearch={handleSearch} />
            </div>
            
            {/* Search Results Info */}
            {(searchTerm || Object.values(filters).some(val => val !== '' && val !== false)) && (
              <div className="mb-3">
                <div className="alert alert-info d-flex justify-content-between align-items-center">
                  <div>
                    {searchTerm && (
                      <span>Showing results for: <strong>"{searchTerm}"</strong></span>
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
                    Clear All
                  </button>
                </div>
              </div>
            )}
            
            {/* Restaurant Cards */}
            <Cardcontainer searchTerm={searchTerm} filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;