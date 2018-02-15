'use strict'

import React            from 'react';
import { Link }         from 'react-router-dom';
import { pathForPage }  from '../helpers/navigation/page';

const PageSummaryLink = (props) => {
  let className = `${props.name} summary edit button`;

  let linkTo = {
    pathname: pathForPage(props.name),
    state: { nextAddress: '/summary' }
  };

  return (
    <div className='summary-section'>
      <div className='row'>
        <div className='unit summary-content'>
          {props.children}
        </div>
        <div className='shadow-container unit-right'>
          <Link
            to={linkTo}
            className= {className}
          >
            <div className='unit edit-icon'></div>
            <div className='unit text-area'>Edit</div>
          </Link>
        </div>
      </div>
      <hr/>
    </div>
  )
};

export default PageSummaryLink
