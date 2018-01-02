'use strict'

import React    from 'react';

const SummaryItem = (props) => {
  return (
    <div className='summary-item'>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
};

export default SummaryItem