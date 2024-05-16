const initialState = {
  cart: {}
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Implement logic to add to cart
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.product.nid]: {
            id: action.payload.product.nid,
            name: action.payload.product.field_product_name,
            price: action.payload.product.field_selling_price,
            stock: action.payload.product.field_product_stock,
            quantity: state.cart[action.payload.product.nid] ? state.cart[action.payload.product.nid].quantity + 1 : 1,
            image: action.payload.product.field_product_image,
          }
        }
      };
    case 'REMOVE_FROM_CART':
      // Implement logic to remove from cart
      const updatedCart = { ...state.cart };
      delete updatedCart[action.payload.productId];
      return {
        ...state,
        cart: updatedCart,
      };
    case 'UPDATE_QUANTITY':
      // Implement logic to update quantity
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.productId]: {
            ...state.cart[action.payload.productId],
            quantity: action.payload.newQuantity,
          }
        }
      };
    default:
      return state;
  }
};

export default cartReducer;
