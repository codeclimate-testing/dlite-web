'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import ResidenceAddress  from '../containers/residence-address-form-container.jsx';
import MailingAddress  from '../containers/mailing-address-form-container.jsx';
import HomeLink from './home-link.jsx';

const Addresses = (props) => {
  return (
    <div className='both-addresses'>
      <HomeLink />
      <div className='row'>
        <div className='inner border'>
          <ResidenceAddress />
        </div>
      </div>
      <div className='row'>
        <div className='inner border'>
          <MailingAddress />
        </div>
      </div>
    </div>
  )
};


export default Addresses;
