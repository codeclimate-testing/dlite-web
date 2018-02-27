'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import Translate            from '../../../i18n/translate-tag.jsx';
import {
  showID,
  showDL,
  showBoth
}  from '../../../helpers/data/cards';


const ExplanatoryString = (props) => {
  let locale = props.locale;
  const IDString = (props) => {
    if (!showID(props)) { return null;}
    return (
      <Translate tag='p'>
        {translations.myBasics.addressesPage.mailingAddressSameExplanation.ID}
      </Translate>
    );
  };

  const DLString = (props) => {
    if (!showDL(props)) { return null; }
    return (
      <Translate tag='p'>
        {translations.myBasics.addressesPage.mailingAddressSameExplanation.license}
      </Translate>
    );
  };

  const BothString = (props) => {
    if (!showBoth(props)) { return null; }
    return (
      <Translate tag='p'>
        {translations.myBasics.addressesPage.mailingAddressSameExplanation.cards}
      </Translate>
    );
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