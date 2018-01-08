'use strict';

import React from 'react';
import { Link }     from 'react-router-dom';
import alicePath from '../helpers/alice-path';

const LinkButton = (props) => {
  let className = 'button arrow-button ' + (props.className || '');

  return (
    <div className='shadow-container unit'>
      <Link
        to={{
          pathname: alicePath(props.to),
          state: {
            nextAddress: props.nextAddress
          }
        }}
        className={className}
      >
        {props.linkText}
      </Link>
    </div>
  );
};

export default LinkButton;
