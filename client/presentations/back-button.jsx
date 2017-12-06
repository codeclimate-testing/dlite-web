'use strict';

import React from 'react';

const BackButton = (props) => {
  return (
    <div className='shadow-container unit'>
      <button className='arrow-button backwards' onClick={props.onBack} >
        Back
      </button>
    </div>
  );
};

export default BackButton;
