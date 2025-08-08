import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [foodCategories, setFoodCategories] = useState([]);
  const [deals, setDeals] = useState([]);

  // Hero banner data
  const heroBanners = [
    {
      id: 1,
      image: '/moto-1.webp',
      title: 'Order Food Online',
      subtitle: 'Get your favorite food delivered in minutes',
      cta: 'Order Now',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      image: '/talabat-clone.webp',
      title: 'Fast Delivery',
      subtitle: 'Lightning fast delivery to your doorstep',
      cta: 'Get Started',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      image: '/44.avif',
      title: 'Fresh & Quality',
      subtitle: 'Best quality food from top restaurants',
      cta: 'Explore',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  // Food categories data
  const categories = [
    { id: 1, name: 'Pizza', image: '/veg.png', discount: '20% OFF' },
    { id: 2, name: 'Burgers', image: '/non-veg.png', discount: '15% OFF' },
    { id: 3, name: 'Biryani', image: '/veg.png', discount: '25% OFF' },
    { id: 4, name: 'Chinese', image: '/non-veg.png', discount: '30% OFF' },
    { id: 5, name: 'Desserts', image: '/veg.png', discount: '10% OFF' },
    { id: 6, name: 'North Indian', image: '/non-veg.png', discount: '20% OFF' },
    { id: 7, name: 'South Indian', image: '/veg.png', discount: '15% OFF' },
    { id: 8, name: 'Fast Food', image: '/non-veg.png', discount: '25% OFF' },
    { id: 9, name: 'Beverages', image: '/veg.png', discount: '5% OFF' },
    { id: 10, name: 'Snacks', image: '/non-veg.png', discount: '18% OFF' }
  ];

  // Deals data
  const dealsData = [
    {
      id: 1,
      title: 'Flat 50% OFF',
      subtitle: 'On orders above ₹299',
      image: '/45.jpg',
      code: 'SAVE50',
      bgColor: '#ff6b6b'
    },
    {
      id: 2,
      title: 'Free Delivery',
      subtitle: 'On all orders',
      image: '/44.avif',
      code: 'FREEDEL',
      bgColor: '#4ecdc4'
    },
    {
      id: 3,
      title: 'Buy 1 Get 1',
      subtitle: 'On selected items',
      image: '/moto-1.webp',
      code: 'BOGO',
      bgColor: '#45b7d1'
    },
    {
      id: 4,
      title: 'Weekend Special',
      subtitle: '30% off on weekends',
      image: '/talabat-clone.webp',
      code: 'WEEKEND30',
      bgColor: '#96ceb4'
    }
  ];

  // Hero carousel settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  // Categories carousel settings
  const categorySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Deals carousel settings
  const dealsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      {/* Hero Banner Carousel */}
      <section className="hero-section">
        <Slider {...heroSettings}>
          {heroBanners.map((banner) => (
            <div key={banner.id} className="hero-slide">
              <div 
                className="hero-content"
                style={{ background: banner.bgColor }}
              >
                <div className="container">
                  <div className="row align-items-center min-vh-50">
                    <div className="col-lg-6 col-md-8">
                      <div className="hero-text text-white">
                        <h1 className="display-4 fw-bold mb-3">{banner.title}</h1>
                        <p className="lead mb-4">{banner.subtitle}</p>
                        <button className="btn btn-light btn-lg px-4 py-2">
                          {banner.cta} →
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-4 text-center">
                      <img 
                        src={banner.image} 
                        alt={banner.title}
                        className="img-fluid hero-image"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Food Categories Section */}
      <section className="categories-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-2">What's on your mind?</h2>
              <p className="text-muted">Choose from a variety of food categories</p>
            </div>
          </div>
          <Slider {...categorySettings}>
            {categories.map((category) => (
              <div key={category.id} className="category-item px-2">
                <div className="category-card text-center">
                  <div className="category-image-wrapper position-relative">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="category-image rounded-circle"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <span className="discount-badge position-absolute top-0 end-0 badge bg-danger">
                      {category.discount}
                    </span>
                  </div>
                  <h6 className="mt-3 fw-semibold">{category.name}</h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Deals and Offers Section */}
      <section className="deals-section py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-2">🔥 Hot Deals & Offers</h2>
              <p className="text-muted">Save big with our exclusive deals</p>
            </div>
          </div>
          <Slider {...dealsSettings}>
            {dealsData.map((deal) => (
              <div key={deal.id} className="deal-item px-2">
                <div className="deal-card card border-0 shadow-sm h-100">
                  <div 
                    className="card-header text-white text-center py-3"
                    style={{ backgroundColor: deal.bgColor }}
                  >
                    <h5 className="fw-bold mb-1">{deal.title}</h5>
                    <small>{deal.subtitle}</small>
                  </div>
                  <div className="card-body text-center">
                    <img 
                      src={deal.image} 
                      alt={deal.title}
                      className="img-fluid rounded mb-3"
                      style={{ height: '120px', objectFit: 'cover', width: '100%' }}
                    />
                    <div className="deal-code bg-light p-2 rounded mb-3">
                      <code className="fw-bold">{deal.code}</code>
                    </div>
                    <button className="btn btn-primary btn-sm">
                      Claim Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-item">
                <h3 className="display-6 fw-bold">1M+</h3>
                <p className="mb-0">Happy Customers</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-item">
                <h3 className="display-6 fw-bold">5K+</h3>
                <p className="mb-0">Restaurants</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-item">
                <h3 className="display-6 fw-bold">10M+</h3>
                <p className="mb-0">Orders Delivered</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-item">
                <h3 className="display-6 fw-bold">30min</h3>
                <p className="mb-0">Avg Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="download-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Get the EatFit App</h2>
              <p className="text-muted mb-4">
                Download our app for faster ordering, exclusive deals, and real-time tracking.
              </p>
              <div className="app-buttons">
                <button className="btn btn-dark me-3 mb-2">
                  📱 Download for iOS
                </button>
                <button className="btn btn-success mb-2">
                  🤖 Download for Android
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src="/moto-1.webp" 
                alt="EatFit App"
                className="img-fluid"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;