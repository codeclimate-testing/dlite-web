'use strict';

import React            from 'react';
import TextArea         from '../../text-area.jsx';
import NumberInput      from '../../number-input.jsx';
import DateInput        from '../../date-input.jsx';

const EnterRevokedSuspended = (props) => {
  if(props.licenseIssues.isSuspended !== 'Yes') { return null; }
  return (
    <div className='suspended-license-form'>
      <hr/>
      <h2 className='question'>When did this happen?</h2>
      <p>Example: 03/21/1967</p>

        <div className='row inner-bottom'>
          <DateInput
            {...props }
            values      = { props.licenseIssues }
          />
        </div>

        <div className='row inner-bottom'>
          <TextArea
            identifier  = 'reason'
            description = 'What was the reason?'
            value       = { props.licenseIssues.reason }
            onChange    = { props.onChange }
            errorMessage = { props.validations.reason() }
          />
        </div>
    </div>
  )
};

export default EnterRevokedSuspended;
