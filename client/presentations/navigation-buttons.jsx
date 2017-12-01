'use strict';

import React from 'react';
import ContinueButton from './continue-button.jsx';

const NavigationButtons = (props) => {
  return (
    <div className='navigation-buttons'>
      <ContinueButton disabled={props.continueDisabled} />
      <button onClick={props.onBack}>Back</button>
    </div>
  );
};

export default NavigationButtons;
