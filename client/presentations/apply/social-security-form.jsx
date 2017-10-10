'use strict';

import React            from 'react';
import HomeLink         from '../home-link.jsx';
import NumberInput      from '../number-input.jsx';
import ContinueButton   from '../continue-button.jsx';

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='social-security-form'>
      <HomeLink />
      <h4>What’s your Social Security Number?</h4>
      <h5>Example: 123 - 45 - 6789</h5>

      <form onSubmit={ props.onSubmit }>
        <div className='row inner-bottom'>
          <NumberInput
            onChange={props.onChange}
            identifier='part1'
            description=''
            value={props.socialSecurity.part1}
          />

          <div className='unit social-security-dash'>-</div>

          <NumberInput
            onChange={props.onChange}
            identifier='part2'
            description=''
            value={props.socialSecurity.part2}
          />

          <div className='unit social-security-dash'>-</div>

          <NumberInput
            onChange={props.onChange}
            identifier='part3'
            description=''
            value={props.socialSecurity.part3}
          />
        </div>

        <ContinueButton disabled={ props.continueDisabled } />
      </form>
    </div>
  );
};

export default Form;

