import Logo from "../assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-previeww-removebg-preview.png";
import {Link} from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import AuthModal from "./AuthModal";

const Header = () => {
  const { getTotalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const totalItems = getTotalItems();

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <nav className="navbar p-0 navbar-expand-sm navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img src={Logo} style={{ width: "90px" }} alt="EatFit Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="">Home🏠</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About Us😶‍🌫️</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact📞</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="cart">
                  Cart🛒
                  {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  )}
                </Link>
              </li>
              
              {/* Authentication Section */}
              {isAuthenticated ? (
                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn btn-link dropdown-toggle d-flex align-items-center"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    style={{ border: 'none', background: 'none' }}
                  >
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px', fontSize: '14px' }}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    {user.name}
                  </button>
                  {showUserMenu && (
                    <div className="dropdown-menu show position-absolute end-0 mt-2">
                      <div className="dropdown-header">
                        <strong>{user.name}</strong>
                        <br />
                        <small className="text-muted">{user.email}</small>
                      </div>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Profile</a>
                      <a className="dropdown-item" href="#">My Orders</a>
                      <a className="dropdown-item" href="#">Addresses</a>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Sign Out
                      </button>
                    </div>
                  )}
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <button 
                      className="btn btn-outline-primary btn-sm me-2"
                      onClick={() => handleAuthClick('login')}
                    >
                      Sign In
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => handleAuthClick('signup')}
                    >
                      Sign Up
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;