'use strict';

import React          from 'react';
import ContinueButton from './continue-button.jsx';
import BackButton     from './back-button.jsx';

import { hasValue }   from '../helpers/data/validations';
import errorClass     from '../helpers/validations/error-class';
import { ErrorMessageBox } from './validations.jsx'


const NavigationButtons = (props) => {
  const disabled  = props.continueDisabled;
  const hidden    = props.continueHidden;
  return (
    <div className='navigation-buttons row'>
      <hr />
      <ErrorMessageBox
        errorMessage  = { props.errorMessage }
      />
      <ContinueButton
        disabled  = { disabled }
        hidden    = { hidden }
      />
      <BackButton
        onBack  = { props.onBack }
      />
    </div>
  );
};

export default NavigationButtons;
