'use strict'

import React        from 'react';
import LinkButton   from './link-button.jsx';

const PageSummaryLink = (props) => {
  let className = `${props.name} summary`
  return (
    <div className='summary-section'>
      <div className='flex'>
        <div>
          {props.children}
        </div>
        <LinkButton 
          to        ={ props.to }
          linkText  ='Edit'
          className ={ className }
        />
      </div>
      <hr/>
    </div>
  )
};

export default PageSummaryLink