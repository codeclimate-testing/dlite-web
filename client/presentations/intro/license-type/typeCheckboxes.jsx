'use strict';

import React            from 'react';
import CheckboxSelector from '../../checkbox-selector.jsx';
import * as dataPresent from '../../../helpers/data-present';

const Form = (props) => {

  return (
    <div className='license-type-form'>
      <h4>What do you need to drive?</h4>
      <h5>Select all that apply</h5>
      <div className='row inner-bottom'>
        <CheckboxSelector 
          {...props}
          value =     'car'
          selected =  { dataPresent.includes(props.licenseType.type, 'car') }
          text =      'Car'
        />
        <CheckboxSelector 
          {...props}
          value =     'cycle'
          selected =  { dataPresent.includes(props.licenseType.type, 'cycle') }
          text =      'Motorcycle or scooter'
        />
        <CheckboxSelector 
          {...props}
          value =     'trailer'
          selected =  { dataPresent.includes(props.licenseType.type, 'trailer') }
          text =      '5th wheel or livestock trailer'
        />
        <CheckboxSelector 
          {...props}
          value =     'long'
          selected =  { dataPresent.includes(props.licenseType.type, 'long') }
          text =      'Housecar over 45 feet or trailer over 25 feet'
        />
        <CheckboxSelector 
          {...props}
          value =     'unsure'
          selected =  { dataPresent.includes(props.licenseType.type, 'unsure') }
          text =      'I’m not sure'
        />
        <div className='unit spacer' />
      </div>
    </div>
  )
};

export default Form;