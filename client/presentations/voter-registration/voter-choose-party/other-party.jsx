'use strict';

import React from 'react';

import TextInput        from '../../text-input.jsx';
import RadioSelector    from '../../radio-selector.jsx';
import Translator       from '../../../i18n/translator-tag.jsx';
import {
  ErrorIcon,
  ErrorLabel,
  errorClass
} from '../../validations.jsx';

const ChoosePartyPageAnswerOther = () =>{
  return (
    <Translator
      tag             = 'span'
      translationPath = 'votingRegistration.choosePartyPage.answerOther'
    />
  );
}
const OtherPartyRadio = (props) => {
  return (
    <RadioSelector
      {...props}
      value = 'other'
      text  = { <ChoosePartyPageAnswerOther/> }
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
        value     = ''
        text      = ''
        selected  = { true }
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

  if (props.politicalPartyChoose.politicalPartyChoose === 'other') {
    component = <OtherPartyEntry {...props} />;
  } else {
    component = <OtherPartyRadio {...props} />;
  }

  return component;
};

export default OtherParty;
