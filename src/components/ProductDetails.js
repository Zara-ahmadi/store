import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar, faChevronUp, faChevronDown, faCommentDots, faCartShopping, faCalculator } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';

const ProductDetails = ({ product }) => {
  const [isColorCollapsed, setIsColorCollapsed] = useState(true);
  const [isMemoryCollapsed, setIsMemoryCollapsed] = useState(true);
  const [isSizeCollapsed, setIsSizeCollapsed] = useState(true);
  const [isConditionnementCollapsed, setIsConditionnementCollapsed] = useState(true);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedConditionnement, setSelectedConditionnement] = useState(null);

  // Parse characteristics JSON if it's a string, otherwise use it as an object
  const characteristics = typeof product?.characteristics === 'string'
    ? JSON.parse(product.characteristics)
    : product?.characteristics || {};

  return (
    <div>
      <div className="product-header">
        <div className='row'>
          <div className='col-2'>
            <h4>{product?.title}</h4>
          </div>
          <div className='col-10'>
            <div className="pricing-info">
              <div className="pricing-details">
                <span className="discounted-price">
                  <h3>USD {product?.discountedPrice}</h3>
                  <span className='unit'>/ unit</span>
                </span>
                <span className="pricePerUnit">
                  <p className='p-bold'>USD {product?.price} </p>
                  <span className='unit'>/ unit</span>
                </span>
                <span className="delivery-info">
                  <p className='p-blue'>delivery - USD {product?.deliveryInfo} <span className='exw'>EXW</span></p>
                </span>
              </div>
              <div className="info-icons">
                <span className='basket'>
                  1 | <FontAwesomeIcon className='basket-icon' icon={faCartShopping} />
                </span>
                <span className='counter'>
                  1 | <FontAwesomeIcon className='counter-icon' icon={faCalculator} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <button className='mb-5 mt-5'>
          <a href='/'><FontAwesomeIcon className='pe-2' icon={faArrowLeft} />Back to Catalog</a>
        </button>
        <div className='row gx-2'>
          <div className='col-12 col-md-5'>
            <div className="product-image">
              {/* Render the first image */}
              <img src={product?.images?.[0]} alt={product?.title} className="img-fluid w-100" />
            </div>
          </div>
          <div className='col-12 ps-5 col-md-7 d-flex flex-column'>
            <div className='card1'>
              <div className="card-header">
                <h2 className='headers'>{product?.title}</h2>
                <FontAwesomeIcon className='chat-icon fa-3x' icon={faCommentDots} />
              </div>
              <p className='ref'>Ref: 112233445566778899</p>
              <a href='/#' className='text-decoration-underline d-block'>{product?.supplierInfo?.name}</a>
              <div className="rating">
                <FontAwesomeIcon className='star-rating' icon={faStar} />
                <FontAwesomeIcon className='star-rating' icon={faStar} />
                <FontAwesomeIcon className='star-rating' icon={faStar} />
                <FontAwesomeIcon className='star-rating' icon={faStar} />
                <FontAwesomeIcon className='star-rating' icon={faStar} />
              </div>
              <div className="pricing-info">
                <div className="pricing-details">
                  <span className="d-block original-price">
                    <p>USD {product?.price}</p>
                  </span>
                  <span className="discounted-price">
                    <h3>USD {product?.discountedPrice}</h3>
                    <span className='unit'>/ unit</span>
                  </span>
                  <span className="pricePerUnit">
                    <p className='p-bold'>USD {product?.discountedPrice} / unit</p>
                    <span className='unit'>/ unit</span>
                  </span>
                  <span className="delivery-info">
                    <p className='p-blue'>delivery - USD {product?.deliveryInfo} <span className='exw'>EXW</span></p>
                  </span>
                </div>
                <div className="info-icons">
                  <span className='basket'>
                    1 | <FontAwesomeIcon className='basket-icon' icon={faCartShopping} />
                  </span>
                  <span className='counter'>
                    1 | <FontAwesomeIcon className='counter-icon' icon={faCalculator} />
                  </span>
                </div>
              </div>
            </div>

            <div className="product-options">
              {/* Color Option */}
              <div className="option">
                <label
                  className='d-block pb-2 tags-name d-flex justify-content-between'
                  onClick={() => setIsColorCollapsed(!isColorCollapsed)}
                  style={{ cursor: 'pointer' }}
                >
                  Color
                  <FontAwesomeIcon icon={isColorCollapsed ? faChevronDown : faChevronUp} />
                </label>
                <Collapse in={!isColorCollapsed}>
                  <div className='d-flex flex-wrap'>
                    {characteristics?.color?.map((color, index) => (
                      <span
                        key={index}
                        className={`product-option ${selectedColor === color ? 'selected-option' : ''}`}
                        onClick={() => setSelectedColor(color)}
                        style={{ cursor: 'pointer', flex: '1 1 100px', margin: '5px' }}
                      >
                        <span className="color-box" style={{ backgroundColor: color }}></span> {color}
                      </span>
                    ))}
                  </div>
                </Collapse>
              </div>

              {/* Memory Option */}
              <div className="option">
                <label
                  className='d-block pb-2 tags-name d-flex justify-content-between'
                  onClick={() => setIsMemoryCollapsed(!isMemoryCollapsed)}
                  style={{ cursor: 'pointer' }}
                >
                  Memory
                  <FontAwesomeIcon icon={isMemoryCollapsed ? faChevronDown : faChevronUp} />
                </label>
                <Collapse in={!isMemoryCollapsed}>
                  <div>
                    {characteristics?.memory?.map((memory, index) => (
                      <span
                        key={index}
                        className={`product-option ${selectedMemory === memory ? 'selected-option' : ''}`}
                        onClick={() => setSelectedMemory(memory)}
                        style={{ cursor: 'pointer' }}
                      >
                        {memory}
                      </span>
                    ))}
                  </div>
                </Collapse>
              </div>

              {/* Size Option */}
              {characteristics?.size && (
                <div className="option">
                  <label
                    className='d-block pb-2 tags-name d-flex justify-content-between'
                    onClick={() => setIsSizeCollapsed(!isSizeCollapsed)}
                    style={{ cursor: 'pointer' }}
                  >
                    Size
                    <FontAwesomeIcon icon={isSizeCollapsed ? faChevronDown : faChevronUp} />
                  </label>
                  <Collapse in={!isSizeCollapsed}>
                    <div>
                      {characteristics?.size?.map((size, index) => (
                        <span
                          key={index}
                          className={`product-option ${selectedSize === size ? 'selected-option' : ''}`}
                          onClick={() => setSelectedSize(size)}
                          style={{ cursor: 'pointer' }}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </Collapse>
                </div>
              )}

              {/* Conditionnement Option */}
              {characteristics?.conditionnement && (
                <div className="option">
                  <label
                    className='d-block pb-2 tags-name d-flex justify-content-between'
                    onClick={() => setIsConditionnementCollapsed(!isConditionnementCollapsed)}
                    style={{ cursor: 'pointer' }}
                  >
                    Conditionnement
                    <FontAwesomeIcon icon={isConditionnementCollapsed ? faChevronDown : faChevronUp} />
                  </label>
                  <Collapse in={!isConditionnementCollapsed}>
                    <div>
                      {characteristics?.conditionnement?.map((conditionnement, index) => (
                        <span
                          key={index}
                          className={`product-option ${selectedConditionnement === conditionnement ? 'selected-option' : ''}`}
                          onClick={() => setSelectedConditionnement(conditionnement)}
                          style={{ cursor: 'pointer' }}
                        >
                          {conditionnement}
                        </span>
                      ))}
                    </div>
                  </Collapse>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
