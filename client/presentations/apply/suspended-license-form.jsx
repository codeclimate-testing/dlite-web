'use strict';

import React from 'react';

import HomeLink         from '../home-link.jsx';
import TextInput        from '../text-input.jsx';
import NumberInput      from '../number-input.jsx';
import ContinueButton   from '../continue-button.jsx';
import navigateOnSubmit from '../../helpers/navigate-on-submit';

const Form = (props) => {
  return (
    <div className='suspended-license-form'>
      <HomeLink />

      <h4>When did this happen?</h4>
      <h5>Example: 03 21 1967</h5>

      <form onSubmit={ props.onSubmit }>
        <div className='row inner-bottom'>
          <NumberInput
            onChange={props.onChange}
            identifier='month'
            description='Month'
            value={props.suspendedLicense.month}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='day'
            description='Day'
            value={props.suspendedLicense.day}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='year'
            description='Year'
            value={props.suspendedLicense.year}
          />
        </div>

        <div className='row inner-bottom'>
          <TextInput
            identifier='reason'
            description='What was the reason?'
            value={props.suspendedLicense.reason}
            onChange={props.onChange}
          />
        </div>

        <ContinueButton disabled={props.continueDisabled} />
      </form>
    </div>
  )
};

export default Form;

