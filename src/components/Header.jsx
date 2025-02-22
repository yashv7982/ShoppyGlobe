import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">ShoppyGlobe</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
