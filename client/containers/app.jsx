'use strict'

import React                                from 'react';
import ReactDOM                             from 'react-dom';
import { Router }                           from 'react-router-dom';
import { Provider }                         from "react-redux";
import { createStore, applyMiddleware }     from "redux";
import createBrowserHistory                 from 'history/createBrowserHistory'
import thunk                                from 'redux-thunk';
import { composeWithDevTools }              from 'redux-devtools-extension/developmentOnly';

import reducers                             from "../reducers";
import Routes                               from './routes.jsx';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const history = createBrowserHistory();

history.listen( () => {
  window.scrollTo(0, 0)
});

class App extends React.Component {
  constructor() {
    super();
    window.__reactHistory = history;
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
