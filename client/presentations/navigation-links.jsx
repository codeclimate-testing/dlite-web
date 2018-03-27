'use strict';

import React          from 'react';
import LinkButton     from './link-button.jsx';

const NavigationLinks = (props) => {
  return (
    <div className='row navigation-buttons'>
      <div className='unit'>
        <div className='shadow-container'>
          <LinkButton
            to={props.backwardsAddress}
            className='backwards'
            linkText='Back'
          />
        </div>
      </div>

      <div className='unit-right'>
        <div className='shadow-container'>
          <LinkButton
            to={props.forwardAddress}
            className='forward'
            linkText='Next'
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationLinks;


