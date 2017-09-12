'use strict';

import React from 'react';

const ContinueButton = (props) => {
  return (
    <div className='shadow-container'>
      <input
        type="submit"
        value="Continue"
        disabled={props.disabled}
      />
    </div>
  );
};

export default ContinueButton;
