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
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  // Wrap App component instance within Provider
  // Provider makes the Redux store available to the connect() calls in the component hierarchy   
  <Provider store={createStore( reducers )}>
    <App />
  </Provider>,
  document.getElementById('app')
);
