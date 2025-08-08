import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ onToggleMode, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    const result = await login(formData.email, formData.password);
    setIsLoading(false);
    
    if (result.success) {
      onClose();
    } else {
      setErrors({ general: result.error });
    }
  };

  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@eatfit.com',
      password: 'demo123'
    });
  };

  return (
    <div className="login-form">
      <div className="text-center mb-4">
        <h4>Welcome Back!</h4>
        <p className="text-muted">Sign in to your account</p>
      </div>

      {errors.general && (
        <div className="alert alert-danger">{errors.general}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary w-100 mb-3"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </button>

        <button 
          type="button" 
          className="btn btn-outline-info w-100 mb-3"
          onClick={handleDemoLogin}
        >
          Use Demo Account
        </button>
      </form>

      <div className="text-center">
        <p className="mb-0">
          Don't have an account?{' '}
          <button 
            className="btn btn-link p-0" 
            onClick={onToggleMode}
          >
            Sign up here
          </button>
        </p>
        <button className="btn btn-link p-0 mt-2">
          Forgot password?
        </button>
      </div>
    </div>
  );
};

export default Login;