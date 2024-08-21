import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel from react-bootstrap
import Card from './Card'; // Import the Card component
import '../styles/app.css';  
import axios from 'axios';

const Cards = ({ product }) => {

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

      <div className='pt-5 tags-name' style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
      <h5 className="ps-2 pb-3 fw-bold">You might be interested by</h5>
        <Carousel interval={null} indicators={false} controls={true} fade={true} wrap={true}>
          {chunkedCardData.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className='row carousel-container'>
                {chunk.map((card) => (
                  <div key={card.id} className="col-lg-3 mb-4">
                    <Card 
                      id={card.id} 
                      title={card.title} 
                      description={card.description} 
                      images={card.images} 
                      price={card.price} 
                      discountedPrice={card.discountedPrice} 
                      unit={card.unit} 
                      deliveryInfo={card.deliveryInfo} 
                    />
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

    </div>
  );
};

export default Cards;