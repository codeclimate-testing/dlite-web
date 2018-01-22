'use strict';

import React          from 'react';
import ContinueButton from './continue-button.jsx';
import BackButton     from './back-button.jsx';

import { hasValue }   from '../helpers/data/validations';
import errorClass     from '../helpers/validations/error-class';

const ErrorMessageBox = (props) => {
  let className = errorClass(props);
  if (!hasValue(className)) { return null; }

  className += ' message-box';

  return (
    <div className={className}>
      <div className='unit error-icon'></div>
      &nbsp;
      {props.errorMessage}
    </div>
  );
};

const NavigationButtons = (props) => {
  const disabled = props.continueDisabled;
  const hidden = props.continueHidden;
  return (
    <div className='navigation-buttons row'>
      <hr />
      <ErrorMessageBox errorMessage={props.errorMessage} />
      <ContinueButton disabled={disabled} hidden={hidden} />
      <BackButton onBack={props.onBack} />

    </div>
  );
};

export default NavigationButtons;
