'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

let translationPath = translations.myBasics.socialSecurityPage;

const Form = (props) => {
  return (
    <div className='social-security-option-form'>
      {convertToHtml('h2', translationPath.prompt, 'question')}
      {convertToHtml('p', translationPath.explanation)}
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
