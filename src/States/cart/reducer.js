const initialState = {
  cart: [],
  orderProducts: [],
  totalPayment: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CART_PRODUCTS':
      let totalPrice = 0;

      for (let i = 0; i < payload.length; i++) {
        totalPrice =
          totalPrice + payload[i].quantity * payload[i].product.price;
      }

      return {
        ...state,
        cart: payload,
        totalPayment: totalPrice,
      };

    case 'UPDATE_PRODUCT_QUANTITY':
      let newTotalPrice = 0;
      const newCart = state.cart.map((product) => {
        const temp = Object.assign({}, product);
        if (product.id === payload.id) {
          temp.quantity = payload.quantity;
        }
        return temp;
      });

      for (let i = 0; i < newCart.length; i++) {
        newTotalPrice =
          newTotalPrice + newCart[i].quantity * newCart[i].product.price;
      }

      return {
        ...state,
        cart: newCart,
        totalPayment: newTotalPrice,
      };

    case 'REMOVE_PRODUCT':
      let remainingPrice = 0;
      const remainingCart = state.cart.filter((product) => {
        return product.id !== payload;
      });

      for (let i = 0; i < remainingCart.length; i++) {
        remainingPrice =
          remainingPrice +
          remainingCart[i].quantity * remainingCart[i].product.price;
      }

      return {
        ...state,
        cart: remainingCart,
        totalPayment: remainingPrice,
      };

    case 'GET_ALL_ORDERS':
      return {
        ...state,
        orderProducts: payload,
      };

    case 'SET_ORDER_PRODUCTS':
      return {
        ...state,
        orderProducts: payload,
      };

    case 'ADD_TOTAL':
      return {
        ...state,
        totalPayment: payload,
      };

    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
