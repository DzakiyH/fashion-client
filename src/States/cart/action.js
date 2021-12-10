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

export const getAllCategories = () => {
  const request = axios.get('http://localhost:8000/product/category');

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_CATEGORIES',
        payload: response.data.data,
      });
    });
  };
};
