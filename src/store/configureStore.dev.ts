import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { api } from '../middleware/api';

export const configureStoreDev = (): ReturnType<typeof createStore> => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(api)));
};
