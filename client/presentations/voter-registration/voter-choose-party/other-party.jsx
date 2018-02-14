'use strict';

import React from 'react';

import TextInput from '../../text-input.jsx';
import RadioSelector from '../../radio-selector.jsx';
import {
  ErrorIcon,
  ErrorLabel,
  errorClass
} from '../../validations.jsx';
import translations           from '../../../i18n';

const OtherPartyRadio = (props) => {
  return (
    <RadioSelector
      {...props}
      value='Other'
      text={translations.votingRegistration.choosePartyPage.answerOther}
    />
  );
};

const OtherPartyEntry = (props) => {
  const errorMessage = props.validations.otherParty(props);
  const error = errorClass(errorMessage);
  const className = `radio-input-error ${error}`;

  return (
    <div className='radio-input'>
      <div className={ className }>
        <ErrorIcon
          errorClass= { error }
        />
        <ErrorLabel
          errorMessage  = { errorMessage }
          errorClass    = { error }
        />
      </div>
      <RadioSelector
        {...props}
        value=''
        text=''
        selected = { true }
      >
        <TextInput
          {...props}
          id            = 'otherParty'
          name          = 'otherParty'
          value         = { props.politicalPartyChoose.otherParty }
          error         = { error}
          placeholder   = 'Please enter your selection'
        />
      </RadioSelector>
    </div>
  );
};

const OtherParty = (props) => {
  let component;

  if (props.politicalPartyChoose.politicalPartyChoose === 'Other') {
    component = <OtherPartyEntry {...props} />;
  } else {
    component = <OtherPartyRadio {...props} />;
  }

  return component;
};

export default OtherParty;
