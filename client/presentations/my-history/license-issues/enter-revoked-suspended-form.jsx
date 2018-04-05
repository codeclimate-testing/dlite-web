'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import DateInput          from '../../date-input.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const EnterRevokedSuspended = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='suspended-license-form'>
      <hr />
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.licenseIssuesPage.explanationPrompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'myHistory.licenseIssuesPage.helpText'
      />

      <fieldset role='group' aria-label='License issue explanation'>

        <DateInput
          {...props }
          values={props.licenseIssues}
        />

      </fieldset>

      <fieldset role='group' aria-label='License issue reason'>
        <TextArea
          { ...props }
          identifier   = 'reason'
          value        = { props.licenseIssues.reason }
          errorMessage = { props.validations.reason() }
        >
        
        <Translator tag='span' translationPath='myHistory.licenseIssuesPage.reasonLabel' />
        </TextArea>
      </fieldset>
    </div>
  )
};

export default EnterRevokedSuspended;
