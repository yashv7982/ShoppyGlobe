import React, { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${apiUrl}/cart`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setCart(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCart();
  }, [apiUrl, token]);

  if (!cart) return <div>Your cart is empty.</div>;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.items && cart.items.length > 0 ? (
        cart.items.map(item => (
          <div key={item.product} className="cart-item">
            <p>Product ID: {item.product}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
