import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import ProductInfo from '../components/ProductInfo';
import Comments from '../components/Comments';
import Footer from '../components/Footer';
import '../styles/app.css';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleProduct = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/product", { id });
      setProduct(data);
    } catch (e) {
      setError('Failed to load product data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleProduct();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product ? (
        <div>
          <ProductDetails product={product} />
          <ProductInfo product={product} />
          <Comments comments={product.comments} />
        </div>
      ) : (
        <p>No product found</p>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
