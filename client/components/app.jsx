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
  <Provider store={createStore(
    reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>,
  document.getElementById('app')
);
