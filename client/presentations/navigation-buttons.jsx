'use strict';

import React          from 'react';
import ContinueButton from './continue-button.jsx';
import BackButton     from './back-button.jsx';

const NavigationButtons = (props) => {
  return (
    <div className='navigation-buttons row'>
      <hr />
      <ContinueButton disabled={props.continueDisabled} visible={props.visible}/>
      <BackButton onBack={props.onBack} />
    </div>
  );
};

export default NavigationButtons;
