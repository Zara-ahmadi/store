import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

const HomePage = () => {
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

  // Show only the first 8 products
  const displayedProducts = products.slice(0, 8);

  return (
    <section className="container mt-4">
      <div className="row justify-content-center">
        {displayedProducts.map(card => (
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
