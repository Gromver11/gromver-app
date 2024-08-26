import { configureStoreDev } from './store/configureStore.dev';
import { configureStore } from './store/configureStore.prod';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import React from 'react';
import { TableOfResults, UserForm, Paginate } from './components';
import { createRoot } from 'react-dom/client';

const store =
  process.env.NODE_ENV === 'production'
    ? configureStore()
    : configureStoreDev();

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-content">
          <Route path="/" component={UserForm} />
          <Route path="/:info" component={TableOfResults} />
          <Route path="/:info" component={Paginate} />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
