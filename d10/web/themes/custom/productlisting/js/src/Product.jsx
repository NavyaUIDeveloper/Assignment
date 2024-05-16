import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div key={product.nid} className='product-list-items'>
      <div className='card-wrapper'>
        <div className='product-list-wrapper'>
          <div className='product-image'>
            <img src={product.field_product_image} alt={product.field_product_name} />
          </div>
          <h2 className='product-name'>{product.field_product_name}</h2>
          <div className='product-cart-wrapper'>
            <div className='selling-price'>${product.field_selling_price}</div>
            <div className='add-to-cart'><button onClick={() => addToCart(product)}>Add to Cart</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;