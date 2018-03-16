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
  keepOrAdd,
  isPreviouslyDesignated
}   from '../../../helpers/data/veteran';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const PreviousIDHeader = (props) => {
  if (!showPreviousIDHeader(props)) { return null; }
  let locale = props.locale;
  return <Translation tag='h2' className='question'>
    {translations[locale].myHistory.veteransPage.keepDesignationPrompt.id}
  </Translation>
};

const PreviousDLHeader = (props) => {
  if (!showPreviousDLHeader(props)) {return null; }
  let locale = props.locale;
  return <Translation tag='h2' className='question'>
    {translations[locale].myHistory.veteransPage.keepDesignationPrompt.license}
  </Translation>
};

const CardHeader = (props) => {
  if (isPreviouslyDesignated(props)) { return null; }
  let locale = props.locale;
  return <Translation tag='h2' className='question'>
    {translations[locale].myHistory.veteransPage.newDesignation.prompt}
  </Translation>
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
