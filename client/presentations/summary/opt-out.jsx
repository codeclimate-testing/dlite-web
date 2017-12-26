'use strict';

import React from 'react';

import { hasValue } from '../../helpers/data/validations';

const OptOut = (props) => {
  if (!hasValue(props.optOut)) { return null; }

  return (
    <div className='summary-page'>
      <p> Choose opt out: {props.optOut} </p>
    </div>
  );
};

export default OptOut;
