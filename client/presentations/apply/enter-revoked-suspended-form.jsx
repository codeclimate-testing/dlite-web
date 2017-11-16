'use strict';

import React            from 'react';
import TextInput        from '../text-input.jsx';
import NumberInput      from '../number-input.jsx';
import { Link }         from 'react-router-dom';

const EnterRevokedSuspended = (props) => {
  return (
    <div className='suspended-license-form'>

      <h4>When did this happen?</h4>
      <h5>Example: 03/21/1967</h5>

        <div className='row inner-bottom'>
          <NumberInput
            identifier='month'
            description='Month'
            value={props.licenseIssues.month}
            onChange    = {props.onChange}
          />

          <div className='unit spacer' />

          <NumberInput
            identifier='day'
            description='Day'
            value={props.licenseIssues.day}
            onChange    = {props.onChange}
          />

          <div className='unit spacer' />

          <NumberInput
            identifier='year'
            description='Year'
            value={props.licenseIssues.year}
            onChange    = {props.onChange}
          />
        </div>

        <div className='row inner-bottom'>
          <TextInput
            identifier='reason'
            description='What was the reason?'
            value={props.licenseIssues.reason}
            onChange={props.onChange}
          />
        </div>
    </div>
  )
};

export default EnterRevokedSuspended;
