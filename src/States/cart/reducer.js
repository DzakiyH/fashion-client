const initialState = {
  cart: {},
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CART_PRODUCTS':
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
