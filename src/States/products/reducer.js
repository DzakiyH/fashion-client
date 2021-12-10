const initialState = {
  shops: [],
  categories: [],
  products: [],
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
  product: {},
  productsShowed: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      const products = [];
      for (let i = 0; i < payload.length; i++) {
        const product = payload[i];
        product.stateId = i + 1;
        products.push(product);
      }

      return {
        ...state,
        productsShowed: payload,
        shops: payload,
        products,
      };

    case 'GET_CATEGORIES':
      payload.push({
        id: 0,
        name: 'all',
      });
      const categories = payload.map((category) => {
        return {
          ...category,
          id: category.id + 1,
          isActive: false,
        };
      });

      categories.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

      return {
        ...state,
        categories,
      };

    case 'FEATURED_PRODUCTS':
      if (payload === 'all') {
        return {
          ...state,
          productsShowed: state.shops,
        };
      } else {
        const productsByCategory = state.shops.filter((product) => {
          return product.categories.name.includes(payload);
        });

        return {
          ...state,
          productsShowed: productsByCategory,
        };
      }

    case 'FEATURE_ACTIVE':
      const newCategories = state.categories.map((category) => {
        return {
          ...category,
          isActive: category.id === payload ? true : false,
        };
      });

      return {
        ...state,
        categories: newCategories,
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

    case 'ADD_PRODUCT':
      const product = state.products.find((item) => {
        return item.id === payload;
      });

      return {
        ...state,
        product,
      };

    case 'EMPTY_PRODUCT':
      return {
        ...state,
        product: [],
      };

    default:
      return state;
  }
};

export default productsReducer;
