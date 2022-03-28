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
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
    case "CHANGE_CART_QTY":
      // if it is in the cart change the quantity
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      // invert the value
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      // invert fastDelivery this is coming from context
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      // this is being set by app,, rating.js so is payload
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      // this is also coming from app in action.payload
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      // set filters back to what is initially passed from state in context.js useReducer hook
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
};
