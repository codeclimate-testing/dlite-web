'use strict'

import React        from 'react';
import LinkButton   from './link-button.jsx';

const PageSummary = (props) => {
  return (
    <div className='summary-section'>
      <div>
        {props.children}
      </div>
      <LinkButton 
        to={props.to}
        linkText='Edit'
        className='summary'
      />
    </div>
  )
};

export default PageSummary