import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import ProductInfo from '../components/ProductInfo';
import Comments from '../components/Comments';
import Footer from '../components/Footer';
import '../styles/app.css';

// Static data for demonstration purposes
const productData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the description for Card 1.',
    imageUrl: 'https://via.placeholder.com/150',
    details: 'Detailed information about Card 1...',
    info: 'Additional product info for Card 1...',
    comments: ['Great product!', 'Really enjoyed it.']
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the description for Card 2.',
    imageUrl: 'https://via.placeholder.com/150',
    details: 'Detailed information about Card 2...',
    info: 'Additional product info for Card 2...',
    comments: ['Not bad.', 'Could be improved.']
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the description for Card 3.',
    imageUrl: 'https://via.placeholder.com/150',
    details: 'Detailed information about Card 3...',
    info: 'Additional product info for Card 3...',
    comments: ['Excellent!', 'Would buy again.']
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const product = productData.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails
        title={product.title}
        description={product.description}
        imageUrl={product.imageUrl}
        details={product.details}
      />
      <ProductInfo info={product.info} />
      <Comments comments={product.comments} />
      <Footer />
    </div>
  );
};

export default ProductPage;
