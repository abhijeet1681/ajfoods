import React, { useState } from 'react';
import { IMG_URL } from "../const/config";
import { useCart } from '../context/CartContext';

const MenuSection = ({dish, isVeg, name, costForTwo, avgRating, ratingCount, description, imageUrl, handleAdd}) =>{
    const [isAdding, setIsAdding] = useState(false);
    const { items } = useCart();
    
    // Check if item is already in cart
    const existingItem = items.find(item => item.id === dish?.card?.info?.id);
    const isInCart = !!existingItem;
    const quantity = existingItem?.quantity || 0;

    const handleAddClick = async () => {
        setIsAdding(true);
        handleAdd();
        
        // Show feedback
        setTimeout(() => {
            setIsAdding(false);
        }, 500);
    };

    const formatPrice = (price) => {
        return `₹${price?.toFixed(2)}`;
    };
    
    return(
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-8">
                        <div className="d-flex align-items-center mb-2">
                            {isVeg ? 
                                <img style={{width:"20px", height:"20px"}} src="/veg.png" alt="Veg"/> :
                                <img style={{width:"20px", height:"20px"}} src="/non-veg.png" alt="Non-Veg"/>
                            }
                            <span className="ms-2 badge bg-success">{isVeg ? 'VEG' : 'NON-VEG'}</span>
                        </div>
                        
                        <h6 className="card-title fw-bold">{name}</h6>
                        <h6 className="text-success fw-bold">{formatPrice(costForTwo)}</h6>
                        
                        {avgRating && (
                            <div className="d-flex align-items-center mb-2">
                                <div className="bg-success text-white px-2 py-1 rounded d-flex align-items-center" style={{fontSize: '0.8rem'}}>
                                    <span className="me-1">⭐</span>
                                    <span>{avgRating}</span>
                                </div>
                                {ratingCount && (
                                    <span className="text-muted ms-2" style={{fontSize: '0.8rem'}}>
                                        ({ratingCount} ratings)
                                    </span>
                                )}
                            </div>
                        )}
                        
                        {description && (
                            <p className="text-muted small">{description}</p>
                        )}
                    </div>
                    
                    <div className="col-md-4 text-center">
                        <div className="position-relative">
                            {imageUrl ? (
                                <img 
                                    style={{width:"155px", height:"155px", objectFit:"cover"}} 
                                    src={IMG_URL + imageUrl}
                                    alt={name}
                                    className="rounded"
                                />
                            ) : (
                                <div 
                                    style={{width:"155px", height:"155px"}} 
                                    className="bg-light rounded d-flex align-items-center justify-content-center"
                                >
                                    <span className="text-muted">No Image</span>
                                </div>
                            )}
                            
                            <div className="mt-3">
                                {isInCart ? (
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="btn btn-sm btn-success me-2">
                                            ✓ Added ({quantity})
                                        </span>
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={handleAddClick}
                                            disabled={isAdding}
                                        >
                                            {isAdding ? (
                                                <span className="spinner-border spinner-border-sm me-1" role="status"></span>
                                            ) : null}
                                            Add More
                                        </button>
                                    </div>
                                ) : (
                                    <button 
                                        className="btn btn-primary btn-sm px-4"
                                        onClick={handleAddClick}
                                        disabled={isAdding}
                                    >
                                        {isAdding ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Adding...
                                            </>
                                        ) : (
                                            <>
                                                🛒 Add to Cart
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSection;