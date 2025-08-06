import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">About EatFit</h1>
              <p className="lead">
                Delivering happiness, one meal at a time. We're on a mission to bring the best 
                food from your favorite restaurants right to your doorstep.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <img 
                src="/talabat-clone.webp" 
                alt="EatFit Delivery" 
                className="img-fluid rounded"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="text-primary mb-3">🎯 Our Mission</h3>
                  <p>
                    To revolutionize food delivery by connecting food lovers with their favorite 
                    restaurants through a seamless, fast, and reliable platform. We believe that 
                    great food should be accessible to everyone, everywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="text-success mb-3">👁️ Our Vision</h3>
                  <p>
                    To become the world's most trusted food delivery platform, empowering 
                    restaurants and delighting customers with exceptional service, quality, 
                    and convenience in every order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="stat-item">
                <h2 className="display-4 text-primary fw-bold">1M+</h2>
                <p className="text-muted">Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-item">
                <h2 className="display-4 text-success fw-bold">5K+</h2>
                <p className="text-muted">Partner Restaurants</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-item">
                <h2 className="display-4 text-warning fw-bold">10M+</h2>
                <p className="text-muted">Orders Delivered</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-item">
                <h2 className="display-4 text-info fw-bold">25+</h2>
                <p className="text-muted">Cities Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Why Choose EatFit?</h2>
            <p className="lead text-muted">We're committed to providing the best food delivery experience</p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span style={{ fontSize: '2rem' }}>🚀</span>
                </div>
                <h4>Lightning Fast Delivery</h4>
                <p className="text-muted">
                  Get your favorite meals delivered in 30 minutes or less with our 
                  optimized delivery network.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span style={{ fontSize: '2rem' }}>⭐</span>
                </div>
                <h4>Quality Guaranteed</h4>
                <p className="text-muted">
                  We partner only with the best restaurants and ensure every meal 
                  meets our high-quality standards.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="text-center">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span style={{ fontSize: '2rem' }}>📱</span>
                </div>
                <h4>Easy to Use</h4>
                <p className="text-muted">
                  Simple, intuitive interface that makes ordering food as easy as 
                  a few taps on your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Meet Our Team</h2>
            <p className="lead text-muted">The passionate people behind EatFit</p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <img 
                    src="/abhi.png" 
                    alt="Team Member" 
                    className="rounded-circle mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <h5>Abhishek Kumar</h5>
                  <p className="text-muted">CEO & Founder</p>
                  <p className="small">
                    Passionate about food and technology, leading EatFit's vision to 
                    revolutionize food delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div 
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '100px', height: '100px', fontSize: '2rem' }}
                  >
                    👨‍💻
                  </div>
                  <h5>Priya Sharma</h5>
                  <p className="text-muted">CTO</p>
                  <p className="small">
                    Tech enthusiast building scalable solutions to handle millions 
                    of orders seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div 
                    className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '100px', height: '100px', fontSize: '2rem' }}
                  >
                    👩‍💼
                  </div>
                  <h5>Rajesh Singh</h5>
                  <p className="text-muted">Head of Operations</p>
                  <p className="small">
                    Ensuring smooth operations and exceptional customer experience 
                    across all our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Experience EatFit?</h2>
          <p className="lead mb-4">
            Join millions of satisfied customers and discover your new favorite meal today!
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/" className="btn btn-light btn-lg">
              🍽️ Order Now
            </a>
            <a href="/contact" className="btn btn-outline-light btn-lg">
              📞 Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;