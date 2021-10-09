const initialState = {
  products: [
    {
      id: 1,
      title: 'men clothes',
      category: ['clothes', 'male'],
      source: '/images/men_clothes.jpg',
    },
    {
      id: 2,
      title: 'women clothes',
      category: ['clothes', 'female'],
      source: '/images/women_clothes.jpg',
    },
    {
      id: 3,
      title: 'boy clothes',
      category: ['clothes', 'male'],
      source: '/images/boy_clothes.jpg',
    },
    {
      id: 4,
      title: 'girl clothes',
      category: ['clothes', 'female'],
      source: '/images/girl_clothes.jpg',
    },
    {
      id: 5,
      title: 'jeans',
      category: ['clothes', 'unisex'],
      source: '/images/jeans.jpg',
    },
    {
      id: 6,
      title: 'socks',
      category: ['footwear', 'unisex'],
      source: '/images/socks.jpg',
    },
    {
      id: 7,
      title: 'shoes',
      category: ['footwear', 'unisex'],
      source: '/images/shoes.jpg',
    },
    {
      id: 8,
      title: 'eyeglasses',
      category: ['headware', 'unisex'],
      source: '/images/eyeglasses.jpg',
    },
    {
      id: 9,
      title: 'wristwatch',
      category: ['handwear', 'unisex'],
      source: '/images/watch.jpg',
    },
  ],
  features: [
    {
      id: 1,
      feature: 'clothes',
      isActive: false,
    },
    {
      id: 2,
      feature: 'male',
      isActive: false,
    },
    {
      id: 3,
      feature: 'female',
      isActive: false,
    },
    {
      id: 4,
      feature: 'unisex',
      isActive: false,
    },
    {
      id: 5,
      feature: 'footwear',
      isActive: false,
    },
    {
      id: 6,
      feature: 'headwear',
      isActive: false,
    },
    {
      id: 7,
      feature: 'handwear',
      isActive: false,
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
        productsShowed: state.products,
      };
    case 'FEATURE_ACTIVE':
      const newFeatures = state.features.map((feature) => {
        return {
          ...feature,
          isActive: feature.id === payload ? true : false,
        };
      });

      return {
        ...state,
        features: newFeatures,
      };

    default:
      return state;
  }
};

export default productsReducer;
