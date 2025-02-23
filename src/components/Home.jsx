import React from 'react';
import { Link } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';

function Home() {
  const { products, error, loading } = useFetchProducts();

  if (loading) return <div>Loading Home...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-container">
      <h1>Welcome to ShoppyGlobe</h1>
      <p>Discover our amazing products.</p>
      <Link to="/products" className="btn">Shop Now</Link>
    </div>
  );
}

export default Home;
