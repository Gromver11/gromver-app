import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './components/UserForm';
import TableOfResult from './components/TableOfResults';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Paginate from './components/Paginate';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="main-content">
        <Route path="/" component={UserForm} />
        <Route path="/:info" component={TableOfResult} />
        <Route path="/:info" component={Paginate} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
