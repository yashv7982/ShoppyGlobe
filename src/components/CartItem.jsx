import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions'

function CartItem({ item }) {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeFromCart(item.id))
  }

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={handleRemove} className="btn-remove">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
