'use strict';

import React          from 'react';
import LinkButton     from './link-button.jsx';

const NavigationLinks = (props) => {
  return (
    <div className='row navigation-buttons'>
      <div className='shadow-container unit'>
        <LinkButton
          to={props.backwardsAddress}
          className='backwards'
          linkText='Back'
        />
      </div>

      <div className='shadow-container unit-right'>
        <LinkButton
          to={props.forwardAddress}
          className='forward'
          linkText='Next'
        />
      </div>
    </div>
  );
};

export default NavigationLinks;


