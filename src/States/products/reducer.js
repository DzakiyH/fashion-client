const initialState = {
  shops: [
    {
      id: 1,
      title: 'men clothes',
      category: ['clothes', 'male'],
      source: '/images/men_clothes.jpg',
      rating: 3,
    },
    {
      id: 2,
      title: 'women clothes',
      category: ['clothes', 'female'],
      source: '/images/women_clothes.jpg',
      rating: 4,
    },
    {
      id: 3,
      title: 'boy clothes',
      category: ['clothes', 'male'],
      source: '/images/boy_clothes.jpg',
      rating: 2,
    },
    {
      id: 4,
      title: 'girl clothes',
      category: ['clothes', 'female'],
      source: '/images/girl_clothes.jpg',
      rating: 3,
    },
    {
      id: 5,
      title: 'jeans',
      category: ['clothes', 'unisex'],
      source: '/images/jeans.jpg',
      rating: 1,
    },
    {
      id: 6,
      title: 'socks',
      category: ['footwear', 'unisex'],
      source: '/images/socks.jpg',
      rating: 1,
    },
    {
      id: 7,
      title: 'shoes',
      category: ['footwear', 'unisex'],
      source: '/images/shoes.jpg',
      rating: 2,
    },
    {
      id: 8,
      title: 'eyeglasses',
      category: ['headwear', 'unisex'],
      source: '/images/eyeglasses.jpg',
      rating: 3,
    },
    {
      id: 9,
      title: 'wristwatch',
      category: ['handwear', 'unisex'],
      source: '/images/watch.jpg',
      rating: 3,
    },
  ],
  products: [
    {
      id: 1,
      title: 'men clothes',
      source: '/images/product_men.png',
    },
    {
      id: 2,
      title: 'women clothes',
      source: '/images/product_women.jpg',
    },
    {
      id: 3,
      title: 'boy clothes',
      source: '/images/product_boy.jpg',
    },
    {
      id: 4,
      title: 'girl clothes',
      source: '/images/product_girl.jpg',
    },
    {
      id: 5,
      title: 'jeans',
      source: '/images/product_jeans.jpg',
    },
    {
      id: 6,
      title: 'socks',
      source: '/images/product_socks.jpg',
    },
    {
      id: 7,
      title: 'shoes',
      source: '/images/product_shoes.jpg',
    },
    {
      id: 8,
      title: 'eyeglasses',
      source: '/images/product_eyeglasses.jpg',
    },
    {
      id: 9,
      title: 'wristwatch',
      source: '/images/product_wristwatch.jpg',
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
  filters: [
    {
      id: 1,
      filter: 'all',
      isActive: false,
    },
    {
      id: 2,
      filter: 1,
      isActive: false,
    },
    {
      id: 3,
      filter: 2,
      isActive: false,
    },
    {
      id: 4,
      filter: 3,
      isActive: false,
    },
    {
      id: 5,
      filter: 4,
      isActive: false,
    },
  ],
  cart: [],
  productsShowed: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        productsShowed: state.shops,
      };

    case 'FEATURED_PRODUCTS':
      if (payload === 'all') {
        return {
          ...state,
          productsShowed: state.shops,
        };
      } else {
        const featuredProducts = state.shops.filter((product) => {
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

    case 'FILTER_BY_RATING':
      if (payload === 'all') {
        return {
          ...state,
          productsShowed: state.shops,
        };
      } else {
        const filteredProducts = state.shops.filter((product) => {
          return product.rating === payload;
        });

        return {
          ...state,
          productsShowed: filteredProducts,
        };
      }

    case 'FILTER_ACTIVE':
      const newFilters = state.filters.map((filter) => {
        return {
          ...filter,
          isActive: filter.id === payload ? true : false,
        };
      });

      return {
        ...state,
        filters: newFilters,
      };

    case 'SEARCH_PRODUCTS':
      if (payload === '') {
        return {
          ...state,
          productsShowed: state.shops,
        };
      } else {
        const productSearched = state.shops.filter((product) => {
          return product.title.includes(payload);
        });

        return {
          ...state,
          productsShowed: productSearched,
        };
      }

    default:
      return state;
  }
};

export default productsReducer;
