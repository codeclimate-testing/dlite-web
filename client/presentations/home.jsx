'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const Home = () => {
  return (
    <div className='home-page'>
      <Link to={ alicePath('/summary') }>summary</Link>
      {' | '}
      <Link to={ alicePath('/about-me/names') }>about-me-names</Link>
    </div>
  );
};

export default Home;
