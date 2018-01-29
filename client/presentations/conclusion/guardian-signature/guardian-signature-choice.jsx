'use strict';

import React from 'react';

import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox             from '../../message-box.jsx';

const MessageNo = (props) => {
  if (props.guardianSignature.isSigned !== 'No') { return null; }

  return (
    <MessageBox className='info'>
      <div>
        <p>Your application will not be complete until your parent/guardian signs.</p>
      </div>
    </MessageBox>
  );
};

const SignatureChoice = (props) => {
  return (
    <div className='signature-choice-form'>
      <h2 className='question'>Because you are under 18, you will need a parent or guardian signature.</h2>
      <p>If you have more than one parent or guardian with custody, both must sign.</p>
      <p>Is your parent/guardian available to sign your application?</p>
      <div>
        <RadioCollection
          {...props}
          name          = 'isSigned'
          text          = {['Yes', 'No']}
          onChange      = {props.onGuardianSignatureChange}
          onBlur        = { props.onBlurValidate }
          errorMessage  = { props.validations.isSigned()}
        >
          { radioYesNoGroup() }
        </RadioCollection>
        <MessageNo {...props} />
      </div>
    </div>
  );
};

export default SignatureChoice;
