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
  let locale      = props.locale;
  return (
    <div className='navigation-buttons row'>
      <hr />
      <ErrorMessageBox
        errorMessage  = { props.errorMessage }
        locale        = { locale }
      />
      <ContinueButton
        disabled  = { disabled }
        hidden    = { hidden }
        locale    = { locale }
        />
      <BackButton
        onBack  = { props.onBack }
        locale  = { locale }
      />
    </div>
  );
};

export default NavigationButtons;
