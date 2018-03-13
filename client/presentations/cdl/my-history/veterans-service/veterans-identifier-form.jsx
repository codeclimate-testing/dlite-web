'use strict';

import React                    from 'react';
import radioYesNoGroup          from '../../../radio-yes-no-group.jsx';
import RadioCollection          from '../../../radio-selector-collection.jsx';
import MessageBox               from '../../../message-box.jsx';

import {
  showIdentifierMessage,
  removeIdentifierNotification,
  showPreviousIDHeader,
  showPreviousDLHeader,
  showNewIDHeader,
  showNewDLHeader,
  keepOrAdd,
  isPreviouslyDesignated
}   from '../../../../helpers/data/veteran';
import translations       from '../../../../i18n'
import { convertToHtml }  from '../../../../i18n/convert-to-html.jsx';

const Question = (props) => {
  if (!isPreviouslyDesignated(props)) {
    return(
      <div className='new-designation'>
        {convertToHtml('h2', 'Would you like to add the word “Veteran” on your CDL for a $5 fee?', 'question translation-missing')}
      </div>
    );
  }
  else{
    return(
      <div className='previous-designation'>
        {convertToHtml('h2', 'Would you like to keep "Veteran" on your CDL?', 'question translation-missing')}
      </div>
    );
  }

};

const MessageAddAmount = (props) => {
  if (!showIdentifierMessage(props) || isPreviouslyDesignated(props)) { return null; }
  let locale = props.locale;
  return (
    <MessageBox className = 'info'>
      <div className='veteran-identifier-fee'>
        {convertToHtml('p', translations[locale].myHistory.veteransPage.newDesignation.messageYes)}
      </div>
    </MessageBox>
  );
};

const MessageRemovingDesignation = (props) => {
  if (!removeIdentifierNotification(props)) { return null; }
  return (
    <MessageBox className='info'>
      <div className='remove-veteran-identifier'>
        <p className='translation-missing'>OK, we will remove it.</p>
      </div>
    </MessageBox>
  );
};

const VeteransIdentifier = (props) => {
  if(!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='veterans-identifier-form'>
    <Question {...props} />
      {convertToHtml('p', translations[locale].myHistory.veteransPage.newDesignation.explanation)}
      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name='veteransIdentifier'
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>

      <MessageAddAmount           {...props} />
      <MessageRemovingDesignation {...props} />
    </div>
  );
};

export default VeteransIdentifier;