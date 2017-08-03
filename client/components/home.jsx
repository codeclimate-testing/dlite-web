'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import Summary from './summary.jsx';

class Home extends React.Component {
  render () {
    return (
      <div className='home-page'>
        <Link to='/summary'>summary</Link>
      </div>
    );
  }
}

export default Home;
