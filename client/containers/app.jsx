'use strict'

import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../reducers";
import Routes from './routes.jsx';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore( reducers )}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
