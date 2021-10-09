import { combineReducers, createStore } from 'redux';
import productsReducer from './products/reducer';

const rootReducer = combineReducers({ productsReducer });

const store = createStore(rootReducer);

export { store };
