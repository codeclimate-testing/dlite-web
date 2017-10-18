'use strict';

import React from 'react';

import HomeLink         from '../home-link.jsx';
import TextInput        from '../text-input.jsx';
import NumberInput      from '../number-input.jsx';
import ContinueButton   from '../continue-button.jsx';
import navigateOnSubmit from '../../helpers/navigate-on-submit';

const Form = (props) => {
  return (
    <div className='existing-dl-id-number-form'>
      <HomeLink />

      <h4>Please tell us about your most recent license or ID card.</h4>

      <form onSubmit={ props.onSubmit }>

        <div className='row inner-bottom'>
          <TextInput
            identifier='DLIDNumber'
            description='DRIVER LICENSE OR ID CARD NUMBER'
            value={props.existingDLIDInfo.DLIDNumber}
            onChange={props.onChange}
          />
        </div>

        <div className='row inner-bottom'>
          <TextInput
            identifier='issuedBy'
            description='STATE OR COUNTRY CARD WAS ISSUED'
            value={props.existingDLIDInfo.issuedBy}
            onChange={props.onChange}
          />
        </div>

        <label htmlFor='expirationDate'> EXPIRATION DATE </label>
        <div id='expirationDate' className='row inner-bottom'>
          <NumberInput
            onChange={props.onChange}
            identifier='month'
            description='Month'
            value={props.existingDLIDInfo.month}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='day'
            description='Day'
            value={props.existingDLIDInfo.day}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='year'
            description='Year'
            value={props.existingDLIDInfo.year}
          />
        </div>

        <ContinueButton disabled={props.continueDisabled} />
      </form>
    </div>
  )
};

export default Form;

