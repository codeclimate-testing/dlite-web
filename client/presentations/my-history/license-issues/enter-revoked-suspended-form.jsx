'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import DateInput          from '../../date-input.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const EnterRevokedSuspended = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='suspended-license-form'>
      <hr />
      {convertToHtml('h2', translations[locale].myHistory.licenseIssuesPage.explanationPrompt, 'question')}
      {convertToHtml('p', translations[locale].myHistory.licenseIssuesPage.helpText)}

      <fieldset>
        <DateInput
          {...props }
          values = { props.licenseIssues }
        />

        <div className='row' />

        <TextArea
          { ...props }
          identifier   = 'reason'
          description  = {translations[locale].myHistory.licenseIssuesPage.reasonLabel}
          value        = { props.licenseIssues.reason }
          errorMessage = { props.validations.reason() }
        />
      </fieldset>
    </div>
  )
};

export default EnterRevokedSuspended;
