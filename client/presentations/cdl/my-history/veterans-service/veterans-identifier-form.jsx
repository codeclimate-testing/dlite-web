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
import Translation        from '../../../../i18n/translate-tag.jsx';

const Question = (props) => {
  if (!isPreviouslyDesignated(props)) {
    return(
      <div className='new-designation'>
        <Translation tag='h2' className='question translation-missing'>
          Would you like to add the word “Veteran” on your CDL for a $5 fee?
        </Translation>
      </div>
    );
  }
  else{
    return(
      <div className='previous-designation'>
        <Translation tag='h2' className='question translation-missing'>
          Would you like to keep "Veteran" on your CDL?
        </Translation>
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
        <Translation tag='p'>
          {translations[locale].myHistory.veteransPage.newDesignation.messageYes}
        </Translation>
      </div>
    </MessageBox>
  );
};

const MessageRemovingDesignation = (props) => {
  if (!removeIdentifierNotification(props)) { return null; }
  return (
    <MessageBox className='info'>
      <div className='remove-veteran-identifier'>
        <Translation tag='p' className='translation-missing'>
          OK, we will remove it.
        </Translation>
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
        <Translation tag='p'>
          {translations[locale].myHistory.veteransPage.newDesignation.explanation}
        </Translation>
      <div className='input-container'>
        <fieldset role='group' aria-label='Veteran designation choice'>
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
