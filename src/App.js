import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';

const App = () => {
  const location = useLocation();
  
  const isProductPage = location.pathname.startsWith('/product');

  return (
    <>
      {!isProductPage && <Header />}
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      {!isProductPage && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
