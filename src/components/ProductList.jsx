import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchProducts from '../hooks/useFetchProducts'

function ProductList() {
  const { products, error, loading } = useFetchProducts()
  const [searchTerm, setSearchTerm] = useState('')

  if (loading) {
    return <div className="loading">Loading products...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="product-list-container">
      <h2>All Products</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <Link to={`/product/${item.id}`} className="btn-detail">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
