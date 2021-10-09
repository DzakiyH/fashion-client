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
      category: ['headwear', 'unisex'],
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
      category: 'all',
      isActive: false,
    },
    {
      id: 2,
      category: 'clothes',
      isActive: false,
    },
    {
      id: 3,
      category: 'male',
      isActive: false,
    },
    {
      id: 4,
      category: 'female',
      isActive: false,
    },
    {
      id: 5,
      category: 'unisex',
      isActive: false,
    },
    {
      id: 6,
      category: 'footwear',
      isActive: false,
    },
    {
      id: 7,
      category: 'headwear',
      isActive: false,
    },
    {
      id: 8,
      category: 'handwear',
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
    case 'FEATURED_PRODUCTS':
      if (payload === 'all') {
        return {
          ...state,
          productsShowed: state.products,
        };
      } else {
        const featuredProducts = state.products.filter((product) => {
          return product.category.includes(payload);
        });

        return {
          ...state,
          productsShowed: featuredProducts,
        };
      }
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
