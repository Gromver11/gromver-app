import React from 'react'
import ReactDOM from 'react-dom'
import FormContainer from './containers/FormContainer'
import TableOfResultContainer from './containers/TableOfResultContainer'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
    <TableOfResultContainer />
  </Provider>,
  document.getElementById('root')
)
