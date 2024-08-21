import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel from react-bootstrap
import Card from './Card'; // Import the Card component
import '../styles/app.css';  

const cardData = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for product 1.',
    images: [
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300'
    ],
    price: 250,
    discountedPrice: 150,
    unit: 1,
    deliveryInfo: 20.00,
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for product 2.',
    images: [
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
    ],
    price: 150,
    discountedPrice: 120,
    unit: 1,
    deliveryInfo: 15.00,
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for product 3.',
    images: [
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      
    ],
    price: 300,
    discountedPrice: 250,
    unit: 1,
    deliveryInfo: 25.00,
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for product 4.',
    images: [
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
    ],
    price: 400,
    discountedPrice: 350,
    unit: 1,
    deliveryInfo: 30.00,
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description for product 5.',
    images: [
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
    ],
    price: 450,
    discountedPrice: 400,
    unit: 1,
    deliveryInfo: 35.00,
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for product 6.',
    images: [
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
      'https://picsum.photos/seed/picsum/200/300',
    ],
    price: 500,
    discountedPrice: 450,
    unit: 1,
    deliveryInfo: 40.00,
  },
];

const ProductInfo = ({ product }) => {
  const [isCharacteristicsCollapsed, setIsCharacteristicsCollapsed] = useState(false);
  const [isAboutProductCollapsed, setIsAboutProductCollapsed] = useState(false);

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

  const chunkedCardData = chunkArray(cardData, 4);

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

      <div className='pt-5 pb-5 tags-name' style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
      <h5 className="ps-2 pb-3 fw-bold">Often Purchased with</h5>
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

export default ProductInfo;