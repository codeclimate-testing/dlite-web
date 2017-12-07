'use strict';

import React from 'react';

const ContinueButton = (props) => {
  let visibility = {
    visibility: props.visible !== false ? 'visible' : 'hidden'
  };

  return (
    <div className='shadow-container unit-right' style={visibility}>
      <button className='arrow-button forward' disabled={props.disabled} >
        Next
      </button>
    </div>
  );
};

export default ContinueButton;
