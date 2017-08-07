'use strict';

import React from 'react';
import { Route } from 'react-router-dom';

import Home    from './home.jsx';
import Summary from './summary.jsx';
import Names from '../containers/names.jsx';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path="/summary" component={Summary} />
        <Route path="/" exact component={Home} />
        <Route path="/about-me/names" component={Names} />
      </div>
    );
  }
}

export default Router;
