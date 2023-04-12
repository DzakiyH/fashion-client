import axios from 'axios';

export const getAllProducts = () => {
  const request = axios.get(`${process.env.REACT_APP_SERVER_HOST}/product`);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_PRODUCTS',
        payload: response.data.data,
      });
    });
  };
};

export const getAllCategories = () => {
  const request = axios.get(
    `${process.env.REACT_APP_SERVER_HOST}/product/category`
  );

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'GET_CATEGORIES',
        payload: response.data.data,
      });
    });
  };
};
