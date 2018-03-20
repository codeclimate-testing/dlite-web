'use strict';

import React                    from 'react';
import radioYesNoGroup          from '../../radio-yes-no-group.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';
import MessageBox               from '../../message-box.jsx';
import Translator               from '../../../i18n/translator-tag.jsx';
import { getDL }                from '../../../helpers/data/card-type';
import {
  showIdentifierMessage,
  removeIdentifierNotification,
  showPreviousIDHeader,
  showPreviousDLHeader,
  showNewIDHeader,
  showNewDLHeader,
  keepOrAdd,
  isPreviouslyDesignated
}   from '../../../helpers/data/veteran';
import translations       from '../../../i18n'

const PreviousIDHeader = (props) => {
  if (!showPreviousIDHeader(props)) { return null; }
  return(
    <Translator
      tag             = 'h2'
      className       = 'question'
      translationPath = 'myHistory.veteransPage.keepDesignationPrompt.id'
    />
  );
};

const PreviousDLHeader = (props) => {
  if (!showPreviousDLHeader(props)) {return null; }
  return(
    <Translator
      tag             = 'h2'
      className       = 'question'
      translationPath = 'myHistory.veteransPage.keepDesignationPrompt.license'
    />
  );
};

const CardHeader = (props) => {
  if (isPreviouslyDesignated(props)) { return null; }
  return(
    <Translator
      tag             = 'h2'
      className       = 'question'
      translationPath = 'myHistory.veteransPage.newDesignation.prompt'
    />
  );
};


const Question = (props) => {
  const className   = keepOrAdd(props) + '-designation';
  return (
    <div className={className}>
      <hr/>
      <PreviousIDHeader {...props} />
      <PreviousDLHeader {...props}/>
      <CardHeader       {...props}/>
    </div>
  )
};

const MessageAddAmount = (props) => {
  if (!showIdentifierMessage(props) || isPreviouslyDesignated(props)) { return null; }

  return (
    <MessageBox className='info'>
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
  let locale = props.locale;
  if (!removeIdentifierNotification(props)) { return null; }
  return (
    <MessageBox className='info'>
      <div className='remove-veteran-identifier'>
        <span className='translation-missing'>
          <Translator
            tag             = 'p'
            translationPath = 'extras.vetranRemoveMessage'
          />
        </span>
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
        <fieldset role='group' aria-label='Choose veteran designation'>
          <RadioCollection
            {...props}
            name  = 'veteransIdentifier'
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
