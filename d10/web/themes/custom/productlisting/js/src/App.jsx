import React, { useState, useEffect } from 'react';
import './styles/App.css';
import CartPopup from './CartPopup';
import Product from './Product';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Fetch products from API
    fetch('/api/v2/products?_format=json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.nid]) {
      if (updatedCart[product.nid].quantity < product.field_product_stock) {
        updatedCart[product.nid] = {
          ...updatedCart[product.nid],
          quantity: updatedCart[product.nid].quantity + 1,
        };
      }
    } else {
      updatedCart[product.nid] = {
        id: product.nid,
        name: product.field_product_name,
        price: product.field_selling_price,
        stock: product.field_product_stock,
        quantity: 1,
        image: product.field_product_image, // Add this line to include image in cart item
      };
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };
    delete updatedCart[productId];
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = { ...cart };
    if (newQuantity === 0) {
      delete updatedCart[productId];
    } else {
      updatedCart[productId] = {
        ...updatedCart[productId],
        quantity: newQuantity,
      };
    }
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='product-list-view-page'>
          {products.map((product) => (
            <Product key={product.nid} product={product} addToCart={addToCart} />
          ))}
          <div className='view-cart-block'>
            <button onClick={toggleCart} className={Object.keys(cart).length > 0 ? "cart-filled" : ""}>
              View Cart {Object.keys(cart).length > 0 && `(${Object.values(cart).reduce((total, item) => total + item.quantity, 0)})`}
            </button>
          </div>
          <CartPopup
            isCartOpen={isCartOpen}
            toggleCart={toggleCart}
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      )}
    </div>
  );
}

export default App;