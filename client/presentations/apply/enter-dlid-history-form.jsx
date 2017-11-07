'use strict';

import React from 'react';

import TextInput        from '../text-input.jsx';
import NumberInput      from '../number-input.jsx';

const EnterDlidHistory = (props) => {
  return (
    <div className='existing-dl-id-number-form'>

      <h4>Please tell us about your most recent license or ID card.</h4>

        <div className='row inner-bottom'>
          <TextInput
            identifier='DLIDNumber'
            description='DRIVER LICENSE OR ID CARD NUMBER'
            value={props.dlidHistory.DLIDNumber}
            onChange={props.onChange}
          />
        </div>

        <div className='row inner-bottom'>
          <TextInput
            identifier='issuedBy'
            description='STATE OR COUNTRY CARD WAS ISSUED'
            value={props.dlidHistory.issuedBy}
            onChange={props.onChange}
          />
        </div>

        <label htmlFor='expirationDate'> EXPIRATION DATE </label>
        <div id='expirationDate' className='row inner-bottom'>
          <NumberInput
            onChange={props.onChange}
            identifier='month'
            description='Month'
            value={props.dlidHistory.month}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='day'
            description='Day'
            value={props.dlidHistory.day}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='year'
            description='Year'
            value={props.dlidHistory.year}
          />
        </div>
    </div>
  )
};

export default EnterDlidHistory;

