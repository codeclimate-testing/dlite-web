'use strict';

import React          from 'react';
import { Link }       from 'react-router-dom';
import { iddlPath }   from '../helpers/alice-path';

const LinkButton = (props) => {
  let className = 'button arrow-button ' + (props.className || '');

  return (
    <div className='unit'>
      <div className='shadow-container'>
        <Link
          to={{
            pathname: iddlPath(props.to),
            state: {
              nextAddress: props.nextAddress
            }
          }}
          className={className}
        >
          {props.children ? props.children : props.linkText}
        </Link>
      </div>
    </div>
  );
};

export default LinkButton;
