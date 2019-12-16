import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import api from '../middleware/api';

const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState, applyMiddleware(api));
};

export default configureStore;
