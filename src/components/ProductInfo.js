import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel from react-bootstrap
import Card from './Card'; // Import the Card component
import '../styles/app.css';  
import axios from 'axios';

const ProductInfo = ({ product }) => {
  const [isCharacteristicsCollapsed, setIsCharacteristicsCollapsed] = useState(false);
  const [isAboutProductCollapsed, setIsAboutProductCollapsed] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    } catch (e) {
      setError('Failed to load product data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);
  
  const characteristics = typeof product.characteristics === 'string'
      ? JSON.parse(product.characteristics)
    : product.characteristics;
  
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedCardData = chunkArray(products, 4);

  return (
    <div className="container pt-5">
      <div className='row'>
        <div className='col-lg-6'>
          <div className="characteristics">
            <div 
              className='d-block pb-2 tags-name d-flex justify-content-between'
              onClick={() => setIsCharacteristicsCollapsed(!isCharacteristicsCollapsed)}
              style={{ cursor: 'pointer' }}
            >
              <h5 className="fw-bold">Characteristics</h5>
              <FontAwesomeIcon icon={isCharacteristicsCollapsed ? faChevronDown : faChevronUp} />
            </div>
            <Collapse in={!isCharacteristicsCollapsed}>
              <div id="characteristics-collapse" className="mt-3">
                <table className="table table-borderless table-striped">
                  <tbody>
                    {characteristics && Object.entries(characteristics).map(([key, values]) => (
                      <tr key={key}>
                        <th scope="row">{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        <td>{values.join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Collapse>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className="characteristics">
            <div className='d-block pb-2 tags-name d-flex justify-content-between'
              onClick={() => setIsAboutProductCollapsed(!isAboutProductCollapsed)}
              style={{ cursor: 'pointer' }}
            >
              <h5 className='fw-bold'>About this product</h5>
              <FontAwesomeIcon icon={isAboutProductCollapsed ? faChevronDown : faChevronUp} />
            </div>
            <Collapse in={!isAboutProductCollapsed}>
              <div className="mt-3">
                <p>
                  {product.description}
                </p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductInfo;