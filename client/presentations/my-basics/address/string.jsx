'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import Translate            from '../../../i18n/translate-tag.jsx';
import {
  showID,
  showDL,
  showBoth
}  from '../../../helpers/data/cards';


const CardString = (props) => {
  if (!props.showIf) { return null; }
  return (
    <Translate tag='p'>
      {props.text}
    </Translate>
  )
};


const ExplanatoryString = (props) => {
  let locale = props.locale;
  return (
    <div>
      <CardString
        showIf  = {showID(props)}
        text    = {translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.ID}
      />
      <CardString
        showIf  = {showDL(props)}
        text    = {translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.license}
      />
      <CardString
        showIf  = {showBoth(props)}
        text    = {translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.cards}
      />
    </div>
  )
};

export default ExplanatoryString;