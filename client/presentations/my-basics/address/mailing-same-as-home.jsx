'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import { IDorDL }         from '../../../helpers/data/card-type';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Question = (props) => {
  let IDString = convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.ID);
  let DLString = convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.license);
  let bothString = convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.cards);

  let cardType = IDorDL(props);
  let headerText = cardType === 'both' ? bothString : cardType === 'DL' ? DLString : IDString;

  return (
    <div className='interstitial-address-form'>
      <hr />
        {convertToHtml('h2', translations.myBasics.addressesPage.mailingAddressSamePrompt, 'question')}
        {headerText}
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
