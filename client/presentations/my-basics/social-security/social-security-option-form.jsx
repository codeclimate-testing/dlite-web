'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import translations       from '../../../i18n';

let translationPath = translations.myBasics.socialSecurityPage;

const Form = (props) => {
  return (
    <div className='social-security-option-form'>
      <h2 className='question'>{translationPath.prompt}</h2>
      <p>{translationPath.explanation}</p>
        <div className='input-container'>
        <fieldset>
        <RadioCollection
          {...props}
          name='hasSocialSecurity'
          errorMessage={ props.validations.ssnAll() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
