'use strict'

import React    from 'react';

const SummaryItem = (props) => {
  return (
    <div className='summary-item'>
      <h4>{props.title}</h4>
      <div>{props.text}</div>
    </div>
  )
};

export default SummaryItem
