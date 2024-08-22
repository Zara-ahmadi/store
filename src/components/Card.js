import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = ({ id, title, description, images = [], price, discountedPrice, unit, deliveryInfo, showRating = true }) => {
    const discountPercentage = price && discountedPrice ? 
        Math.round(((price - discountedPrice) / price) * 100) : 
        null;

    return (
        <div className="custom-card">
            <Link to={`/product/${id}`} className="text-decoration-none text-dark">
                <div className="custom-card-header">
                    {discountPercentage && (
                        <span className="custom-discount-badge">-{discountPercentage}%</span>
                    )}
                    <div className="custom-image-container">
                        <img src={images[0]} alt={title} className="custom-product-image" />
                        <button className="custom-heart-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                </div>
                <div className="custom-card-body">
                    <h5 className="custom-product-title">{title}</h5>
                    {showRating && (
                        <div className="custom-product-rating">
                            {Array(5).fill(0).map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className="custom-star-rating" />
                            ))}
                        </div>
                    )}
                    <div className="custom-product-pricing">
                        {discountedPrice && (
                            <span className="custom-original-price">USD {price}</span>
                        )}
                        <h4 className="custom-discounted-price">USD {discountedPrice} <span className='custom-unit'> / unit</span></h4>
                    </div>
                    <div className="custom-delivery-info">
                        <p>Delivery - USD {deliveryInfo} <span className="custom-exw">EXW</span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
