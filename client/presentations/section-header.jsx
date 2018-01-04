'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { hasValue } from '../helpers/data/validations';

const NumberPrefix = (props) => {
  if (!hasValue(props.number)) { return null; }
  return <div className='unit number'>{props.number}</div>
};

const SectionHeader = (props) => {
  if (!hasValue(props.name)) { return null; }

  return (
    <div className='inner'>
      <NumberPrefix number={props.number} />
      <div className='unit name'>{props.name || '&nbsp;'}</div>
    </div>
  );
};

const Header = (props) => {
  return ReactDOM.createPortal(<SectionHeader {...props}/>, document.getElementById('section-header'));
}

export default Header;
