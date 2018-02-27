'use strict';

import React                from 'react';
import translations         from '../../../i18n'
import { convertToHtml }    from '../../../i18n/convert-to-html.jsx';
import {
  showID,
  showDL,
  showBoth
}  from '../../../helpers/data/cards';


const ExplanatoryString = (props) => {
  let locale = props.locale;
  const IDString = (props) => {
    if (!showID(props)) { return null;}
    return convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.ID);
  };

  const DLString = (props) => {
    if (!showDL(props)) { return null; }
    return convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.license);
  };

  const BothString = (props) => {
    if (!showBoth(props)) { return null; }
    return convertToHtml('p', translations.myBasics.addressesPage.mailingAddressSameExplanation.cards);
  };

  return (
    <div>
      <IDString cardType={props.cardType} />
      <DLString cardType={props.cardType} />
      <BothString cardType={props.cardType}/>
    </div>
  )
};

export default ExplanatoryString;