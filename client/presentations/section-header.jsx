'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { hasValue } from '../helpers/data/validations';

const SectionHeader = (props) => {
  if (!hasValue(props.name)) { return null; }

  return (
    <p id='section-header' className='row secondary-header' tabIndex='-1'>
      {props.name || '&nbsp;'}
    </p>
  );
};

export default SectionHeader;
