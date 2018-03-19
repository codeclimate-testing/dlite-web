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

      <fieldset>
        <DateInput
          {...props }
          values = { props.licenseIssues }
        />

        <div className='row' />

        <TextArea
          { ...props }
          identifier   = 'reason'
          description  = { <Translator tag = 'span' translationPath = 'myHistory.licenseIssuesPage.reasonLabel' /> }
          value        = { props.licenseIssues.reason }
          errorMessage = { props.validations.reason() }
        />
      </fieldset>
    </div>
  )
};

export default EnterRevokedSuspended;
