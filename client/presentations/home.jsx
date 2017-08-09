'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
    <Link to='/summary'>summary</Link>
    {' | '}
    <Link to="/about-me/names">about-me-names</Link>
    </div>
  );
};

export default Home;
