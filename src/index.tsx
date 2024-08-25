import ReactDOM from 'react-dom';
import React from 'react';
import UserForm from './components/UserForm/UserForm';
import TableOfResults from './components/TableOfResults/TableOfResults';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Paginate from './components/Paginate/Paginate';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="main-content">
        <Route path="/" component={UserForm} />
        <Route path="/:info" component={TableOfResults} />
        <Route path="/:info" component={Paginate} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
