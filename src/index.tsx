import ReactDOM from 'react-dom';
import {configureStoreDev}  from './store/configureStore.dev';
import { configureStore } from './store/configureStore.prod';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import {TableOfResults, UserForm, Paginate} from './components'

const store = process.env.NODE_ENV === 'production' ? configureStore({}) : configureStoreDev({})
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
