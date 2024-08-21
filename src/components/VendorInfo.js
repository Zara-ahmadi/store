import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';
import '../styles/app.css';  
import axios from 'axios';

const VendorInfo = ({ product }) => {
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

  return (
    <div className="container pt-5">

      <div className='row pt-5 pb-4'>
        <div className='col-lg-12'>
          <div className="characteristics">
            <div className='d-block pb-2 tags-name d-flex justify-content-between'
              onClick={() => setIsAboutProductCollapsed(!isAboutProductCollapsed)}
              style={{ cursor: 'pointer' }}
            >
              <h5 className='fw-bold'>About the Vendor</h5>
              <FontAwesomeIcon icon={isAboutProductCollapsed ? faChevronDown : faChevronUp} />
            </div>
            <Collapse in={!isAboutProductCollapsed}>
              <div className="mt-3 row">
                <div className="col-lg-10">
                  <p>
                    {product.supplierInfo.contact}
                  </p>
                </div>
                <div className="col-lg-2">
                  <img className="img-rounded img-fluid" src='https://picsum.photos/seed/picsum/200/300' alt="Product" />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VendorInfo;