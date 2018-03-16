'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const Question = (props) => {
  let locale = props.locale;
  return (
    <div className='interstitial-address-form'>
      <hr />
      <Translation tag='h2' className='question'>
        {translations[locale].myBasics.addressesPage.mailingAddressSamePrompt}
      </Translation>
        {props.children}
      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name          = 'homeAddressSameAsMailing'
            onBlur        = { props.onBlurValidate }
            errorMessage  = { props.validations.homeAddressSameAsMailing()}
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Question;
