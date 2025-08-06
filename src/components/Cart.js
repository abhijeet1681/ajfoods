import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };

  if (items.length === 0) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <img 
              src="/noimg.png" 
              alt="Empty Cart" 
              style={{ width: '200px', opacity: 0.5 }}
            />
            <h3 className="mt-4 text-muted">Your cart is empty</h3>
            <p className="text-muted">Looks like you haven't added anything to your cart yet</p>
            <a href="/" className="btn btn-primary">Browse Restaurants</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Your Cart ({items.length} items)</h4>
              <button 
                className="btn btn-outline-danger btn-sm" 
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
            <div className="card-body">
              {items.map((item) => (
                <div key={item.id} className="row mb-3 pb-3 border-bottom">
                  <div className="col-md-3">
                    <img 
                      src={item.imageId ? 
                        `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}` : 
                        '/noimg.png'
                      }
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="text-muted small mb-2">{item.description || 'Delicious food item'}</p>
                    <div className="d-flex align-items-center">
                      {item.isVeg ? 
                        <img src="/veg.png" alt="Veg" style={{ width: '16px', marginRight: '5px' }} /> :
                        <img src="/non-veg.png" alt="Non-Veg" style={{ width: '16px', marginRight: '5px' }} />
                      }
                      <span className="fw-bold text-success">{formatPrice(item.price)}</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center justify-content-end">
                      <div className="btn-group" role="group">
                        <button 
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="btn btn-outline-primary btn-sm disabled">
                          {item.quantity}
                        </span>
                        <button 
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        className="btn btn-outline-danger btn-sm ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                    <div className="text-end mt-2">
                      <small className="fw-bold">
                        {formatPrice(item.price * item.quantity)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card sticky-top">
            <div className="card-header">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee:</span>
                <span>₹40.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Taxes & Fees:</span>
                <span>₹{(getTotalPrice() * 0.05).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold h5">
                <span>Total:</span>
                <span>{formatPrice(getTotalPrice() + 40 + (getTotalPrice() * 0.05))}</span>
              </div>
              <button className="btn btn-success w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;