import React from 'react';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const cardData = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for product 1.',
    images: [
      '../img/p1.webp',
      '../img/p1-2.webp',
      '../img/p1-3.webp',
      '../img/p1-4.webp'
    ],
  },

  {
    id: 2,
    title: 'Product 1',
    description: 'Description for product 1.',
    images: [
      '../img/p2.webp',
      '../img/p2-2.webp',
      ],
  },

];

const HomePage = () => {
  return (
    <section className="container mt-4">
      <div className="row justify-content-center">
        {cardData.map(card => (
          <div key={card.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <Card
              id={card.id}
              title={card.title}
              description={card.description}
              images={card.images}
            />
          </div>
        ))}
      </div>
    </section>
  );
};



export default HomePage;
