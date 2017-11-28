'use strict';

import React from 'react';

const SectionHeader = (props) => {
  return (
    <div className='section-header row'>
      <h3>{props.number} &raquo; {props.name}</h3>
      <hr />
    </div>
  );
};

export default SectionHeader;
