'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Question = (props) => {
  let locale = props.locale;
  return (
    <div className='interstitial-address-form'>
      <hr />
        {convertToHtml('h2', translations[locale].myBasics.addressesPage.mailingAddressSamePrompt, 'question')}
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
