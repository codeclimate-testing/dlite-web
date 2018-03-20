'use strict';

import React                  from 'react';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import MessageBox             from '../../message-box.jsx';
import { guardianNotSigned }  from '../../../helpers/data/youth';
import Translator             from '../../../i18n/translator-tag.jsx';

const MessageNo = (props) => {
  if (!guardianNotSigned(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div>
        <Translator
          tag             = 'p'
          translationPath = 'parentGuardianSignaturePage.signatureSection.explanation'
        />
      </div>
    </MessageBox>
  );
};

const SignatureChoice = (props) => {
  let locale = props.locale;
  return (
    <div className='signature-choice-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'parentGuardianSignaturePage.prompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'parentGuardianSignaturePage.explanation'
      />
      <p className='translation-missing'>Is your parent/guardian available to sign your application?</p>
      <div>
        <fieldset role='group' aria-label='Guardian available choice'>
          <RadioCollection
            {...props}
            name          = 'isSigned'
            onChange      = {props.onGuardianSignatureChange}
            onBlur        = { props.onBlurValidate }
            errorMessage  = { props.validations.isSigned()}
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
        <MessageNo {...props} />
      </div>
    </div>
  );
};

export default SignatureChoice;
