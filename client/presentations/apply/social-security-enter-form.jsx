'use strict';

import React            from 'react';
import HomeLink         from '../home-link.jsx';
import NumberInput      from '../number-input.jsx';

const Form = (props) => {
  return (
    <div className='social-security-enter-form'>
      <h4>What’s your Social Security Number?</h4>
      <h5>Example: 123 - 45 - 6789</h5>

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
    </div>
  );
};

export default Form;
