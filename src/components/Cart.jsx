import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems)

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="btn-checkout">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
