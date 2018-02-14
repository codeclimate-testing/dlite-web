'use strict';

import React                    from 'react';
import radioYesNoGroup          from '../../radio-yes-no-group.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';
import MessageBox               from '../../message-box.jsx';
import { getDL }                from '../../../helpers/data/card-type';
import {
  showIdentifierMessage,
  removeIdentifierNotification,
  showPreviousIDHeader,
  showPreviousDLHeader,
  showNewIDHeader,
  showNewDLHeader,
  keepOrAdd
}   from '../../../helpers/data/veteran';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const PreviousIDHeader = (props) => {
  if (!showPreviousIDHeader(props)) { return null; }
  return convertToHtml('h2', translations.myHistory.veteransPage.keepDesignationPrompt.id, 'question')
};

const PreviousDLHeader = (props) => {
  if (!showPreviousDLHeader(props)) {return null; }
  return convertToHtml('h2', translations.myHistory.veteransPage.keepDesignationPrompt.license, 'question')
};

const CardHeader = (props) => {
  if (!showNewDLHeader(props)) { return null; }
  return convertToHtml('h2', translations.myHistory.veteransPage.newDesignation.prompt, 'question')
};


const Question = (props) => {
  const className   = keepOrAdd(props) + '-designation';
  return (
    <div className={className}>
      <hr/>
      <PreviousIDHeader {...props} />
      <PreviousDLHeader {...props}/>
      <CardHeader {...props}/>
    </div>
  )
};

const MessageAddAmount = (props) => {
  if (!showIdentifierMessage(props)) { return null; }
  return (
    <MessageBox className = 'info'>
      <div className='veteran-identifier-fee'>
        {convertToHtml('p', translations.myHistory.veteransPage.newDesignation.messageYes)}
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
  return (
    <div className='veterans-identifier-form'>
      <Question {...props} />
      {convertToHtml('p', translations.myHistory.veteransPage.newDesignation.explanation)}
      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name='veteransIdentifier'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>

      <MessageAddAmount {...props} />
      <MessageRemovingDesignation {...props} />
    </div>
  );
};

export default VeteransIdentifier;
