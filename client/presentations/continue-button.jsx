'use strict';

import React from 'react';

const ContinueButton = (props) => {
  return (
    <div className='shadow-container unit-right'>
      <button className='arrow-button forward' disabled={props.disabled}>
        Next
      </button>
    </div>
  );
};

export default ContinueButton;
