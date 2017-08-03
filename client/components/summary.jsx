'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class Summary extends React.Component {
  render () {
    return (
      <div className='summary-page'>
        <Link to='/' >Back to application</Link>
        <p>No information has been entered yet</p>
      </div>
    );
  }
}

export default Summary;
