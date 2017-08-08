'use strict';

import React from 'react';
import { Route } from 'react-router-dom';

import Home    from '../presentations/home.jsx';
import Summary from './summary-handler.jsx';
import LegalName from './legal-name.jsx';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path="/summary" component={Summary} />
        <Route path="/" exact component={Home} />
        <Route path="/about-me/names" component={LegalName} />
      </div>
    );
  }
}

export default Router;
