'use strict';

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Summary from './summary.jsx';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/summary'>summary</Link>
          <Route path="/summary" component={Summary} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
