import axios from 'axios';

export const getCartProducts = () => {
  try {
    const request = axios.get('http://localhost:8000/cart', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'GET_CART_PRODUCTS',
          payload: response.data.data,
        });
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProductQuantity = (quantity, product_id) => {
  const request = axios.put(
    'http://localhost:8000/cart/update-quantity',
    { quantity, product_id },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'UPDATE_PRODUCT_QUANTITY',
        payload: response.data.data,
      });
    });
  };
};

export const removeProduct = (id) => {
  const request = axios.delete(
    `http://localhost:8000/cart/delete-product/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return (dispatch) => {
    request.then(() => {
      dispatch({
        type: 'REMOVE_PRODUCT',
        payload: id,
      });
    });
  };
};

export const emptyCart = (id) => {
  const request = axios.delete(`http://localhost:8000/cart/delete-cart/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return (dispatch) => {
    request.then(() => {
      dispatch({
        type: 'EMPTY_CART',
      });
    });
  };
};

export const getAllOrders = () => {
  const request = axios.get(`http://localhost:8000/order`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_ALL_ORDERS',
        payload: response.data.data,
      });
    });
  };
};

export const getUserAddress = () => {
  try {
    const request = axios.get('http://localhost:8000/order/address', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'GET_USER_ADDRESS',
          payload: response.data.data,
        });
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};
