import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import api from '../middleware/api';

export const configureStore = (preloadedState: Record<string,string>) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(api));
};
