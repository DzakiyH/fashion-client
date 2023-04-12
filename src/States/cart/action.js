import axios from 'axios';

export const getCartProducts = () => {
  try {
    const request = axios.get(`${process.env.REACT_APP_SERVER_HOST}/cart`, {
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
    `${process.env.REACT_APP_SERVER_HOST}/cart/update-quantity`,
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
    `${process.env.REACT_APP_SERVER_HOST}/cart/delete-product/${id}`,
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
  const request = axios.delete(
    `${process.env.REACT_APP_SERVER_HOST}/cart/delete-cart/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return (dispatch) => {
    request.then(() => {
      dispatch({
        type: 'EMPTY_CART',
      });
    });
  };
};

export const getAllOrders = () => {
  const request = axios.get(`${process.env.REACT_APP_SERVER_HOST}/order`, {
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
    const request = axios.get(
      `${process.env.REACT_APP_SERVER_HOST}/order/address`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

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
