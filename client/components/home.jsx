'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
      <Link to='/summary'>summary</Link>
    </div>
  );
};

export default Home;
