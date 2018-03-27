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
      {props.children}
    </span>
  )
};


const ExplanatoryString = (props) => {
  return (
    <div>
      <CardString showIf  = { showID(props) } >
        <Translator tag = 'span' translationPath = 'myBasics.addressesPage.mailingAddressSameExplanation.ID' />
      </CardString>

      <CardString showIf  = { showDL(props) } >
        <Translator tag = 'span' translationPath = 'myBasics.addressesPage.mailingAddressSameExplanation.license' />
      </CardString>

      <CardString showIf  = { showBoth(props) } >
        <Translator tag = 'span' translationPath = 'myBasics.addressesPage.mailingAddressSameExplanation.cards' />
      </CardString>
    </div>
  )
};

export default ExplanatoryString;