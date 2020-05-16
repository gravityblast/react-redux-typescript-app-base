import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Middleware, MiddlewareAPI, Dispatch } from 'redux';
import createRootReducer from './reducers';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Home from './components/Home';

const logger: Middleware = ({ getState }: MiddlewareAPI) => (next: Dispatch) => action => {
  console.log('dispatch', action);
  const returnValue = next(action);
  console.log('state', getState());
  return returnValue;
}

const history = createBrowserHistory();

let middlewares: Middleware[] = [
  routerMiddleware(history),
  thunkMiddleware,
];

if (true || process.env.NODE_ENV !== 'production') {
  middlewares = [
    ...middlewares,
    logger
  ];
}

const store = createStore(
  createRootReducer(history),
  applyMiddleware(...middlewares),
);

/* store.dispatch<any>(initSession()); */

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Layout>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route render={() => "page not found"} />
          </Switch>
        </ConnectedRouter>
      </Layout>
    </Provider>
  </ErrorBoundary>,

  document.getElementById("root")
);
