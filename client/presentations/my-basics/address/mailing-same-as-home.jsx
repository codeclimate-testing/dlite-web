'use strict';

import React                from 'react';

import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import { IDorDL }           from '../../../helpers/data/card-type';
import translations         from '../../../i18n'

const Question = (props) => {
  let IDString = translations.myBasics.addressesPage.mailingAddressSameExplanation.ID;
  let DLString = translations.myBasics.addressesPage.mailingAddressSameExplanation.license;
  let bothString = translations.myBasics.addressesPage.mailingAddressSameExplanation.cards;

  let cardType = IDorDL(props);
  let headerText = cardType === 'both' ? bothString : cardType === 'DL' ? DLString : IDString;

  return (
    <div className='interstitial-address-form'>
      <hr/>
      <h2 className='question'>{translations.myBasics.addressesPage.mailingAddressSamePrompt}</h2>
      <p>{headerText}</p>
      <div className='input-container'>
        <RadioCollection
          {...props}
          name          = 'homeAddressSameAsMailing'
          onBlur        = { props.onBlurValidate }
          errorMessage  = { props.validations.homeAddressSameAsMailing()}
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </div>
    </div>
  );
};

export default Question;
