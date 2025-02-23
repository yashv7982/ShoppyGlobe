import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';

function ProductList() {
  const { products, error, loading } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredProducts = products.filter(product =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <h2>All Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product._id || product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link to={`/product/${product._id || product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
