import React, { useState, useEffect, useRef } from 'react';

const Searchbar = ({ onSearch, placeholder = "Search for restaurants, cuisines, or dishes..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const suggestionRef = useRef(null);

  // Popular searches and suggestions
  const popularSearches = [
    'Pizza', 'Biryani', 'Burger', 'Chinese', 'North Indian', 'South Indian',
    'Italian', 'Fast Food', 'Desserts', 'Momos', 'Pasta', 'Sushi'
  ];

  const cuisineSuggestions = [
    'North Indian', 'South Indian', 'Chinese', 'Italian', 'Mexican',
    'Continental', 'Fast Food', 'Street Food', 'Desserts', 'Biryani'
  ];

  // Load search history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Generate suggestions based on search term
  useEffect(() => {
    if (searchTerm.length > 0) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const filteredSuggestions = [
          ...popularSearches.filter(item => 
            item.toLowerCase().includes(searchTerm.toLowerCase())
          ),
          ...cuisineSuggestions.filter(item => 
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
        ].slice(0, 6);
        
        setSuggestions(filteredSuggestions);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  }, [searchTerm]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (term = searchTerm) => {
    if (term.trim()) {
      // Add to search history
      const newHistory = [term, ...searchHistory.filter(item => item !== term)].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      
      // Trigger search
      if (onSearch) {
        onSearch(term);
      }
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="search-container position-relative" ref={suggestionRef}>
      <div className="input-group">
        <input
          ref={searchRef}
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowSuggestions(true)}
        />
        
        {searchTerm && (
          <button 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={clearSearch}
          >
            ✖️
          </button>
        )}
        
        <button 
          className="btn btn-primary" 
          type="button"
          onClick={() => handleSearch()}
        >
          🔍
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div className="position-absolute w-100 mt-1 bg-white border rounded shadow-lg" style={{ zIndex: 1000 }}>
          {isLoading ? (
            <div className="p-3 text-center">
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {/* Search History */}
              {searchHistory.length > 0 && searchTerm === '' && (
                <div className="p-2 border-bottom">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted fw-bold">Recent Searches</small>
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={clearSearchHistory}
                    >
                      Clear
                    </button>
                  </div>
                  {searchHistory.map((item, index) => (
                    <div
                      key={index}
                      className="suggestion-item p-2 cursor-pointer hover-bg-light"
                      onClick={() => handleSuggestionClick(item)}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <small>🕒 {item}</small>
                    </div>
                  ))}
                </div>
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className="p-2">
                  <small className="text-muted fw-bold">Suggestions</small>
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion-item p-2 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <small>🔍 {suggestion}</small>
                    </div>
                  ))}
                </div>
              )}

              {/* Popular Searches */}
              {searchTerm === '' && suggestions.length === 0 && (
                <div className="p-2">
                  <small className="text-muted fw-bold">Popular Searches</small>
                  <div className="d-flex flex-wrap gap-1 mt-2">
                    {popularSearches.slice(0, 6).map((item, index) => (
                      <button
                        key={index}
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleSuggestionClick(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {searchTerm && suggestions.length === 0 && !isLoading && (
                <div className="p-3 text-center text-muted">
                  <small>No suggestions found for "{searchTerm}"</small>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;