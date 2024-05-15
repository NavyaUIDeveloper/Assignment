import React from 'react';
import './styles/CartPopup.css';

const CartPopup = ({ isCartOpen, toggleCart, cart, updateQuantity, removeFromCart }) => {
  const totalCartItems = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {isCartOpen && (
        <div className="overlay">
          <div className="cart-popup">
            <div className="cart-header">
              <h2>Cart</h2>
              <button className="close-btn" onClick={toggleCart}>
                &times;
              </button>
            </div>
            {Object.keys(cart).length === 0 ? (
              <p>Cart is Empty!</p>
            ) : (
              <div>
                <div className="cart-items">
                  {Object.values(cart).map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-details">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </div>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <p>${item.price * item.quantity}</p>
                      <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <p>Total Items: {totalCartItems}</p>
                  <p>Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopup;