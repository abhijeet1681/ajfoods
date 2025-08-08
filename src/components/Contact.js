import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Get in Touch</h3>
            </div>
            <div className="card-body">
              {submitted ? (
                <div className="alert alert-success text-center">
                  <h4>Thank you for contacting us!</h4>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Issue</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Restaurant Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Contact Information</h4>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <h6 className="fw-bold">📍 Address</h6>
                <p className="text-muted">
                  123 Food Street<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold">📞 Phone</h6>
                <p className="text-muted">
                  Customer Care: +91 9876543210<br />
                  Restaurant Partners: +91 9876543211
                </p>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold">📧 Email</h6>
                <p className="text-muted">
                  General: info@eatfit.com<br />
                  Support: support@eatfit.com<br />
                  Partners: partners@eatfit.com
                </p>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold">🕒 Business Hours</h6>
                <p className="text-muted">
                  Monday - Sunday: 24/7<br />
                  Customer Support: 9 AM - 11 PM
                </p>
              </div>
              
              <div>
                <h6 className="fw-bold">🌐 Follow Us</h6>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-outline-primary btn-sm">Facebook</a>
                  <a href="#" className="btn btn-outline-info btn-sm">Twitter</a>
                  <a href="#" className="btn btn-outline-danger btn-sm">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mt-3">
            <div className="card-body text-center">
              <h6 className="fw-bold">Quick Help</h6>
              <p className="small text-muted">Need immediate assistance?</p>
              <button className="btn btn-success btn-sm me-2">📞 Call Now</button>
              <button className="btn btn-info btn-sm">💬 Live Chat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;