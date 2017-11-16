'use strict';

import React from 'react';

const BackButton = (props) => {
  return (
    <div className='shadow-container'>
      <button onClick={props.onBack} > Back </button>
    </div>
  );
};

export default BackButton;
