import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import api from '../middleware/api'

const configureStore = preloadedState => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(api)))
}

export default configureStore
