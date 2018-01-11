'use strict';

import React            from 'react';
import NumberInput      from '../../number-input.jsx';

const Form = (props) => {
  if(props.socialSecurity.hasSocialSecurity !== 'Yes') { return null; }
  
  return (
    <div className='social-security-enter-form'>
      <hr/>
      <h2 className='question'>What’s your Social Security Number?</h2>
      <p>Example: 123 - 45 - 6789</p>

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
