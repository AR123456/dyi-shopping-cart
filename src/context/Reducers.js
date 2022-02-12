export const cartReducer = (state, action) => {
  // setting up on action for which to run the switch case
  // functionality to add and remove from cart

  switch (action.type) {
    case "ADD_TO_CART":
      // state and manipulated cart state
      // need type and payload
      // payload is what we are adding to the cart
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      // filter out the removed product
      // filter out if action.payload is not add to cart
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      // if it is in the cart change the quantity
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
