const initialState = {
  products: [
    {
      id: 1,
      title: 'men clothes',
      category: ['clothes', 'male'],
    },
    {
      id: 2,
      title: 'women clothes',
      category: ['clothes', 'female'],
    },
    {
      id: 3,
      title: 'boy clothes',
      category: ['clothes', 'male'],
    },
    {
      id: 4,
      title: 'girl clothes',
      category: ['clothes', 'female'],
    },
    {
      id: 5,
      title: 'jeans',
      category: ['clothes', 'unisex'],
    },
    {
      id: 6,
      title: 'socks',
      category: ['footwear', 'unisex'],
    },
    {
      id: 7,
      title: 'shoes',
      category: ['footwear', 'unisex'],
    },
    {
      id: 8,
      title: 'eyeglasses',
      category: ['headware', 'unisex'],
    },
    {
      id: 9,
      title: 'wristwatch',
      category: ['handwear', 'unisex'],
    },
  ],
  productsShowed: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        productsShowed: products,
      };

    default:
      return state;
  }
};

export default productsReducer;
