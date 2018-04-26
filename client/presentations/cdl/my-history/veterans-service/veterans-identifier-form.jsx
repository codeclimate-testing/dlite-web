'use strict';

import React                    from 'react';
import radioYesNoGroup          from '../../../radio-yes-no-group.jsx';
import RadioCollection          from '../../../radio-selector-collection.jsx';
import MessageBox               from '../../../message-box.jsx';
import Translator               from '../../../../i18n/translator-tag.jsx';
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


const Question = (props) => {
  if (!isPreviouslyDesignated(props)) {
    return(
      <div className='new-designation'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'newApproved.cdl.myHistory.veteran.addVeteran'
          tabIndex        = '0'
        />
      </div>
      );
  }
  else{
    return(
      <div className='previous-designation'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'newApproved.cdl.myHistory.veteran.keepVeteran'
          tabIndex        = '0'
        />
      </div>
    );
  }
};

const MessageAddAmount = (props) => {
  if (!showIdentifierMessage(props) || isPreviouslyDesignated(props)) { return null; }

  return (
    <MessageBox className = 'info'>
      <div className='veteran-identifier-fee'>
        <Translator
          tag             = 'p'
          translationPath = 'myHistory.veteransPage.newDesignation.messageYes'
        />
      </div>
    </MessageBox>
  );
};

const MessageRemovingDesignation = (props) => {
  if (!removeIdentifierNotification(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='remove-veteran-identifier'>
        <Translator
          tag             = 'p'
          translationPath = 'extras.vetranRemoveMessage'
        />
      </div>
    </MessageBox>
  );
};

const VeteransIdentifier = (props) => {
  if(!props.showIf) { return null; }

  return (
    <div className='veterans-identifier-form'>
    <Question {...props} />

      <Translator
        tag             = 'p'
        translationPath = 'myHistory.veteransPage.newDesignation.explanation'
      />

      <div className='input-container'>
        <fieldset role='group' aria-label='Veteran designation choice'>
          <RadioCollection
            {...props}
            name='veteransIdentifier'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>

      <MessageAddAmount           {...props} />
      <MessageRemovingDesignation {...props} />
    </div>
  );
};

export default VeteransIdentifier;
