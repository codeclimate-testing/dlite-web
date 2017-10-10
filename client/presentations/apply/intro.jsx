'use strict';

import React      from 'react';
import { Link }   from 'react-router-dom';

import HomeLink   from '../home-link.jsx';
import alicePath  from '../../helpers/alice-path';

const Intro = (props) => {

  const linkAddress = '/about-me/legal-name';

  return (
    <div>
      <HomeLink />

      <div className='intro-info'>
        <h3>Welcome to the Online Driver License application!</h3>

        <h4>This form is broken in 4 sections:</h4>
        <ol className='decimal-list'>
          <li>My Basics</li>
          <li>License History</li>
          <li>Voluntary Services</li>
          <li>Voter Registration</li>
        </ol>
        <p>The DMV cares about your privacy. We will protect your data.</p>

        <hr />
        <p>The online form takes most customers<br />
          <b>10 minutes</b></p>

        <Link to={alicePath(linkAddress)} >
          <div className='shadow-container'>
            <input type="submit" value="Get Started" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Intro;