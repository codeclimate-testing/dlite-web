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
  return convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.ID);
};

const DLString = (props) => {
  if (!getDL(props)) { return null; }
  return convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.license);
};

const BothString = (props) => {
  if (!hasMultipleCards(props)) { return null; }
  return convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.cards);
};


const Question = (props) => {

  return (
    <div className='interstitial-address-form'>
      <hr />
        {convertToHtml('h2', translations.myBasics.addressesPage.mailingAddressSamePrompt, 'question')}
        <IDString cardType={props.cardType} />
        <DLString cardType={props.cardType} />
        <BothString cardType={props.cardType}/>
      <div className='input-container'>
        <fieldset>
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
