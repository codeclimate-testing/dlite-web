'use strict';

import React                from 'react';
import { Link }             from 'react-router-dom';
import { addPath }          from '../../../helpers/alice-path';


const AddAppLink = (props) => {

  let linkTo = {
    pathname: addPath(props.to)
  };

  let app = props.app || '';
  const handleClick = (e) => {
    e.preventDefault();
    props.onFlowChange(app);
  };

  return (
    <div className='summary-section' onClick={handleClick}>
      <div className='row'>
        <div className='unit summary-content'>
          {props.children}
        </div>
        <div className='shadow-container unit-right'>
          <Link
            to        = {linkTo}
            className = 'summary add edit button'
          >
            <div className='unit edit-icon'></div>
            <div
              className='unit text-area'
            >
              Add
            </div>
          </Link>
        </div>
      </div>
      <hr/>
    </div>
  )
};

export default AddAppLink;
