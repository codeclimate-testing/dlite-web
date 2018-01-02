'use strict'

import React        from 'react';
import LinkButton   from './link-button.jsx';

const PageSummaryLink = (props) => {
  return (
    <div className='summary-section'>
      <div className='flex'>
        <div>
          {props.children}
        </div>
        <LinkButton 
          to={props.to}
          linkText='Edit'
          className='summary'
        />
      </div>
      <hr/>
    </div>
  )
};

export default PageSummaryLink