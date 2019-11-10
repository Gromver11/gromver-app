import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './containers/FormContainer';
import TableOfResultContainer from './containers/TableOfResultContainer';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="main-content">
        <Route path="/" component={FormContainer} />
        <Route path="/:info" component={TableOfResultContainer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
