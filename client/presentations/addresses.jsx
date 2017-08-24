'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import ResidenceAddress  from '../containers/residence-address-form-container.jsx';
import MailingAddress  from '../containers/mailing-address-form-container.jsx';
import alicePath from '../helpers/alice-path';

const Addresses = (props) => {
  return (
    <div>
      <Link to={ alicePath('/') }>Back to application</Link>
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