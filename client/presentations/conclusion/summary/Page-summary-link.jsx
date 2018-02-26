'use strict'

import React            from 'react';
import { Link }         from 'react-router-dom';
import { pathForPage }  from '../../../helpers/navigation/page';

const PageSummaryLink = (props) => {
  let className = `${props.name} summary edit button`;
  let nextPathKey = props.summary || 'summary';

  let linkTo = {
    pathname: pathForPage(props.name),
    state: { nextAddress: nextPathKey }
  };

  let app = props.app || '';
  const handleClick = (e) => {
    return props.onFlowChange(app);
  };

  return (
    <div className='summary-section' onClick={handleClick}>
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
