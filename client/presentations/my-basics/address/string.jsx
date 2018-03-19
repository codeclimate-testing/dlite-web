'use strict';

import React               from 'react';
import Translator          from '../../../i18n/translator-tag.jsx';
import {
  showID,
  showDL,
  showBoth
}  from '../../../helpers/data/cards';


const CardString = (props) => {
  if (!props.showIf) { return null; }
  return (
    <span className='translation-missing'>
      {props.text}
    </span>
  )
};


const ExplanatoryString = (props) => {
  return (
    <div>
      <CardString
        showIf  = { showID(props) }
        text    = { <Translator tag = 'span' translationPath = 'myBasics.addressesPage.mailingAddressSameExplanation.ID' /> }
      />
      <CardString
        showIf  = { showDL(props) }
        text    = { <Translator tag = 'span' translationPath = 'myBasics.addressesPage.mailingAddressSameExplanation.license' /> }
      />
      <CardString
        showIf  = { showBoth(props) }
        text    = { <Translator tag = 'span' translationPath = 'myBasics.addressesPage.mailingAddressSameExplanation.cards' /> }
      />
    </div>
  )
};

export default ExplanatoryString;