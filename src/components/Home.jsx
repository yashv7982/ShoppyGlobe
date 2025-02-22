import React from 'react'
import { Link } from 'react-router-dom'
import useFetchProducts from '../hooks/useFetchProducts'

function Home() {
  const { products, error, loading } = useFetchProducts()

  if (loading) {
    return <div>Loading Home Page...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  // Filter products by the specified categories.
  const beautyItems = products
    .filter((item) => item.category === 'beauty')
    .slice(0, 3)

  const groceriesItems = products
    .filter((item) => item.category === 'groceries')
    .slice(0, 3)

  const furnitureItems = products
    .filter((item) => item.category === 'furniture')
    .slice(0, 3)

  const fragrancesItems = products
    .filter((item) => item.category === 'fragrances')
    .slice(0, 3)

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>GET START YOUR FAVRIOT SHOPPING</h1>
          <p>Buy Now</p>
          <Link to="/products" className="hero-button">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Beauty Section */}
      <section className="categories">
        <h2>Beauty</h2>
        <div className="category-items">
          {beautyItems.length > 0 ? (
            beautyItems.map((product) => (
              <div className="category-item" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn-buy">
                  Buy Now
                </Link>
              </div>
            ))
          ) : (
            <p>No beauty products available.</p>
          )}
        </div>
      </section>

      {/* Groceries Section */}
      <section className="categories">
        <h2>Groceries</h2>
        <div className="category-items">
          {groceriesItems.length > 0 ? (
            groceriesItems.map((product) => (
              <div className="category-item" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn-buy">
                  Buy Now
                </Link>
              </div>
            ))
          ) : (
            <p>No groceries products available.</p>
          )}
        </div>
      </section>

      {/* Furniture Section */}
      <section className="categories">
        <h2>Furniture</h2>
        <div className="category-items">
          {furnitureItems.length > 0 ? (
            furnitureItems.map((product) => (
              <div className="category-item" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn-buy">
                  Buy Now
                </Link>
              </div>
            ))
          ) : (
            <p>No furniture products available.</p>
          )}
        </div>
      </section>

      {/* Fragrances Section */}
      <section className="categories">
        <h2>Fragrances</h2>
        <div className="category-items">
          {fragrancesItems.length > 0 ? (
            fragrancesItems.map((product) => (
              <div className="category-item" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn-buy">
                  Buy Now
                </Link>
              </div>
            ))
          ) : (
            <p>No fragrances products available.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
