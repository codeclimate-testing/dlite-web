'use strict';

import React from 'react';

import { hasValue } from '../helpers/data/validations';

const NumberPrefix = (props) => {
  if (!hasValue(props.number)) { return null; }
  return <span>{props.number} &raquo; </span>;
};

const SectionHeader = (props) => {
  if (!hasValue(props.name)) { return null; }

  return (
    <div className='section-header row'>
      <h3>
        <NumberPrefix number={props.number} />
        {props.name}
      </h3>
      <hr />
    </div>
  );
};

export default SectionHeader;
