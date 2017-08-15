'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const Home = () => {
  return (
    <ul className='home-page'>
      <li>
        <Link to={ alicePath('/summary') }>summary</Link>
      </li>
      <li>
        <Link to={ alicePath('/about-me/names') }>about-me-names</Link>
      </li>
      <li>
        <Link to={ alicePath('/about-me/addresses') }>addresses</Link>
      </li>
      <li>
        <Link to={ alicePath('/about-me/appearance/hair') }>hair-color</Link>
      </li>
    </ul>
  );
};

export default Home;
