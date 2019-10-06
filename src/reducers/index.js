import { combineReducers } from 'redux'
import { MainReducer } from './MainReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  MainReducer,
  form: formReducer,
})
export default rootReducer
