'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Question = (props) => {
  return (
    <div className='interstitial-address-form'>
      <hr />
      <Translator
        tag='h2'
        className='question'
        translationPath = 'myBasics.addressesPage.mailingAddressSamePrompt'
        tabIndex = '0'
      />

        {props.children}

      <div className='input-container'>
        <fieldset role='group' aria-label='Home address same as mailing'>
          <RadioCollection
            {...props}
            name          = 'homeAddressSameAsMailing'
            onBlur        = { props.onBlurValidate }
            errorMessage  = { props.validations.homeAddressSameAsMailing()}
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Question;
