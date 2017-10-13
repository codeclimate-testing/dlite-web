'use strict'

import React                        from 'react';
import ReactDOM                     from 'react-dom';
import { BrowserRouter, Router }    from 'react-router-dom';
import { Provider }                 from "react-redux";
import { createStore }              from "redux";
import createBrowserHistory         from 'history/createBrowserHistory'

import reducers                     from "../reducers";
import Routes                       from './routes.jsx';

const history = createBrowserHistory()

class App extends React.Component {
  constructor() {
    super();
    window.__reactHistory = history;
  }
  render() {
    return (
      <Router history={history}>
        <Provider store={createStore( reducers )}>
            <Routes />
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));