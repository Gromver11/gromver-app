import { createStore, applyMiddleware } from 'redux';
import {rootReducer}  from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../middleware/api';

export const configureStoreDev = (preloadedState: Record<string,string>)=> {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(api))
  );
};
