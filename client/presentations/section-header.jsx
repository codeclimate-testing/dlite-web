'use strict';

import React from 'react';
import * as dataPresent     from '../helpers/data-present';

const NumberPrefix = (props) => {
  if (!dataPresent.value(props.number)) { return null; }
  return <span>{props.number} &raquo; </span>;
};

const SectionHeader = (props) => {
  if (!dataPresent.value(props.name)) { return null; }

  return (
    <div className='section-header row'>
      <h3>
        <NumberPrefix {...props} />
        {props.name}
      </h3>
      <hr />
    </div>
  );
};

export default SectionHeader;
