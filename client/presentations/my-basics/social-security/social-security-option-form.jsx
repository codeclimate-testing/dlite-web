'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;

  return (
    <div className='social-security-option-form'>
      <Translation tag='h2' className='question'>
        {translations[locale].myBasics.socialSecurityPage.prompt}
      </Translation>
      <Translation tag='p'>
        {translations[locale].myBasics.socialSecurityPage.explanation}
      </Translation>
      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name='hasSocialSecurity'
            errorMessage={ props.validations.ssnAll() }
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
