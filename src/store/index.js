import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import history from '../history';
import reducers from '../reducers';

const reactRouterMiddleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    promiseMiddleware(),
    reactRouterMiddleware,
    createLogger()
  ),
  autoRehydrate()
);

persistStore(store);

export default store;