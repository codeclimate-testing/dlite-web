'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';
import { hasMultipleCards } from '../../../helpers/data/cards';
import {
  getID,
  getDL
}         from '../../../helpers/data/card-type';

const IDString = (props) => {
  if (!getID(props)) { return null;}
  let locale = props.locale;
  return convertToHtml('p', translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.ID);
};

const DLString = (props) => {
  if (!getDL(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.license);
};

const BothString = (props) => {
  if (!hasMultipleCards(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.cards);
};


const Question = (props) => {
  let locale = props.locale;
  return (
    <div className='interstitial-address-form'>
      <hr />
        {convertToHtml('h2', translations[locale].myBasics.addressesPage.mailingAddressSamePrompt, 'question')}
        <IDString
          {...props}
          cardType={props.cardType}
        />
        <DLString
          {...props}
          cardType={props.cardType}
        />
        <BothString
          {...props}
          cardType={props.cardType}
        />
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
