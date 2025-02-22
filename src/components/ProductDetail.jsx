import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch product detail')
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) {
    return <div className="loading">Loading product detail...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  if (!product) {
    return <div className="not-found">Product not found</div>
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-detail-container">
      <img src={product.thumbnail} alt={product.title} className="detail-image" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>Price: ${product.price}</h4>
        <button onClick={handleAddToCart} className="btn-add-cart">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
