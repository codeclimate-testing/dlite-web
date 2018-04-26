'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {

  return (
    <div className='social-security-option-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myBasics.socialSecurityPage.prompt'
        tabIndex        = '0'
      />
      <Translator
        tag             = 'p'
        translationPath = 'myBasics.socialSecurityPage.explanation'
      />
      <div className='input-container'>
        <fieldset role='group' aria-label='Do you have a social security number?'>
          <RadioCollection
            {...props}
            name          = 'hasSocialSecurity'
            errorMessage  = { props.validations.ssnAll() }
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
